<template>
  <div class="source-item" v-bind:style="{height: height}">
    <!--selected: {{ selected[level] && selected[level].name }}-->
    <!--level: {{ level }}-->
    <!--{{ rightItems }}-->
    <div class="left">
      <div class="label"
           v-for="item in items"
           v-on:click="onClickHandle(item)">

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
    <div class="right" v-if="rightItems">
      <CascaderItems
        v-bind:items="rightItems"
        v-bind:height="height"
        v-bind:selected="selected"
        v-bind:level="level + 1"
        v-on:update:selected="onUpdate"
        v-bind:load-data="loadData"
        v-bind:should-close="shouldClose"
        v-bind:loadingItem="loadingItem"
      >
      </CascaderItems>
    </div>

  </div>
</template>

<script>
  import Icon from '../../Icon/icon';

  const component = {
    name: 'CascaderItems',
    components: {
      CascaderItems: 'CascaderItems',
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
        const copySelected = this.selected.slice();
        //    更新时删除当前层级的后的所有元素
        copySelected.splice(this.level);

        copySelected[this.level] = item;

        this.$emit('update:selected', copySelected);

        if (!this.isShowRightArrow(item)) {
          this.shouldClose()
        }
      },
      onUpdate(copySelected) {
        this.$emit('update:selected', copySelected)
      }
    },
    data() {
      return {}
    },
    computed: {
      rightItems() {
        //  解决右边视图不更新,但是数据更新的问题
        //  由于computed的计算依赖其他属性,所以如果依赖属性没有变化的话,计算属性也不会变化
        if (this.selected[this.level]) {
          const currentSelected = this.items.filter((item) => {
            return item.name === this.selected[this.level].name;
          })[0];

          if (currentSelected && currentSelected.children && currentSelected.children.length > 0) {
            return currentSelected.children
          }
        }

        // const currentSelected = this.selected[this.level];
        // if (currentSelected && currentSelected.children) {
        //     return this.selected[this.level].children
        // } else {
        //     return null;
        // }
      }
    },
  };
  export default component

</script>

<style lang="less" scoped>
  @import '../../var.less';

  .source-item {

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

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
