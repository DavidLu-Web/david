/**
 * @author David
 * @date 2021-11-02 09:14
 */

/**
 * @param {Array}  data
 * @param { object}  option
 */
export function chart(data, option = {}) {
  //默认配置 defaultOptions
  let defaultOptions = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      top: "top",
      // align:'auto'
    },
    series: [
      {
        name: "专业技能",
        type: "pie",
        radius: "45%",
        labelLine: {
          length: 20,
        },
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          formatter: "{a|{b}}{abg|}\n{hr|}\n {per|{d}%}  ",
          backgroundColor: "#F6F8FC",
          borderColor: "#8C8D8E",
          borderWidth: 1,
          padding: [2, 2],
          borderRadius: 4,
          align: "left",
          rich: {
            a: {
              color: "#6E7079",
              lineHeight: 15,
              fontSize: 12,

              align: "center",
            },
            hr: {
              borderColor: "#8C8D8E",
              width: "100%",
              borderWidth: 1,
              height: 0,
            },
            b: {
              color: "#4C5058",
              fontSize: 8,
              fontWeight: "bold",
              lineHeight: 20,
            },
            per: {
              color: "#4C5058",
              align: "center",
              // backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4,
            },
          },
        },
        data,

        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  option = Object.keys(option).length === 0 ? defaultOptions : option;
  return option;
}
