<template>
    <div
            class="wrapper"
            v-bind:class="{'error': error}"
    >
        <input
                v-bind:value="value"
                v-bind:disabled="disabled"
                v-bind:readonly="readonly"
                type="text"
                v-on:change="$emit('change', $event)"
        >
        <template v-if="error">
            <Icon name="error"></Icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        components: {Icon},
        name: 'g-input',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    /*--button-height: 32px;*/
    /*--font-size: 14px;*/
    /*--button-bg: #fff;*/
    /*--button-active-bg: #eee;*/
    /*--button-radius: 4px;*/
    /*--color: #333;*/
    /*--border-color: #999;*/
    /*--border-colro-hover: #666;*/

    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: .5em;
        }
        > .error-message {
            color: red;
        }
        &.error {
            > input {
                border-color: $error-red;
            }
        }
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly] {
                border-color: #333;
                color: #333;
                cursor: not-allowed;
            }
        }
    }
</style>