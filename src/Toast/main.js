import main from './toast';
import Vue from 'vue';

function Toast(options) {
  let ToastConstructor = Vue.extend(main);
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let toastInstance = new ToastConstructor({
    data: options
  });
  toastInstance.$slots.default = [options.message];
  toastInstance.$mount();
  document.body.appendChild(toastInstance.$el);
  return toastInstance;
}

let toastInstance = null;

function ToastIns(toastOptions) {
  toastInstance = Toast(
    toastOptions
  )
};
export default ToastIns;
