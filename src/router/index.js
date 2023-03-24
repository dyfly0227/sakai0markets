import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayoutView from "../components/LayoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      component: LayoutView,
      children: [
        {
          path: "markets",
          name: "markets",
          component: () => import("../views/dashboard/MarketsView.vue"),
        },
        {
          path: "history",
          name: "history",
          component: () => import("../views/dashboard/HistoryView.vue"),
        },
        {
          path: "overview",
          name: "overview",
          component: () => import("../views/dashboard/Overview.vue"),
        },
        {
          path: "staking",
          name: "staking",
          component: () => import("../views/dashboard/Staking.vue"),
        },
      ],
    },
  ],
});

export default router;
