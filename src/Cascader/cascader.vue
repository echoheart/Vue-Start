<template>
    <div class="cascader" ref="cascader" v-click-out-side="close">
        <div class="trigger" v-on:click="toggle">
            {{ result || '&nbsp'}}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <CascaderItems
                    v-bind:items="source"
                    class="popover"
                    v-bind:height="popoverHeight"
                    v-bind:selected="selected"
                    v-on:update:selected="onUpdate"
                    v-bind:load-data="loadData"
                    v-bind:shouldClose="close"
                    v-bind:loadingItem="loadingItem"
            >
            </CascaderItems>
        </div>
    </div>
</template>

<script>
    import CascaderItems from '../CascaderItem/cascader-items';
    import clickOutSide from '../click-outside';
    export default {
        name: 'Cascader',
        components: {
            CascaderItems
        },
        directives: {clickOutSide},
        methods: {
            // onHandleDocumentClick(e) {
            //     const { cascader } = this.$refs;
            //     if (e.target === cascader || cascader.contains(e.target)) {
            //         return;
            //     }
            //     this.close();
            // },
            toggle() {
              if (this.popoverVisible) {
                  this.close();
              } else {
                  this.open();
              }
            },
            open() {
              this.popoverVisible = true;
              // document.addEventListener('click', this.onHandleDocumentClick);
            },
            close() {
              this.popoverVisible = false;
              // document.removeEventListener('click', this.onHandleDocumentClick)
            },
            onUpdate(copySelected) {
                //  查找
                let simplest = (children, id) => {
                    const found = children.filter((item) => {
                        return item.id === id;
                    });
                    return found[0];
                };

                let complex = (children, id) => {
                    let noChildren = [];
                    let hasChildren = [];
                    children.forEach((item) => {
                        if (item.children) {
                            hasChildren.push(item)
                        } else {
                            noChildren.push(item)
                        }
                    });
                    let found = simplest(noChildren, id);
                    if (found) {
                        return found;
                    } else {
                        found = simplest(hasChildren, id);
                        if (found) {
                            return found
                        } else {

                            for (let i = 0; i < hasChildren.length; i++) {
                                found = complex(hasChildren[i].children, id);
                                if(found) {
                                    return found
                                }
                            }
                        }
                        return undefined;
                    }
                };

                this.$emit('update:selected', copySelected);
                const lastSelectedItem = copySelected[copySelected.length - 1];
                const {id} = lastSelectedItem;
                console.log(this.source);
                console.log(id);
                let updateSource = (result) => {
                    const copySource = JSON.parse(JSON.stringify(this.source));
                    const selectedItem = complex(copySource, id);
                    selectedItem.children = result;
                    // console.log(selectedItem);
                    // this.$set(selectedItem, 'children', result);
                    this.$emit('update:source', copySource);
                    this.loadingItem = {};

                };
                if (!lastSelectedItem.isLeaf && this.loadData) {
                    this.loadData(id, updateSource);
                    this.loadingItem = lastSelectedItem;
                }
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
                loadingItem: {}
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
    @import "../var";

    .cascader {
        position: relative;

        .trigger {
            border: 1px solid $border-color;
            height: $input-height;
            display: inline-flex;
            align-items: center;
            padding: 0 1em;
            min-width: 10em;
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
            height: 200px;
        }
    }
</style>
