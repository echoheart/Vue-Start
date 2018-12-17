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
        created() {
            this.eventBus.$on('update:selected', (item, vm) => {
                console.log(item);
                console.log(vm.$el);
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
        .line {
            position: absolute;
            bottom: 0;
            width: 100px;
            border-bottom: 1px solid $blue;
        }
        > .actions-wrapper {
            margin-left: auto;
        }
    }

</style>