<template>
    <div class="toast">
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
                default: 2
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭',
                        callback: (toast) => {
                            toast.close();
                        }
                    }
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
        methods: {
            close() {
                this.$el.remove();
                this.$destroy();
            },
            onClickClose() {
                this.close();
                this.closeButton.callback();
            }
        }
    }
</script>
<style>
    .toast {
        /*border: 1px solid red;*/
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        line-height: 1.8;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: rgba(0,0,0,0.75);
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
        color: #FFF;
        padding: 0 14px;
        border-radius: 4px;
    }
    .close {
        padding-left: 16px;
    }
    .line {
        height: 100%;
        border: 1px solid #666;
        margin-left: 16px;
    }
</style>