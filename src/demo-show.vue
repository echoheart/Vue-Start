<template>
  <div>
    <div style="height: 1500px; border: 1px solid red; margin-top: 100px">
      我是滚动测试div
    </div>
    <Sticky style="border: 1px solid green;" :distance="100">
      <div style="height: 500px;">
        我是sticky
      </div>
    </Sticky>
    <div style="height: 1500px; border: 1px solid red; margin-top: 100px">
      我是滚动测试div
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Components from './index';
  import plugin from './Toast/plugin';
  import DB from '../test/fixtures/db';
  Vue.use(plugin);
  Vue.use(Components);

  function ajax(parentId = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = DB.filter((item) => {
          return item.parent_id === parentId;
        });
        result.forEach((node) => {
          if (DB.filter((item) => {
            return item.parent_id === node.id;
          }).length > 0) {
            node.isLeaf = false;
          } else {
            node.isLeaf = true;
          }
        });
        resolve(result);
      }, 300);
    });
  }

  export default {
    name: "demo-show",


    mounted() {

    },
    created() {

    },
    data: function () {
      return {}
    },
    methods: {

    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 20px;
  }

  :root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: #fff;
    --button-active-bg: #eee;
    --button-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-colro-hover: #666;
  }

  .box {
    width: 100%;
    height: 300px;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    /*border: 1px solid red;*/
  }
</style>
