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
    <div class="demo-show-item">
      <Input :value="inputValue" v-on:change="onInputChange"></Input>
      <Input :disabled="true"></Input>
      <Input :readonly="true"></Input>
      <Input error="密码太短"></Input>
    </div>
    <div class="demo-show-item">
      <Button @click="onToastClick">Toast</Button>
    </div>

    <div class="demo-show-item">
      <Row style="width: 100%;" class="row-bg">
        <Col span="10">
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span="14">
          <div class="grid-content bg-purple-light"></div>
        </Col>
      </Row>
    </div>
    <div class="demo-show-item">
      <Row style="width: 100%;" class="row-bg">
        <Col span="2">
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span="22">
          <div class="grid-content bg-purple-light"></div>
        </Col>
      </Row>
    </div>
    <div class="demo-show-item">
      <Row style="width: 100%;" class="row-bg" gutter="20">
        <Col span="6">
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span="6">
          <div class="grid-content bg-purple-light"></div>
        </Col>
        <Col span="6">
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span="6">
          <div class="grid-content bg-purple-light"></div>
        </Col>
      </Row>
    </div>
    <div class="demo-show-item">
      <Row style="width: 100%;" class="row-bg fff">
        <Col span="6">
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span="6">
          <div class="grid-content bg-purple-light"></div>
        </Col>
        <Col span="6">
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span="3">
          <div class="grid-content bg-purple-light"></div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueUI from './index';
  import DB from '../test/fixtures/db';

  Vue.use(VueUI);


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
      return {
        inputValue: '初始值'
      }
    },
    methods: {
      onIconClick(e) {
        console.log(e);
      },
      onButtonClick(e) {
        console.log(e);
      },
      onInputChange(e) {
        console.log(e.srcElement.value);
        this.inputValue = e.srcElement.value;
      },
      onToastClick() {
        this.$toast('message');
      },
    }
  }
</script>

<style lang="scss">
  .row-bg {
    &.fff {
      background: #fff;
    }
    background-color: #f9fafc;
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
  }
  .demo-show {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    &-item {
      width: 40%;
      display: flex;
      justify-content: space-between;
      margin: 25px;
      flex-wrap: wrap;
       > * {
         margin-bottom: 8px;
       }
      border: 1px solid #eee;
      padding: 8px;
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
