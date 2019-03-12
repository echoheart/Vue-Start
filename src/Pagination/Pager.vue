<template>
    <div class="pager">
        <!--<span v-for="(i,index) in pages" v-bind:key="index" class="pager-item" v-bind:class="{active: i === currentPage, separator: i === '...'}">-->
            <!--{{ i }}-->
        <!--</span>-->
        <span class="left"
              v-on:click="onClick(currentPage - 1)"
              v-bind:class="{disabled: currentPage === 1}">
            <Icon name="left"></Icon>
        </span>
        <template v-for="(page) in pages">
            <template v-if="page === currentPage">
                <span class="pager-item active">
                    {{ page }}
                </span>
            </template>
            <template v-else-if="page === '...'">
                <Icon class="pager-item separator" name="more">?</Icon>
            </template>
            <template v-else>
                <span
                        class="pager-item other"
                        v-on:click="onClick(page)"
                >{{ page }}</span>
            </template>
        </template>
        <span class="right"
              v-on:click="onClick(currentPage + 1)"
              v-bind:class="{disabled: currentPage === totalPage}">
            <Icon name="right"></Icon>
        </span>
    </div>
</template>

<script>
    import Icon from './../Icon/icon';
    export default {
        name: "Pager",
        components:{
            Icon
        },
        props: {
            totalPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            },
            isHideOnePage: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            pages() {
                let pages = [1,
                    this.totalPage,
                    this.currentPage,
                    this.currentPage - 1,
                    this.currentPage - 2,
                    this.currentPage - 3,
                    this.currentPage + 1,
                    this.currentPage + 2,
                    this.currentPage + 3];
                // for (let i = 1; i <= this.totalPage; i++) {
                //     pages.push(i);
                // }
                pages = this.unique(pages.sort((a, b) => a - b))
                    .filter((item) => {
                        return item >= 1 && item <= this.totalPage;
                    })
                    .reduce((prev, cur, index, array) => {
                        prev.push(cur);
                        array[index + 1] && array[index + 1] > cur + 1 && prev.push('...');
                        return prev;
                    }, []);
                return pages;

            }
        },
        // data() {
        //
        // },
        methods: {
            onClick(n) {
                if (n >= 1 && n <=this.totalPage) {
                    this.$emit('update:currentPage', n)
                }
            },
            unique(arr) {
                // return [...Set(arr)];

                const hash = {};
                arr.forEach((item) => {
                    hash[item] = true;
                });
                return Object.keys(hash).map((item) => {
                    return parseInt(item, 10);
                })
            }
        }
    }
</script>

<style scoped lang="scss">

    @import "../var";
    .pager {
        display: flex;
        align-items: center;
        .right,
        .left {
            margin: 0 8px;
            display: flex;
            align-items: center;
            font-size: 1.2em;
            background-color: #eee;
            border-radius: $border-radius;

        }
        .disabled {
            cursor: not-allowed;
            svg {
                fill: #ddd;
            }
        }
        .pager-item {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: 1px solid #ddd;
            border-radius: $border-radius;
            padding: 0 4px;
            margin: 0 4px;
            height: 20px;
            font-size: 16px;
            min-width: 22px;
            user-select: none;
            &.active {
                border-color: #3eaf7c;
                color: #4abf8a;
            }
            &.separator {
                border: none;
                cursor: default;
            }
            &:hover {
                color: #3eaf7c;
            }
        }
    }
</style>