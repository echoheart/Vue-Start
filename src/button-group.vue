<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted () {
        // console.log(this.$el.children);
        for (let node of this.$el.children) {
            let nodeName = node.nodeName.toLowerCase();
            if (nodeName !== 'button') {
                console.warn(`在g-button-group中请使用g-button,但是你使用的是${nodeName} 这可能会引起一些问题`)
            }
        }
    }
}
</script>

<style lang="scss">
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-top-left-radius: var(--button-radius);
                border-bottom-left-radius: var(--button-radius);
            }
            &:last-child {
                border-top-right-radius: var(--button-radius);
                border-bottom-right-radius: var(--button-radius);
            }
            &:hover {
                z-index: 1;
            }
        }
    }
</style>