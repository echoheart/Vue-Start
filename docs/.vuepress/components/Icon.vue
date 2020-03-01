<template>
  <div>
    <Icon name="loading" v-on:click="this.onIconClick"></Icon>
    <Icon name="left" v-on:click="this.onIconClick"></Icon>
    <Icon name="right" v-on:click="this.onIconClick"></Icon>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import Icon from '../../../src/Icon/icon';
  export default {
    components: {
      Icon,
    },
    methods: {
      onIconClick(e) {
        console.log(e);
      },
    },
    data() {
      return {
        content: `
  <Icon name="loading" v-on:click="this.onIconClick"></Icon>
  <Icon name="left" v-on:click="this.onIconClick"></Icon>
  <Icon name="right" v-on:click="this.onIconClick"></Icon>
      `.replace(/^\t+| +$/g, '').trim()

      }
    }
  }
</script>
