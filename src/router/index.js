import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/basicInfo",

    children:[
      {
        path: "/basicInfo",
        name: "BasicInfo",
        component: () =>
            import(/* webpackChunkName: "basicInfo" */ "../views/BasicInfo"),
      },
      {
        path: "/professionalSkill",
        name: "ProfessionalSkill",
        component: () =>
            import(/* webpackChunkName: "professionalSkill" */ "../views/ProfessionalSkill"),
      },
      {
        path: "/trackRecord",
        name: "TrackRecord",
        component: () =>
            import(/* webpackChunkName: "trackRecord" */ "../views/TrackRecord"),
      },
      {
        path: "/projectExperience",
        name: "ProjectExperience",
        component: () =>
            import(/* webpackChunkName: "projectExperience" */ "../views/ProjectExperience"),
      },
    ]
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
