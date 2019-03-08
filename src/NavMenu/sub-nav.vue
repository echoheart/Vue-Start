<template>
    <div class="g-sub-nav" >
        <span  v-on:click="toggle">
            <slot name="title"></slot>
        </span>

        <div class="g-sub-nav-popover" v-show="isOpen">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GSubNav",
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-sub-nav {
        position: relative;
        > span {
            padding: 20px 30px;
            display: inline-block;
            vertical-align: top;
        }
        .g-sub-nav-popover {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid red;
            white-space: nowrap;
        }
    }
</style>