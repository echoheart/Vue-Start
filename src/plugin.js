import Toast from './toast';
export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message) {
            console.log('I am toast');
            let constrcutor = Vue.extend(Toast);
            let toast = new constrcutor();
            toast.$slots.default = [message];
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}