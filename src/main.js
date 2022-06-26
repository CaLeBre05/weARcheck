import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase/compat/app';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCK5qFVXFdf3FuM9wyz5w2EAlAiJuSjf0Y",
  authDomain: "wear-check.firebaseapp.com",
  projectId: "wear-check",
  storageBucket: "wear-check.appspot.com",
  messagingSenderId: "146127385848",
  appId: "1:146127385848:web:1105b64a47919a2894f70d"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
