<template>
  <div class="demo-show">
    <div class="demo-show-item">
      <Icon name="loading" v-on:click="this.onIconClick"></Icon>
      <Icon name="left" v-on:click="this.onIconClick"></Icon>
      <Icon name="right" v-on:click="this.onIconClick"></Icon>
    </div>
    <div class="demo-show-item">
      <Button v-on:click="onButtonClick" icon="left" :loading="false"></Button>
      <Button :loading="true"></Button>
      <Button icon="right" iconPosition="right"></Button>

    </div>
    <div class="demo-show-item">

    </div>
    <div class="demo-show-item">

    </div>
    <div class="demo-show-item">
      <Button-group>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Button-group>
    </div>
    <div class="demo-show-item">
      <Button-group>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Button-group>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueUI from './index';
  import plugin from './Toast/plugin';
  import DB from '../test/fixtures/db';

  Vue.use(VueUI);
  Vue.use(plugin);


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
      onIconClick(e) {
        console.log(e);
      },
      onButtonClick(e) {
        console.log(e);
      },
    }
  }
</script>

<style lang="scss">
  .demo-show {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    &-item {
      width: 40%;
      display: flex;
      justify-content: space-around;
      margin: 25px;
      flex-wrap: wrap;
    }
  }
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

</style>
