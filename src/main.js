import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { StreamBarcodeReader } from "vue-barcode-reader";

Vue.config.productionTip = false;

new Vue({
  StreamBarcodeReader,
  router,
  render: (h) => h(App),
}).$mount("#app");
