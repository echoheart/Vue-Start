<template>
  <div>
    <Button>默认按钮</Button>
    <Button icon="setting">图标按钮</Button>
    <Button loading>图标按钮</Button>
    <Button disabled>不可点击</Button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import Button from '../../../src/Button/button';
  export default {
    components: {
      Button,
    },
    data() {
      return {
        content: `
            <Button>默认按钮</Button>
            <Button icon="setting">图标按钮</Button>
            <Button loading>图标按钮</Button>
            <Button disabled>不可点击</Button>
                `.replace(/\t+| +/g, '').trim()

      }
    }
  }
</script>
