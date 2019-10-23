<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ButtonGroup',
    mounted() {
      for (let node of this.$el.children) {
        let nodeName = node.nodeName.toLowerCase();
        if (nodeName !== 'button') {
          console.warn(`在g-button-group中请使用g-button,但是你使用的是${nodeName} 这可能会引起一些问题`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-radius: 4px;
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .g-button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: -1px;
      }

      &:first-child {
        border-top-left-radius: $button-radius;
        border-bottom-left-radius: $button-radius;
      }

      &:last-child {
        border-top-right-radius: $button-radius;
        border-bottom-right-radius: $button-radius;
      }

      &:hover {
        z-index: 1;
      }
    }
  }
</style>
