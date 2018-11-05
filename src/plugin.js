import Toast from './toast';
export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message) {
            console.log('I am toast');
            let constructor = Vue.extend(Toast);
            let toast = new constructor({
                propsData: {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('知道了');
                        }
                    }
                }
            });
            toast.$slots.default = [message];
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}