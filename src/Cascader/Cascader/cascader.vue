<template>
  <div class="cascader" ref="cascader" v-click-out-side="close">

    <div class="trigger" v-on:click="toggle">
      {{ result || '&nbsp'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <CascaderItems
        :items="source"
        class="popover"
        v-bind:selected="selected"
        v-on:update:selected="onUpdateSelected"
        :level="0"
        v-bind:load-data="loadData"
        v-bind:shouldClose="close"
        v-bind:loadingItem="loadingItem"
        v-bind:height="popoverHeight"
      >
      </CascaderItems>
    </div>

  </div>
</template>

<script>
  import CascaderItems from '../CascaderItem/cascader-items';
  import clickOutSide from '../../directives/click-outside';

  export default {
    name: 'Cascader',
    components: {
      CascaderItems
    },
    directives: {clickOutSide},
    methods: {

      toggle() {
        if (this.popoverVisible) {
          this.close();
        } else {
          this.open();
        }
      },
      open() {
        this.popoverVisible = true;
      },
      close() {
        this.popoverVisible = false;
      },
      onUpdateSelected(copySelected) {
        this.$emit('update:selected', copySelected);
        const lastItem = copySelected[copySelected.length - 1];

        let simplest = (children, id) => {
          return children.filter(item => item.id === id)[0]
        }
        let complex = (children, id) => {
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren, id)
          if (found) {
            return found
          } else {
            found = simplest(hasChildren, id)
            if (found) { return found }
            else {
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if (found) {
                  return found
                }
              }
              return undefined
            }
          }
        }
        let updateSource = (result) => {
          this.loadingItem = {}
          let copySource = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(copySource, lastItem.id)
          toUpdate.children = result
          console.log(result);
          console.log(toUpdate);
          this.$emit('update:source', copySource)
        }
        if (!lastItem.isLeaf) {
          this.loadData && this.loadData(lastItem, updateSource);
          this.loadingItem = lastItem;
        }
      }
    },
    computed: {
      result() {
        return this.selected.map((item) => {
          return item.name;
        }).join('/');
      }
    },
    data() {
      return {
        popoverVisible: false,
        loadingItem: {}
      }
    },
    props: {
      source: {
        type: Array
      },
      popoverClassName: {
        type: String,
      },
      popoverHeight: {
        type: String,
      },
      /**
       * 每一级被选中的元素 按照index来标记层级
       * */
      selected: {
        type: Array,
        default: () => []
      },
      loadData: {
        type: Function,
      }

    }
  }
</script>

<style scoped lang="less">
  @import "../../var.less";

  .cascader {
    position: relative;
    height: 32px;
    .trigger {
      border: 1px solid @border-color;
      height: @input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: 10em;
      border-radius: @border-radius;
    }

    .popover-wrapper {
      height: 150px;
      margin-top: 5px;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: white;
      display: flex;
      justify-content: flex-start;

    }
  }
</style>
