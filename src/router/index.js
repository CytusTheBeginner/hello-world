import { createWebHistory, createRouter } from "vue-router";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        title: "WELCOME",
      },
      component: () => import("../pages/Home.vue"),
    },

    {
      path: "/counter",
      name: "Counter",
      meta: {
        title: "Counter",
      },
      component: () => import("../pages/Counter.vue"),
    },
    
  ],
});

export default route;