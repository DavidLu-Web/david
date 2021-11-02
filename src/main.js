import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "./style/iconfont.css";
import "element-plus/dist/index.css";
import "./style/index.css";
//导入mock
require("@/mock");
createApp(App).use(ElementPlus).use(router).mount("#app");
