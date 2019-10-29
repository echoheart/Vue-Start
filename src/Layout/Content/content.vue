<template>
  <main class="content">
    <slot></slot>
  </main>
</template>

<script>


  export default {
    name: 'Content',

  }
</script>

<style lang="less" scoped>
  .content {
    flex-grow: 1;
  }
</style>
