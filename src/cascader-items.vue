<template>
    <div class="source-item" v-bind:style="{height: height}">
        <div class="left"

             >
            <div class="label"
                 v-for="item in items"
                 v-on:click="leftSelected = item">
                {{ item.name }}
                <!--<span v-if="item.children"> > </span>-->
                <Icon name="right" v-if="item.children"></Icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <CascaderItems
                    v-bind:items="rightItems"
                    v-bind:height="height"
            ></CascaderItems>
        </div>
    </div>
</template>

<script>
    import Icon from './icon';
    const component = {
        name: 'CascaderItems',
        components: {
            CascaderItems: 'CascaderItems',
            Icon: Icon,
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
            },
            height: {
                type: String
            }
        }
    };
    export default component

</script>

<style lang="scss" scoped>
    @import 'var';
    .source-item {

        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .left {
            padding-top: .3em;

            .label {

                padding: .3em 1em;
            }
        }
        .right {
            border-left: 1px solid $grey;
        }

    }
</style>