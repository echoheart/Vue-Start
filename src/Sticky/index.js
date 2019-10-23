import Sticky from './sticky';
import Vue from 'vue';
Sticky.install = function(Vue) {
  Vue.component(Sticky.name, Sticky);
};
export default Sticky;
