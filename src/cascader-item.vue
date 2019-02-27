<template>
    <div class="source-item">
        {{ sourceItem.name }}
        <CascaderItem
                v-if="sourceItem.children"
                v-for="item in sourceItem.children"
                v-bind:sourceItem="item"
        >

        </CascaderItem>
    </div>
</template>

<script>
    const component = {
        name: 'CascaderItem',
        components: {
            CascaderItem: 'CascaderItem',
        },
        props: {
            sourceItem: {
                type: Object
            }
        }
    };
    export default component

</script>

<style lang="scss" scoped>
    .source-item {
        border: 1px solid red;
        margin: 10px;
    }
</style>