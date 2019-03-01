<template>
    <div class="cascader">
        <div class="trigger" v-on:click="popoverVisible = !popoverVisible">
            {{ result || '&nbsp'}}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <CascaderItems
                    v-bind:items="source"
                    class="popover"
                    v-bind:height="popoverHeight"
                    v-bind:selected="selected"
                    v-on:update:selected="onUpdate"
            >
            </CascaderItems>
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
        methods: {
            onUpdate(copySelected) {
                this.$emit('update:selected', copySelected);
                const { id } = copySelected[copySelected.length - 1];
                let updateSource = (result) => {
                    const selectedItem = this.source.filter((item) => {
                        return item.id === id;
                    })[0];
                    this.$set(selectedItem, 'children', result);
                }
                this.loadData(id, updateSource);
            }
        },
        computed: {
            result() {
                return this.selected.map((item) => {
                    return item.name;
                }).join('/');
            }
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
            },
            selected: {
                type: Array,
                default: () => []
            },
            loadData: {
                type: Function,
            }

        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .cascader {
        position: relative;
        .trigger {
            border: 1px solid $grey;
            height: $input-height;
            /*width: 150px;*/
            display: inline-flex;
            align-items: center;
            padding: 0 1em;
            min-width: 10em;
            /*<!--border-color: $grey;-->*/
            border-radius: $border-radius;
        }
        .popover-wrapper {
            @extend .box-shadow;
            margin-top: 5px;
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