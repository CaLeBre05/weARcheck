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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ScanView.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SettingsView.vue"),
  },
  {
    path: "/WSK",
    name: "WSKstartScreen",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WSK/WSKstartScreen.vue"),
  },
  {
    path: "/siegel",
    name: "siegelstartScreen",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Siegel/siegelstartScreen.vue"
      ),
  },
  {
    path: "/WSK/Rohstofferzeugung",
    name: "Rohstofferzeugung",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WSK/Rohstofferzeugung.vue"),
  },
  {
    path: "/WSK/Gebrauch",
    name: "Gebrauch",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WSK/Gebrauch.vue"),
  },
  {
    path: "/WSK/Herstellung",
    name: "Herstellung",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WSK/Herstellung.vue"),
  },
  {
    path: "/WSK/Distribution",
    name: "Distribution",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WSK/Distribution.vue"),
  },
  {
    path: "/WSK/Handel",
    name: "Handel",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WSK/Handel.vue"),
  },
  {
    path: "/WSK/Entsorgung",
    name: "Entsorgung",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WSK/Entsorgung.vue"),
  },
  {
    path: "/SlidingWindows/Frauen",
    name: "Frauen",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/SlidingWindows/Frauen.vue"
      ),
  },
  {
    path: "/SlidingWindows/GiftigeInhaltsstoffe",
    name: "Giftige Inhaltsstoffe",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/SlidingWindows/GiftigeInhaltsstoffe.vue"
      ),
  },
  {
    path: "/SlidingWindows/FairFashion",
    name: "FairFashion",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/SlidingWindows/FairFashion.vue"
      ),
  },
  {
    path: "/Siegel/FairTrade",
    name: "FairTrade",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Siegel/FairTrade.vue"
      ),
  },
  {
    path: "/Siegel/GOTS",
    name: "GOTS",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Siegel/GOTS.vue"
      ),
  },
  {
    path: "/Siegel/FWF",
    name: "FWF",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Siegel/FWF.vue"
      ),
  },
  {
    path: "/Siegel/GrünerKnopf",
    name: "GrünerKnopf",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Siegel/GrünerKnopf.vue"
      ),
  },
  {
    path: "/Siegel/Mischprodukte",
    name: "Mischprodukte",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Siegel/Mischprodukte.vue"
      ),
  },
  {
    path: "/Siegel/Cotton",
    name: "GrünerCotton",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Siegel/Cotton.vue"
      ),
  },
  {
    path: "/Siegel/Rohstoffsiegel",
    name: "Rohstoffsiegel",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Siegel/Rohstoffsiegel.vue"
      ),
  },
  {
    path: "/Siegel/Textil",
    name: "Textil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Siegel/Textil.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
