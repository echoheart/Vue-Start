import Vue from "vue";
import Demo from "./Test.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(Demo)
}).$mount("#app");