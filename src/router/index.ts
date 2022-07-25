import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView.vue";
import NotFound from "../views/NotFoundView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "calculatorv1",
    path: "/calculator-v1",
    component: () => import("../views/CalculatorView.v1.vue"),
  },
  {
    name: "calculatorv2",
    path: "/calculator-v2",
    component: () => import("../views/CalculatorView.v2.vue"),
  },
  {
    name: "notfound",
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
