<template>
    <div class="source-item">
        <div class="left"

             >
            <div class="label"
                 v-for="item in items"
                 v-on:click="leftSelected = item">
                {{ item.name }}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <CascaderItems v-bind:items="rightItems"></CascaderItems>
        </div>
    </div>
</template>

<script>
    const component = {
        name: 'CascaderItems',
        components: {
            CascaderItems: 'CascaderItems',
        },
        data() {
            return {
                leftSelected: null,
            }
        },
        computed: {
            rightItems() {
                if (this.leftSelected && this.leftSelected.children) {
                    return this.leftSelected.children
                } else {
                    return null;
                }
            }
        },
        props: {
            items: {
                type: Array
            }
        }
    };
    export default component

</script>

<style lang="scss" scoped>
    .source-item {
        border: 1px solid red;
        /*margin: 10px;*/
        margin-top: -1px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .left {
            /*border: 1px solid red;*/
            /*display: flex;*/
            /*align-items: flex-start;*/
            /*display: flex;*/
            /*justify-content: flex-end;*/
            /*align-items: flex-end;*/
        }
    }
</style>