import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/scan",
    name: "scan",
    component: () =>
      import("../views/ScanView.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import("../views/SettingsView.vue"),
  },
  {
    path: "/WSK",
    name: "WSKstartScreen",
    component: () =>
      import("../views/WSK/WSKstartScreen.vue"),
  },
  {
    path: "/siegel",
    name: "siegelstartScreen",
    component: () =>
      import("../views/Siegel/siegelstartScreen.vue"),
  },
  {
    path: "/WSK/Rohmaterialien",
    name: "Rohmaterialien",
    component: () =>
      import("../views/WSK/Rohmaterialien.vue"),
  },
  {
    path: "/WSK/Anbieter",
    name: "Anbieter",
    component: () =>
      import("../views/WSK/Anbieter.vue"),
  },
  {
    path: "/WSK/Fabrik",
    name: "Fabrik",
    component: () =>
      import("../views/WSK/Fabrik.vue"),
  },
  {
    path: "/WSK/Verteilung",
    name: "Verteilung",
    component: () =>
      import("../views/WSK/Verteilung.vue"),
  },
  {
    path: "/WSK/Verkauf",
    name: "Verkauf",
    component: () =>
      import("../views/WSK/Verkauf.vue"),
  },
  {
    path: "/WSK/Kunde",
    name: "Kunde",
    component: () =>
      import("../views/WSK/Kunde.vue"),
  },
  {
    path: "/SlidingWindows/Frauen",
    name: "Frauen",
    component: () =>
      import(
        "../views/SlidingWindows/Frauen.vue"
      ),
  },
  {
    path: "/SlidingWindows/GiftigeInhaltsstoffe",
    name: "Giftige Inhaltsstoffe",
    component: () =>
      import(
        "../views/SlidingWindows/GiftigeInhaltsstoffe.vue"
      ),
  },
  {
    path: "/SlidingWindows/FairFashion",
    name: "FairFashion",
    component: () =>
      import(
        "../views/SlidingWindows/FairFashion.vue"
      ),
  },
  {
    path: "/ARView",
    name: "ARView",
    component: () =>
      import(
        "../views/ARView.vue"
      ),
    meta: {
      hideNavbar: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
