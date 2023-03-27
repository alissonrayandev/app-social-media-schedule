import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/agendamento",
    name: "scheduling",
    component: () =>
      import(
        /* webpackChunkName: "scheduling" */ "../views/SchedulingView.vue"
      ),
  },
  {
    path: "/agenda",
    name: "schedule",
    component: () =>
      import(
        /* webpackChunkName: "schedule" */ "../views/ScheduleListView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
