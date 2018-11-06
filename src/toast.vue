<template>
    <div class="toast" v-bind:class="toastClasses">
        <slot></slot>
        <div class="line"></div>
        <span class="close"
              v-if="closeButton"
              v-on:click="onClickClose"
        >
            {{ closeButton.text }}
        </span>
    </div>
</template>
<script>
    // import Vue from 'vue';
    // Vue.prototype.$toast = function () {
    //     console.log('i am toast')
    // }
    export default {
        name: 'g-toast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 100
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            position: {
                type: String,
                default: 'top',
                validator: (value) => {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000)
            }
        },
        computed: {
            toastClasses() {
                return {[`position-${this.position}`]: true};
            }
        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy();
            },
            onClickClose() {
                this.close();
                this.closeButton && typeof(this.closeButton.callback) === 'function' && this.closeButton.callback();

                // if (this.closeButton && typeof(this.closeButton.callback) === 'function') {
                //     this.closeButton.callback();
                // }
            }
        }
    }
</script>
<style lang="scss">
    .toast {
        /*border: 1px solid red;*/
        position: fixed;

        font-size: 14px;
        line-height: 1.8;
        min-height: 40px;
        display: flex;
        align-items: center;
        background-color: rgba(0,0,0,0.75);
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
        color: #FFF;
        padding: 0 14px;
        border-radius: 4px;

        left: 50%;

        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }
        .line {
            height: 100%;
            border: 1px solid #666;
            margin-left: 16px;
        }
        &.position-top {
            top: 0;
            transform: translateX(-50%);
        }
        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

</style>