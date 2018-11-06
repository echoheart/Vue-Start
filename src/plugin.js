import Toast from './toast';
/*
* helper 函数
*
* */
function createToast ({Vue, message, propsData}) {
    // console.log('I am toast');
    let constructor = Vue.extend(Toast);
    // console.log("######");
    // console.log(props);
    let toast = new constructor({
        propsData: propsData
    });
    toast.$slots.default = [message];
    toast.$mount();
    document.body.appendChild(toast.$el);
    return toast;
}
let currentToast = null;
export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close();
            }
            currentToast = createToast({Vue, message, propsData: toastOptions})
        }
    }
}