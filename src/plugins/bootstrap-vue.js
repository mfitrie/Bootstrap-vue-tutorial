import Vue from "vue";

// import BootstrapVue from "bootstrap-vue";

//-------- Important to add when use bootstrap-vue --------//
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//-------- Important to add when use bootstrap-vue --------//

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
