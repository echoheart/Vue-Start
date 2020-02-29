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
        // document.addEventListener('click', this.onHandleDocumentClick);
      },
      close() {
        this.popoverVisible = false;
        // document.removeEventListener('click', this.onHandleDocumentClick)
      },
      onUpdateSelected(copySelected) {
        this.$emit('update:selected', copySelected);
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
