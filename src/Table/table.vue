<template>
    <div class="table-wrapper">
        <table class="table" v-bind:class="{compact: compact,bordered: bordered, noStriped: !striped}">
            <thead>
                <tr>
                    <th><input type="checkbox" v-on:change="onChangeAllItems" ref="selectAll"></th>
                    <th v-if="numberVisible">#</th>
                    <th v-for="column in columns">
                        {{ column.text }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item, index in dataSource">
                    <th><input type="checkbox" v-on:change="onChangeItem(item, index, $event)" v-bind:checked="inSelectedItems(item)"></th>
                    <td v-if="numberVisible">{{ index + 1 }}</td>
                    <template v-for="column in columns">
                        <td>{{ item[column.field] }}</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "g-table",
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
            }
        },
        // computed: {
        //
        // },
        watch: {
            selectedItems () {
                if (this.selectedItems.length === this.dataSource.length) {
                    this.$refs.selectAll.checked = true;
                    this.$refs.selectAll.indeterminate = false;
                } else if (this.selectedItems.length === 0) {
                    this.$refs.selectAll.indeterminate = false;
                } else {
                    this.$refs.selectAll.indeterminate = true;
                }
            }
        },
        methods: {
            inSelectedItems(item) {
                return this.selectedItems.filter((_item, index) => {
                    return item.id === _item.id;
                }).length > 0;
            },
            onChangeItem (item, index, e) {
                // console.log(e.target.checked);
                // this.$emit('changeItem', {selected: e.target.checked, index, item});
                const isChecked = e.target.checked;
                const copy = JSON.parse(JSON.stringify(this.selectedItems));
                if (isChecked) {
                    copy.push(item)
                } else {
                    const _index = this.selectedItems.indexOf(item);
                    copy.splice(_index, 1);
                }
                this.$emit('update:selectedItems', copy);
            },
            onChangeAllItems (e) {
                const isChecked = e.target.checked;
                this.$emit('update:selectedItems', isChecked ? this.dataSource : [])
            }
        }
    }
</script>

<style scoped lang="scss">
    .table {
        border-collapse: collapse;
        border-spacing: 0;
        /*border: 1px solid #ddd;*/
        width: 100%;

        &.compact {
            td,th {
                padding: 5px;
            }
        }
        &.bordered {
            border: 1px solid #ddd;
            td,th {
                border: 1px solid #ddd;
            }
        }
        td,th {
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