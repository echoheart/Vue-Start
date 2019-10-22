
let callbacks = [];

document.addEventListener('click', (e) => {
    callbacks.forEach((item) => {
        if (item.el === e.target || item.el.contains(e.target)) {
            return;
        } else {
            item.callback();
        }
    })
});

export default {
    bind: function (el, binding) {
        callbacks.push({
            el: el,
            callback: binding.value,
        });
        // document.addEventListener('click', (e) => {
        //     if (e.target === el || el.contains(e.target)) {
        //         return;
        //     } else {
        //         binding.value();
        //     }
        // });
    }
}