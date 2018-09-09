import Vue from 'vue';
import Button from './button';
import studyVue from './studyVue';
import Icon from './icon';
import buttonGroup from './button-group';
import Input from './input';


Vue.component('g-button', Button);
Vue.component('traning-wrapper', studyVue);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', buttonGroup);
Vue.component('g-input', Input);

new Vue({
    el: '#app',
    data: {
        titleText: '页面加载于' + new Date().toLocaleString(),
        loadingOne: false,
        loadingTwo: false,
        loadingThree: true
    }
});

//  引入chai.js

// import chai from 'chai';
// import spies from 'chai-spies';
// const expect = chai.expect;
// chai.use(spies);
// //  单元测试
// {
//     // console.log(Button);
//     const Constructor = Vue.extend(Button);
//     // console.log(Constructor);
//     // console.log(Constructor._init);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     });
//     // console.log(button._init);
//
//     //  不一定要mount到页面内
//     // button.$mount('#test');
//     vm.$mount('#test');
//     // button._init();
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#icon-setting');
//     vm.$el.remove();
//     vm.$destroy();
// }
// //  测试loading
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//             loading: true
//         }
//     });
//     console.log(vm);
//     vm.$mount();
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#icon-loading');
//     vm.$el.remove();
//     vm.$destroy();
// }
// //  测试icon左右位置
// {
//     //  必须将元素渲染到页面否则css不能渲染到元素上
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//             iconPosition: 'left'    //  right
//         }
//     });
//     console.log(vm);
//     vm.$mount(div);
//     let svgElement = vm.$el.querySelector('svg');
//     let order = window.getComputedStyle(svgElement).order;
//     expect(order).to.eq('1');   // '2'
//     vm.$el.remove();
//     vm.$destroy();
// }
//
// //  添加点击事件测试
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//         }
//     });
//     vm.$mount();
//     const spy = chai.spy(function () {
//         //  nothing
//     });
//     vm.$on('click', spy);
//     const button = vm.$el;
//     button.click();
//     expect(spy).to.have.been.called();
// }