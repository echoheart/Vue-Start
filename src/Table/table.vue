<template>

    <div class="table-wrapper" ref="wrapper">
        <div class="table-inner" v-bind:style="{height: height + 'px'}">
            <table ref="table" class="table" v-bind:class="{compact: compact,bordered: bordered, noStriped: !striped}">
                <thead>
                    <tr>
                        <td v-bind:style="{width: '50px'}"></td>
                        <th v-bind:style="{width: '50px'}"><input type="checkbox" v-on:change="onChangeAllItems" ref="selectAll"
                                   v-bind:checked="allItemsSelected"></th>
                        <th v-if="numberVisible">#</th>
                        <!--{{columns}}-->
                        <th v-for="column in columns" v-bind:style="{width: `${column.width}px`}">
                            <div class="column-item" v-if="column.field in orderBy">
                                {{ column.text }}
                                <span class="table-sorter" v-on:click="changeOrderBy(column.field)">
                                    <Icon name="asc" class="asc"
                                          v-bind:class="{active: orderBy[column.field] === 'asc'}"></Icon>
                                    <Icon name="desc" class="desc"
                                          v-bind:class="{active: orderBy[column.field] === 'desc'}"></Icon>
                                </span>
                            </div>
                        </th>
                        <th ref="actionsHeader" v-if="$scopedSlots.default"></th>
                    </tr>
                </thead>

                <tbody>
                    <template v-for="(item, index) in dataSource">
                        <tr v-bind:key="item.id" class="tbody-item">
                            <td v-bind:style="{width: '50px'}" >
                                <span class="icon-wrapper">
                                    <Icon v-bind:class="{active: inExpendeds(item.id)}" v-on:click="expendAction(item.id)" v-if="item[expendField]" name="right"></Icon>
                                </span>
                            </td>
                            <td v-bind:style="{width: '50px'}"><input type="checkbox" v-on:change="onChangeItem(item, index, $event)"
                                                                      v-bind:checked="inSelectedItems(item)"></td>
                            <td v-if="numberVisible">{{ index + 1 }}</td>
                            <template v-for="column in columns">
                                <td v-bind:style="{width: `${column.width}px`}">{{ item[column.field] }}</td>
                            </template>
                            <td v-if="$scopedSlots.default">
                                <div ref="actions" v-bind:style="{display: 'inline-block'}">
                                    <slot v-bind:item="item" li="li"></slot>
                                </div>
                            </td>
                        </tr>

                        <tr v-bind:key="`${item.id}expend-key`" v-if="inExpendeds(item.id)">
                            <td :style="{ borderRightColor: 'transparent'}"></td>
                            <td v-bind:colspan="columns.length + 2">
                                {{ item[expendField] }}
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div v-if="loading" class="table-loading">
            <Icon name="loading"/>
        </div>
    </div>

</template>

<script>
    import Icon from './../Icon/icon';

    export default {
        name: "Table",
        components: {
            Icon
        },
        data() {
            return {
                expendedIds: []
            }
        },
        props: {
            dataSource: {
                type: Array,
                required: true,
                validator(arr) {
                    return !(arr.filter((item) => {
                        return item.id === undefined;
                    }).length);
                }
            },
            columns: {
                type: Array,
                required: true
            },
            compact: {
                type: Boolean,
                default: false
            },
            numberVisible: {
                type: Boolean,
                default: false
            },
            bordered: {
                type: Boolean,
                default: false
            },
            striped: {
                type: Boolean,
                default: true
            },
            selectedItems: {
                type: Array,
                default: () => []
            },
            orderBy: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            loading: {
                type: Boolean,
                default: false
            },
            height: {
                type: Number,
            },
            expendField: {
                type: String
            }
        },
        mounted() {
            // console.log(this.height);
            if (this.height) {
                const table = this.table = this.$refs.table;
                const copyTable = this.copyTable = table.cloneNode(false);
                const tableHeader = table.children[0];
                const {height} = tableHeader.getBoundingClientRect();
                table.style.marginTop = height + 'px';
                copyTable.appendChild(tableHeader);

                // this.updateHeaderWidth();
                // document.addEventListener('resize', this.updateHeaderWidth);
                copyTable.classList.add('copy-table');
                this.$refs.wrapper.appendChild(copyTable);
            }

            if (this.$scopedSlots.default) {
                const div = this.$refs.actions[0];
                const { width } = div.getBoundingClientRect();
                const parent = div.parentNode;
                const style = getComputedStyle(parent);
                const paddingLeft = style.getPropertyValue('padding-left');
                const paddingRight = style.getPropertyValue('padding-right');
                const borderLeft = style.getPropertyValue('border-left-width');
                const borderRight = style.getPropertyValue('border-right-width');
                const computedWidth = width + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderLeft) + parseInt(borderRight) + 'px';
                this.$refs.actionsHeader.style.width = computedWidth;
                this.$refs.actions.map((el) => {
                    el.parentNode.style.width = computedWidth
                });
                console.log(paddingLeft)
            }
        },
        beforeDestroy() {
            // document.removeEventListener('resize', this.updateHeaderWidth);
            this.copyTable && this.copyTable.remove();
        },
        computed: {
            allItemsSelected() {
                const a = this.dataSource.map((item) => {
                    return item.id
                }).sort();
                const b = this.selectedItems.map((item) => {
                    return item.id
                }).sort();
                if (a.length !== b.length) {
                    return false
                }
                let equal = true;
                for (let i = 0; i < a.length; i++) {
                    // console.log(a[i], b[i]);
                    if (a[i] !== b[i]) {
                        equal = false;
                    }
                }
                // console.log(equal);
                return equal;
            }
        },
        watch: {
            selectedItems() {
                if (this.selectedItems.length === this.dataSource.length) {
                    // this.$refs.selectAll.checked = true;
                    this.$refs.selectAll.indeterminate = false;
                } else if (this.selectedItems.length === 0) {
                    this.$refs.selectAll.indeterminate = false;
                    this.$refs.selectAll.checked = false;
                } else {
                    this.$refs.selectAll.indeterminate = true;
                }
            }
        },
        methods: {
            // updateHeaderWidth() {
            //     const table = this.table;
            //     const copyTable = this.copyTable;
            //     Array.from(table.children).map((node) => {
            //         if(node.tagName.toLowerCase() === 'thead') {
            //             node.remove()
            //         } else {
            //             this.tableHeader = node;
            //         }
            //     });
            //     Array.from(copyTable.children).map((node) => {
            //         if(node.tagName.toLowerCase() !== 'thead') {
            //             node.remove()
            //         } else {
            //             this.copyHeader = node;
            //         }
            //     });
            //
            //     Array.from(this.tableHeader.children[0].children).map((th, index) => {
            //         const { height, width } = th.getBoundingClientRect();
            //         this.copyHeader.children[0].children[index].width = width;
            //         this.copyHeader.children[0].children[index].height = height;
            //     });
            // },
            inExpendeds(id) {
                return this.expendedIds.indexOf(id) > -1
            },
            expendAction (id) {
                const index = this.expendedIds.indexOf(id);
                if (index > -1) {
                    this.expendedIds.splice(index, 1)
                } else {
                    this.expendedIds.push(id);
                }
            },
            changeOrderBy(key) {
                console.log('hello');
                const copy = JSON.parse(JSON.stringify(this.orderBy));
                if (this.orderBy[key] === 'asc') {
                    copy[key] = 'desc';
                } else if (this.orderBy[key] === 'desc') {
                    copy[key] = true;
                } else {
                    copy[key] = 'asc';
                }
                this.$emit('update:orderBy', {copy, key});
            },
            inSelectedItems(item) {
                return this.selectedItems.filter((_item, index) => {
                    return item.id === _item.id;
                }).length > 0;
            },
            onChangeItem(item, index, e) {
                // console.log(e.target.checked);
                // this.$emit('changeItem', {selected: e.target.checked, index, item});
                const isChecked = e.target.checked;
                let copy = JSON.parse(JSON.stringify(this.selectedItems));
                if (isChecked) {
                    copy.push(item)
                } else {
                    // const _index = this.selectedItems.indexOf(item);
                    // copy.splice(_index, 1);
                    copy = copy.filter((_item, index) => {
                        return !(item.id === _item.id);
                    })
                }
                this.$emit('update:selectedItems', copy);
            },
            onChangeAllItems(e) {
                const isChecked = e.target.checked;
                this.$emit('update:selectedItems', isChecked ? this.dataSource : [])
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../var";

    .table-wrapper {
        position: relative;

        .table-inner {
            overflow: auto;
        }
        .table-inner::-webkit-scrollbar{
            width:0;
        }

        .copy-table {
            position: absolute;
            top: 0;
            right: 0;
            /*background-color: #fff;*/
        }
    }

    .table {
        overflow: auto;
        .icon-wrapper {
            height: 100%;
            width: 100%;
            display: inline-block;
            .g-icon {
                transition: all .2s linear;
                &.active {
                    transform: rotate(90deg);
                }
            }
        }
        .tbody-item {
            &:hover {
                background: #ccc;
            }
        }
    }

    .table-loading {
        background-color: rgba(255, 255, 255, .75);

        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        svg {
            animation: spin 1s infinite linear;
            width: 50px;
            height: 50px;
        }
    }

    .table {
        border-collapse: collapse;
        border-spacing: 0;
        /*border: 1px solid #ddd;*/
        width: 100%;
        thead {
            background: #fff;
        }

        &.compact {
            td, th {
                padding: 5px;
            }
        }

        &.bordered {
            border: 1px solid #ddd;

            td, th {
                border: 1px solid #ddd;
            }
        }

        .column-item {
            display: inline-flex;
            align-items: center;

            .table-sorter {
                display: inline-flex;
                flex-direction: column;
                margin-left: 5px;

                .asc, .desc {
                    &.active {
                        fill: #000;
                    }

                    fill: #aaa;
                    height: 1em;
                    width: 1em;
                    cursor: pointer;
                }
            }
        }

        td, th {
            border-bottom: 1px solid #ddd;
            text-align: left;
            padding: 10px 10px;
        }

        tbody {
            > tr {
                &:nth-child(odd) {
                    background: #fff;
                }

                &:nth-child(even) {
                    background: lighten(#ddd, 10%);
                }
            }
        }

        &.noStriped {
            tbody {
                > tr {
                    background: #fff;
                }
            }
        }
    }
</style>
