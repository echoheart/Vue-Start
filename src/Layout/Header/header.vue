<template>
  <header :style="`height: ${height}px`">
    <slot></slot>
  </header>
</template>

<script>


  export default {
    name: 'Header',
    props: {
      height: {
        default: 'auto'
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
