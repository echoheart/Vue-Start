<template>
  <aside :style="`width: ${width}px`">
    <slot></slot>
  </aside>
</template>

<script>


  export default {
    name: 'Aside',
    props: {
      width: {
       default: 'auto'
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
