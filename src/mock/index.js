/**
 * @author David
 * @date 2021-11-02 13:57
 */
import Mock from "mockjs";

export default Mock.mock("http://localhost/user", {
  // 输出数据
  "userTableData|3": [
    {
      companyName: "@cname 科技有限公司",
      startEndDate: "@date 至 @date",
      department: "@province",
      post: "@city",
      project: "@county(true) @ctitle() @natural(1000,9999) 号",
      projectType: "@zip",
    },
  ],
});

Mock.setup({
  timeout: "200-600",
});
