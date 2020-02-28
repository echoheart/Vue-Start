<template>
  <div>
    <Input :value="inputValue" v-on:change="onInputChange"></Input>
    <Input :disabled="true"></Input>
    <Input :readonly="true"></Input>
    <Input error="密码太短"></Input>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  export default {
    methods: {
      onInputChange(e) {
        console.log(e.srcElement.value);
        this.inputValue = e.srcElement.value;
      },
    },
    data() {
      return {
        inputValue: '初始值',
        content: `
            <Input :value="inputValue" v-on:change="onInputChange"></Input>
            <Input :disabled="true"></Input>
            <Input :readonly="true"></Input>
            <Input error="密码太短"></Input>
                `.replace(/^\t+| +$/g, '').trim()

      }
    }
  }
</script>
