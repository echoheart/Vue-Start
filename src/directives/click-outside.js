
let callbacks = [];

document.addEventListener('click', (e) => {
    callbacks.forEach((item) => {
        if (item.el === e.target || item.el.contains(e.target)) {
            return null;
        } else {
            item.callback();
        }
    })
});
/**
 * binding可以拿到绑定的指令绑定的函数(binding.value)
 * el就是指令绑定的节点
 * */

export default {
    bind: function (el, binding) {
        callbacks.push({
            el: el,
            callback: binding.value,
        });
    }
}