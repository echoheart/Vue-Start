


export default {
    bind: function (el, binding) {
        document.addEventListener('click', (e) => {
            if (e.target === el || el.contains(e.target)) {
                return;
            } else {
                binding.value();
            }
        });
    }
}