<template>
    <div class="tabs-header">
        <slot>

        </slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'g-tabs-header',
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                // console.log(item);
                // console.log(vm.$el);
                let { width, height, top, left } = vm.$el.getBoundingClientRect();
                left = vm.$el.offsetLeft;
                console.log(width, height, top, left);
                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.left = `${left}px`;
            })
        }
    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $blue: blue;
    .tabs-header {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        position: relative;
        > .line {
            position: absolute;
            bottom: 0;
            /*width: 100px;*/
            border-bottom: 1px solid $blue;
            transition: all 350ms;
        }
        > .actions-wrapper {
            margin-left: auto;
        }
    }

</style>