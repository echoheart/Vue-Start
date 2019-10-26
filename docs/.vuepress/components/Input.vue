<template>
  <div>
    <div>
      <Input :value="inputValue" v-on:change="onInputChange"></Input>
      <Input :disabled="true"></Input>
      <Input :readonly="true"></Input>
      <Input error="密码太短"></Input>
    </div>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import Input from '../../../src/Input/input';

  export default {
    components: {
      Input
    },
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
              <div>
                <Input :value="inputValue" v-on:change="onInputChange"></Input>
                <Input :disabled="true"></Input>
                <Input :readonly="true"></Input>
                <Input error="密码太短"></Input>
              </div>
                `.replace(/\t+| +/g, '').trim()

      }
    }
  }
</script>
