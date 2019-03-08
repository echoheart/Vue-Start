<template>
    <div class="g-sub-nav" v-bind:class="{active}" v-click-out-side="close">
        <span  v-on:click="toggle">
            <slot name="title"></slot>
        </span>

        <div class="g-sub-nav-popover" v-show="isOpen">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    import clickOutSide from './../click-outside';
    export default {
        name: "GSubNav",
        inject:['root'],
        directives: {clickOutSide},
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                isOpen: false,
                // active: false
            }
        },
        computed: {
            active() {

                return  this.root.namePath.indexOf(this.name) > -1;
            }
        },
        methods: {
            close () {
                this.isOpen = false;
            },
            toggle( ) {
                this.isOpen = !this.isOpen;
            },
            updateNamePath() {
                this.root.namePath.push(this.name);
                // console.log(this.root.namePath)
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-sub-nav {
        position: relative;
        &.active {
            &::after {
                content: '';
                position: absolute;
                /*top: 100%;*/
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: blue;
            }
        }
        > span {
            padding: 20px 30px;
            display: block;
            vertical-align: top;
            cursor: pointer;
        }
        .g-sub-nav-popover {
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: 2px;
            white-space: nowrap;
            background-color: #fff;
            box-shadow: 0 0 3px rgba(0,0,0,.5);
            border-radius: 4px;
        }
    }
    .g-sub-nav .g-sub-nav .g-sub-nav-popover {
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
</style>