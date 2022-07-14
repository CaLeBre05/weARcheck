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
    path: "/wsk",
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
    path: "/WSK/Rohstofferzeugung",
    name: "Rohstofferzeugung",

    component: () =>
      import("../views/WSK/Rohstofferzeugung.vue"),
  },
  {
    path: "/WSK/Gebrauch",
    name: "Gebrauch",

    component: () =>
      import("../views/WSK/Gebrauch.vue"),
  },
  {
    path: "/WSK/Herstellung",
    name: "Herstellung",

    component: () =>
      import("../views/WSK/Herstellung.vue"),
  },
  {
    path: "/WSK/Distribution",
    name: "Distribution",

    component: () =>
      import("../views/WSK/Distribution.vue"),
  },
  {
    path: "/WSK/Handel",
    name: "Handel",

    component: () =>
      import("../views/WSK/Handel.vue"),
  },
  {
    path: "/WSK/Entsorgung",
    name: "Entsorgung",

    component: () =>
      import("../views/WSK/Entsorgung.vue"),
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
  {
    path: "/Siegel/FairTrade",
    name: "FairTrade",
    component: () =>
      import(
        "../views/Siegel/FairTrade.vue"
      ),
  },
  {
    path: "/Siegel/GOTS",
    name: "GOTS",
    component: () =>
      import(
        "../views/Siegel/GOTS.vue"
      ),
  },
  {
    path: "/Siegel/FWF",
    name: "FWF",
    component: () =>
      import(
        "../views/Siegel/FWF.vue"
      ),
  },
  {
    path: "/Siegel/GrünerKnopf",
    name: "GrünerKnopf",
    component: () =>
      import(
        "../views/Siegel/GrünerKnopf.vue"
      ),
  },
  {
    path: "/Siegel/Mischprodukte",
    name: "Mischprodukte",
    component: () =>
      import(
        "../views/Siegel/Mischprodukte.vue"
      ),
  },
  {
    path: "/Siegel/Cotton",
    name: "GrünerCotton",
    component: () =>
      import(
        "../views/Siegel/Cotton.vue"
      ),
  },
  {
    path: "/Siegel/Rohstoffsiegel",
    name: "Rohstoffsiegel",
    component: () =>
      import(
        "../views/Siegel/Rohstoffsiegel.vue"
      ),
  },
  {
    path: "/Siegel/Textil",
    name: "Textil",
    component: () =>
      import(
        "../views/Siegel/Textil.vue"
      ),
  },
  {
    path: "/Settings/DeineScans",
    name: "DeineScans",
    component: () =>
      import(
        "../views/Settings/DeineScans.vue"
      ),
  },
  {
    path: "/Settings/Tutorial",
    name: "Tutorial",
    component: () =>
      import("../views/Settings/Tutorial.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
