import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/new_design/splash.vue"),
  },
  {
    path: "/new_design/body_view",
    name: "BodyView",
    component: () => import("../views/new_design/body_view.vue"),
  },
  {
    path: "/new_design/cardio_risk",
    name: "CardioRisk",
    component: () => import("../views/new_design/cardio_risk.vue"),
  },
  {
    path: "/new_design/sign-in",
    name: "SignIn",
    component: () => import("../views/new_design/sign-in.vue"),
  },
  {
    path: "/new_design/spark_details",
    name: "SparkDetails",
    component: () => import("../views/new_design/spark_details.vue"),
  },
  {
    path: "/new_design/spark_price",
    name: "SparkPrice",
    component: () => import("../views/new_design/spark_price.vue"),
  },
  {
    path: "/new_design/uae-info",
    name: "UaeInfo",
    component: () => import("../views/new_design/uae-info.vue"),
  },
  {
    path: "/new_design/virtual_visit",
    name: "VirtualVisit",
    component: () => import("../views/new_design/virtual_visit.vue"),
  },
  {
    path: "/new_design/welcome",
    name: "Welcome",
    component: () => import("../views/new_design/welcome.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
