<template>
  <div class="layout" :style="`flex-direction:${direction}`">
    <slot></slot>
  </div>
</template>

<script>


  export default {
    name: 'Layout',
    data() {
      return {
        direction: 'column',
      }
    },
    mounted() {
      this.$children.map((item) => {
        if (item.$options.name === 'Aside') {
          this.direction = 'row';
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .layout {
    display: flex;
    flex-direction: column;
  }
</style>
