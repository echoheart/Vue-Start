<template>
    <!--<button class="g-button" v-if="iconPosition === 'left' || !iconPosition" >-->
        <!--<svg v-if="icon" class="icon">-->
            <!--<use v-bind:xlink:href="`#icon-${icon}`"></use>-->
        <!--</svg>-->
        <!--<slot></slot>-->
    <!--</button>-->
    <!--<button class="g-button" v-else >-->
        <!--<slot></slot>-->
        <!--<svg v-if="icon" class="icon">-->
            <!--<use v-bind:xlink:href="`#icon-${icon}`"></use>-->
        <!--</svg>-->
    <!--</button>-->

    <!--使用css控制icon位置-->
    <button class="g-button" v-bind:class="{[`icon-${iconPosition}`]: true}" v-on:click="$emit('click')">
        <!--<svg v-if="icon" class="icon">-->
            <!--<use v-bind:xlink:href="`#icon-${icon}`"></use>-->
        <!--</svg>-->
        <Icon v-if="icon && !loading" v-bind:name="icon"></Icon>
        <Icon v-if="loading" class="loading" name="loading"></Icon>
        <div class="g-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from '../Icon/icon';
    export default {
        // props: ['icon', 'iconPosition']
        name: 'Button',
        components: {
          Icon
        },
        props: {
            icon: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    // if (value !== 'left' && value !== 'right') {
                    //     return false
                    // } else {
                    //     return true;
                    // }

                //    代码优化
                //     return value !== 'left' && value !== 'right';
                    return value === 'left' || value === 'right';
                }

            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../var";



    .g-button {
        height: $button-height;
        font-size: $font-size;
        padding: 0 1em;
        border-radius: $button-radius;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        /*解决内联元素不能上下对齐问题,该值默认值为base-line*/
        vertical-align: middle;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        > .g-icon {
            order: 1;
            margin-right: .3em;
        }
        > .g-content {
            order: 2;
        }
        &.icon-right {
            > .g-icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
            > .g-content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>
