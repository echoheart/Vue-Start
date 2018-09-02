import Vue from 'vue';
import Button from './button';
import studyVue from './studyVue';
import Icon from './icon';
import buttonGroup from './button-group';


Vue.component('g-button', Button);
Vue.component('traning-wrapper', studyVue);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', buttonGroup);

new Vue({
    el: '#app',
    data: {
        titleText: '页面加载于' + new Date().toLocaleString(),
        loadingOne: false,
        loadingTwo: false,
        loadingThree: true
    }
});