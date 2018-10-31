<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    // import Vue from 'vue';
    // Vue.prototype.$toast = function () {
    //     console.log('i am toast')
    // }
    export default {
        name: 'g-toast'
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
</style>