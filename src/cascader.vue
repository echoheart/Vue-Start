<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source">
                <CascaderItem v-bind:sourceItem="item"></CascaderItem>
            </div>

        </div>
    </div>
</template>

<script>
    import CascaderItem from './cascaderItem';

    export default {
        name: 'g-cascader',
        components: {
            CascaderItem
        },
        props: {
            source: {
                type: Array
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .cascader {

    }
</style>