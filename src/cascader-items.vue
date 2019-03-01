<template>
    <div class="source-item" v-bind:style="{height: height}">
        <!--selected: {{ selected[level] && selected[level].name }}-->
        <!--level: {{ level }}-->
        <!--{{ rightItems }}-->
        <div class="left">
            <div class="label"
                 v-for="item in items"
                 v-on:click="onClickHandle(item)">
                {{ item.name }}

                <Icon name="right" v-if="item.children"></Icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <CascaderItems
                    v-bind:items="rightItems"
                    v-bind:height="height"
                    v-bind:selected="selected"
                    v-bind:level="level + 1"
                    v-on:update:selected="onUpdate"
            >
            </CascaderItems>
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
        methods: {
          onClickHandle(item) {
              const copySelected = this.selected.slice();
              //    更新时删除当前层级的后的所有元素
              copySelected.splice(this.level);

              copySelected[this.level] = item;

              this.$emit('update:selected', copySelected);
          },
            onUpdate(copySelected) {
              this.$emit('update:selected', copySelected)
            }
        },
        data() {
            return {
                leftSelected: null,
            }
        },
        computed: {
            rightItems() {
                const currentSelected = this.selected[this.level];
                if (currentSelected && currentSelected.children) {
                    return this.selected[this.level].children
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
            },
            selected: {
                type: Array,
                default: () => []
            },
            level: {
                type: Number,
                default: 0
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