import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

const routes: any = [
  {
    //登录界面router
    path: "/",
    name: "home",
    component: Home,
    redirect: "/welcome",
    children: [
      {
        //路径为/welcome匹配成功
        path: "welcome",
        name: "welcome",
        component: () => import("../components/Welcome.vue"),
        children: [
          {
            //路径为/welcome/cardslide匹配成功
            path: "cardslide",
            name: "cardslide",
            component: () => import("../components/css/cardSlide.vue"),
          },
          {
            //路径为/welcome/primary匹配成功
            path: "primary",
            name: "primary",
            component: () => import("../components/css/primary.vue"),
          },
          {
            //路径为/welcome/gressSlideHover匹配成功
            path: "gressSlideHover",
            name: "gressSlideHover",
            component: () => import("../components/css/gressSlideHover.vue"),
          },
          {
            //路径为/welcome/3Dball匹配成功
            path: "threeDball",
            name: "threeDball",
            component: () => import("../components/css/threeDball.vue"),
          },
          {
            //路径为/welcome/rotateball匹配成功
            path: "rotateball",
            name: "rotateball",
            component: () => import("../components/css/rotateBall.vue"),
          },
          {
            //路径为/welcome/strangeheadportrait匹配成功
            path: "strangeheadportrait",
            name: "strangeheadportrait",
            component: () =>
              import("../components/css/strangeHeadPortrait.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
];

// 创建路由
const router = createRouter({
  // process是一个进程
  // process.env.BASE_URL是当前环境配置的基础路径
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;

// router.push({
//   name: 'Home',
//   params: {
//     names: name.value,
//     arrs: arr.value,
//     objs: JSON.stringify(obj)
//   }
// })
