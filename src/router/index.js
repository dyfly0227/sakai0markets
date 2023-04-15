import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayoutView from "../components/LayoutView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/leaderboard",
      name: "leaderboard",
      component: () => import("../views/Leaderboard.vue"),
    },
    {
      path: "/leaderboard",
      name: "leaderboard",
      component: () => import("../views/Leaderboard.vue"),
    },
    {
      path: "/futuresold",
      name: "futuresOld",
      component: () => import("../views/Futures.vue"),
    },
    {
      path: "/futures",
      name: "futures",
      component: () => import("../views/FuturesNew.vue"),
    },
    {
      path: "/history",
      name: "history",
      component: () => import("../views/History.vue"),
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
        // {
        //   path: "history",
        //   name: "history",
        //   component: () => import("../views/dashboard/HistoryView.vue"),
        // },
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
