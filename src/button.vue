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
        <g-icon v-if="icon && !loading" v-bind:name="icon"></g-icon>
        <g-icon v-if="loading" class="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon';
    export default {
        // props: ['icon', 'iconPosition']
        components: {
          'g-icon': Icon
        },
        props: {
            icon: {},
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
<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--button-radius);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        /*解决内联元素不能上下对齐问题,该值默认值为base-line*/
        vertical-align: middle;
        &:hover {
            border-color: var(--button-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .g-icon {
            order: 1;
            margin-right: .3em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .g-icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>
