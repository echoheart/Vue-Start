<template>
    <div class="table-wrapper">
        <table class="table" v-bind:class="{compact: compact,bordered: bordered, noStriped: !striped}">
            <thead>
                <tr>
                    <th><input type="checkbox" name=""></th>
                    <th v-if="numberVisible">#</th>
                    <th v-for="column in columns">
                        {{ column.text }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item, index in dataSource">
                    <th><input type="checkbox" v-on:change="onChangeItem(item, index, $event)"></th>
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
                required: true
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
            }
        },
        methods: {
            onChangeItem (item, index, e) {
                // console.log(e.target.checked);
                this.$emit('changeItem', {selected: e.target.checked, index, item});
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