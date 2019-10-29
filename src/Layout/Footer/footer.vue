<template>
  <footer :style="`height: ${height}px`">
    <slot></slot>
  </footer>
</template>

<script>


  export default {
    name: 'Footer',
    props: {
      height: {
        default: 'auto'
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
