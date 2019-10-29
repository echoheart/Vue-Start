<template>
  <div>
    <div>
      <div style="margin-bottom: 10px;">
        <Input :value="inputValue" v-on:change="onInputChange"></Input>
      </div>
      <div style="margin-bottom: 10px;">
        <Input :disabled="true"></Input>
      </div>
      <div style="margin-bottom: 10px;">
        <Input :readonly="true"></Input>
      </div>
      <div style="margin-bottom: 10px;">
        <Input error="密码太短"></Input>
      </div>
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
  <div>
    <Input :value="inputValue" v-on:change="onInputChange"></Input>
  </div>
  <div>
    <Input :disabled="true"></Input>
  </div>
  <div>
    <Input :readonly="true"></Input>
  </div>
  <div>
    <Input error="密码太短"></Input>
  </div>
</div>
                `.replace(/^\t+| +$/g, '').trim()

      }
    }
  }
</script>
