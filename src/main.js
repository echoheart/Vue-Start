import Vue from "vue";
import DemoShow from "./demo-show.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(DemoShow)
}).$mount("#app");
