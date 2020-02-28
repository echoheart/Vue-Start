<template>
  <div class="source-item" v-bind:style="{height: height}">
    <div class="left">
      <div class="label"
           v-for="item in items"
           v-on:click="() => {onClickHandle(item)}">
        <span class="name">{{ item.name }}</span>
        <span class="icons">
            <template v-if="loadingItem.name === item.name">
                <Icon class="icon loading" name="loading"/>
            </template>
            <template v-else>
                <Icon class="icon" name="right" v-if="isShowRightArrow(item)"/>
            </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <CascaderItem
        v-bind:items="rightItem"
        v-bind:height="height"

        v-bind:selected="selected"
        v-on:update:selected="onUpdateSelected"

        v-bind:level="level + 1"

        v-bind:load-data="loadData"
        v-bind:should-close="shouldClose"
        v-bind:loadingItem="loadingItem"
      >
      </CascaderItem>
    </div>

  </div>
</template>

<script>
  import Icon from '../../Icon/icon';

  const CascaderItem = {
    name: 'CascaderItem',
    components: {
      Icon: Icon,
    },
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      },
      loadData: {
        type: Function,
      },
      shouldClose: {
        type: Function
      },
      loadingItem: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    methods: {
      isShowRightArrow(item) {
        return this.loadData ? !item.isLeaf : item.children;
      },
      onClickHandle(item) {
        // 拷贝一份全新的数据
        const copySelected = JSON.parse((JSON.stringify(this.selected)));
        copySelected[this.level] = item;
        // 更新时删除当前层级的后的所有元素达到更新数据的目的
        console.log(this.level, 'this.level');
        copySelected.splice(this.level + 1);
        console.log('copySelected', copySelected);
        this.$emit('update:selected', copySelected);

      },
      onUpdateSelected(copySelected) {
        this.$emit('update:selected', copySelected)
      }
    },
    data() {
      return {
        leftSelectedItem: null
      }
    },
    computed: {
      rightItem() {
        /**
         * 当前点击的父元素(左边的值)
         * 计算出子元素rightItem(右边的值)
         * */
        const currentLeftSelectedItem = this.selected[this.level];
        if (currentLeftSelectedItem && currentLeftSelectedItem.children && currentLeftSelectedItem.children.length > 0) {
          return currentLeftSelectedItem.children
        } else {
          return null;
        }
      }
    },
  };
  export default CascaderItem

</script>

<style lang="less" scoped>
  @import '../../var.less';

  .source-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    white-space: nowrap;
    height: 100%;
    .left {
      padding-top: .3em;
      overflow: auto;
      height: 100%;
      .label {
        display: flex;
        cursor: pointer;
        user-select: none;
        &:hover {
          background: @grey;
        }
        padding: .5em 1em;

        > .name {
          padding-right: 1em;
        }

        > .icons {
          margin-left: auto;

          > .loading {
            animation: spin 1s infinite linear;
          }
        }
      }
    }
    .right {
      height: 100%;
      border-left: 1px solid @grey;
    }

  }
</style>
