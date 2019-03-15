<template>
    <div class="table-wrapper">
        <table class="table" v-bind:class="{compact: compact,bordered: bordered, noStriped: !striped}">
            <thead>
                <tr>
                    <th><input type="checkbox" v-on:change="onChangeAllItems" ref="selectAll" v-bind:checked="allItemsSelected"></th>
                    <th v-if="numberVisible">#</th>
                    <th v-for="column in columns">
                        <div class="column-item" v-if="column.field in orderBy">
                            {{ column.text }}
                            <span class="table-sorter" v-on:click="changeOrderBy(column.field)">
                                <Icon name="asc" class="asc" v-bind:class="{active: orderBy[column.field] === 'asc'}"></Icon>
                                <Icon name="desc" class="desc" v-bind:class="{active: orderBy[column.field] === 'desc'}"></Icon>
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in dataSource" v-bind:key="item.id">
                    <th><input type="checkbox" v-on:change="onChangeItem(item, index, $event)" v-bind:checked="inSelectedItems(item)"></th>
                    <td v-if="numberVisible">{{ index + 1 }}</td>
                    <template v-for="column in columns">
                        <td>{{ item[column.field] }}</td>
                    </template>
                </tr>
            </tbody>
        </table>
        <div v-if="loading" class="table-loading">
            <Icon name="loading"/>
        </div>
    </div>
</template>

<script>
    import Icon from './../Icon/icon';
    export default {
        name: "g-table",
        components: {
            Icon
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
                default: () => {return {}}
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            allItemsSelected() {
                const a = this.dataSource.map((item) =>{return item.id}).sort();
                const b = this.selectedItems.map((item) => {return item.id}).sort();
                if (a.length !== b.length) {
                    return false
                }
                let equal = true;
                for(let i = 0; i < a.length; i++) {
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
            selectedItems () {
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
            changeOrderBy (key) {
                console.log('hello');
                const copy = JSON.parse(JSON.stringify(this.orderBy));
                if(this.orderBy[key] === 'asc') {
                    copy[key] = 'desc';
                } else if (this.orderBy[key] === 'desc'){
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
            onChangeItem (item, index, e) {
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
            onChangeAllItems (e) {
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
    }
    .table-loading {
        background-color: rgba(255,255,255,.75);

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
        .column-item {
            display: inline-flex;
            align-items: center;
            .table-sorter {
                display: inline-flex;
                flex-direction: column;
                margin-left: 5px;
                .asc,.desc {
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