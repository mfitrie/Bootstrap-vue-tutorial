import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// // Important to add when use bootstrap-vue
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// // Important to add when use bootstrap-vue

Vue.config.productionTip = false;

// // Important to add when use bootstrap-vue
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);
// // Important to add when use bootstrap-vue

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
