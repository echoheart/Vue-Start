<template>
    <div class="g-sub-nav" v-bind:class="{active}" v-click-out-side="close">
        <span v-on:click="toggle" class="g-sub-nav-label" v-bind:class="{vertical, active}">
            <slot name="title"></slot>
            <span class="g-sub-nav-icon" v-bind:class="{isOpen}">
                <Icon name="right"></Icon>
            </span>
        </span>

        <template v-if="vertical">
            <transition @enter="enter" @leave="leave" @after-leave="afterLeave"
                        @after-enter="afterEnter">
                <div class="g-sub-nav-popover" v-show="isOpen" v-bind:class="{vertical}">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="g-sub-nav-popover" v-show="isOpen" v-bind:class="{vertical}">
                <slot></slot>
            </div>
        </template>
        <!--<div class="g-sub-nav-popover" v-show="isOpen" v-bind:class="{vertical:vertical}">-->
        <!--<slot></slot>-->
        <!--</div>-->

    </div>
</template>

<script>
    import clickOutSide from '../../utils/click-outside';
    import Icon from '../../Icon/icon';

    export default {
        name: "SubNav",
        components: {Icon},
        inject: ['root', 'vertical'],
        directives: {clickOutSide},
        component: {
            Icon
        },
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

                return this.root.namePath.indexOf(this.name) > -1;
            }
        },
        methods: {
            enter(el, done) {
                let {height} = el.getBoundingClientRect();
                el.style.height = 0;
                el.getBoundingClientRect();
                el.style.height = `${height}px`;
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterEnter(el) {
                el.style.height = 'auto'
            },
            leave: function (el, done) {
                let {height} = el.getBoundingClientRect();
                el.style.height = `${height}px`;
                el.getBoundingClientRect();
                el.style.height = 0;
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterLeave: function (el) {
                el.style.height = 'auto';
            },
            close() {
                this.isOpen = false;
            },
            toggle() {
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
        user-select: none;
        /*&:hover {*/
            /*color:#1890ff;*/
        /*}*/

        > span {
            padding: 20px 30px;
            display: block;
            vertical-align: top;
            cursor: pointer;
        }

        .g-sub-nav-popover {
            transition: height 250ms;
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: 2px;
            white-space: nowrap;
            background-color: #fff;
            box-shadow: 0 0 3px rgba(0, 0, 0, .5);
            border-radius: 4px;

            &.vertical {
                position: static;
                box-shadow: none;
                border: none;
                overflow: hidden;
                margin-left: 20px;
            }
        }

        .g-sub-nav-label {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &.vertical.active {
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 100%;
                    width: 2px;
                    height: 100%;
                    background-color: #1890ff;
                }
            }
        }

        .g-sub-nav-icon {
            transition: transform 300ms;
            display: inline-flex;
            margin-left: 1em;
            transform: rotate(90deg);

            svg {
                fill: #000;
            }

            &.isOpen {
                transform: rotate(-90deg);
            }
        }
    }

    .g-sub-nav .g-sub-nav .g-sub-nav-popover {
        top: 0;
        left: 100%;
        margin-left: 6px;

        &.vertical {
            margin-left: 20px;
        }
    }

    .g-sub-nav.active .g-sub-nav.active {
        > .g-sub-nav-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &.active {
                &::after {
                    display: none;
                }
            }
        }
    }
</style>
