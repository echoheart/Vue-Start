<template>
    <div class="cascader">
        <div class="trigger" v-on:click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <CascaderItems
                    v-bind:items="source"
                    class="popover"
                    v-bind:height="popoverHeight"
            ></CascaderItems>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items';

    export default {
        name: 'g-cascader',
        components: {
            CascaderItems
        },
        computed: {

        },
        data() {
            return {
                popoverVisible: false,
                level1Selected: null,
                level2Selected: null
            }
        },
        props: {
            source: {
                type: Array
            },
            popoverClassName: {
                type: String,
            },
            popoverHeight: {
                type: String,
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .cascader {
        position: relative;
        .trigger {
            border: 1px solid black;
            height: 32px;
            width: 150px;
        }
        .popover-wrapper {
            @extend .box-shadow;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            display: flex;
            justify-content: flex-start;
            /*width: 10px;*/
            height: 200px;

            /*border: 1px solid red;*/
        }
    }
</style>