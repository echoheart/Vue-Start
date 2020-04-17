<template>
  <div class="source-item" v-bind:style="{height: height}">
    <div class="left">
      <div class="label"
           v-for="item in items"
           v-on:click="() => {handleLabelClick(item)}">
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
      handleLabelClick(item) {
        // 拷贝一份全新的数据
        const copySelected = JSON.parse((JSON.stringify(this.selected)));
        copySelected[this.level] = item;
        copySelected.splice(this.level + 1);
        this.$emit('update:selected', copySelected);

      },
      onUpdateSelected(copySelected) {
        this.$emit('update:selected', copySelected);
      }
    },
    computed: {
      rightItem() {
        /**
         * 当前点击的父元素(左边的值)
         * 计算出子元素rightItem(右边的值)
         * */
        if (this.selected[this.level]) {
            const selected = this.items.filter((item) => {return item.name === this.selected[this.level].name})[0];
            console.log(selected);
            if (selected && selected.children && selected.children.length > 0) {
                return selected.children;
            }
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
