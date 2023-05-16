import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
  { path: "/", component: () => import("../views/Home/index.vue") },
  {
    path: "/page", component: () => import("../views/Pages/index.vue"),
    children: [
      { path: "/story", component: () => import("../views/Pages/story.vue") },
      { path: "/memory", component: () => import("../views/Pages/memory.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes, router };
