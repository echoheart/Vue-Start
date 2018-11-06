import Toast from './toast';
export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, props) {
            console.log('I am toast');
            let constructor = Vue.extend(Toast);
            // console.log("######");
            // console.log(props);
            let toast = new constructor({
                propsData: props
            });
            toast.$slots.default = [message];
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}