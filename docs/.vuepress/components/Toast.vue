<template>
  <div>
    <Button @click="onToastClick">Toast</Button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import Vue from 'vue';
  import Button from '../../../src/Button/button';
  import Toast from '../../../src/Toast/index';

  Vue.prototype.$toast = Toast;

  export default {
    components: {
      Button
    },
    methods: {
      onToastClick() {
        this.$toast('message');
      },
    },
    data() {
      return {
        tabValue: 'one',
        content: `
            <Button @click="onToastClick">Toast</Button>
                `.replace(/^\t+| +$/g, '').trim()

      }
    }
  }
</script>
