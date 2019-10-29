<template>
  <main class="pure-content">
    <slot></slot>
  </main>
</template>

<script>


  export default {
    name: 'Content',

  }
</script>

<style lang="less" scoped>
  .pure-content {
    flex-grow: 1;
  }
</style>
