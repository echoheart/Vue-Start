<template>
  <div>
    <div style="margin-bottom: 20px;">
      <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click">
        <Button slot="trigger">PopoverClickTop</Button>
      </Popover>
      <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click" position="left">
        <Button slot="trigger">PopoverClickLeft</Button>
      </Popover>
      <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click" position="bottom">
        <Button slot="trigger">PopoverClickBottom</Button>
      </Popover>
      <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click" position="right">
        <Button slot="trigger">PopoverClickRight</Button>
      </Popover>
    </div>
    <div>
      <Popover content="内容内容内容内容内容内容内容内容内容">
        <Button slot="trigger">PopoverHoverTop</Button>
      </Popover>
      <Popover title="标题" position="left">
        内容内容内容内容内容内容内容内容内容
        <Button slot="trigger">PopoverHoverLeft</Button>
      </Popover>
      <Popover title="标题" position="bottom">
        内容内容内容内容内容内容内容内容内容
        <Button slot="trigger">PopoverHoverBottom</Button>
      </Popover>
      <Popover content="内容内容内容内容内容内容内容内容内容" position="right">
        <Button slot="trigger">PopoverHoverRight</Button>
      </Popover>
    </div>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import Popover from '../../../src/Popover/popover';
  import Button from '../../../src/Button/button';
  export default {
    components: {
      Popover,
      Button
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
  <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click">
    <Button slot="trigger">PopoverClickTop</Button>
  </Popover>
  <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click" position="left">
    <Button slot="trigger">PopoverClickLeft</Button>
  </Popover>
  <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click" position="bottom">
    <Button slot="trigger">PopoverClickBottom</Button>
  </Popover>
  <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click" position="right">
    <Button slot="trigger">PopoverClickRight</Button>
  </Popover>
  </div>
  <div>
  <Popover content="内容内容内容内容内容内容内容内容内容">
    <Button slot="trigger">PopoverHoverTop</Button>
  </Popover>
  <Popover title="标题" position="left">
    内容内容内容内容内容内容内容内容内容
    <Button slot="trigger">PopoverHoverLeft</Button>
  </Popover>
  <Popover title="标题" position="bottom">
    内容内容内容内容内容内容内容内容内容
    <Button slot="trigger">PopoverHoverBottom</Button>
  </Popover>
  <Popover content="内容内容内容内容内容内容内容内容内容" position="right">
    <Button slot="trigger">PopoverHoverRight</Button>
  </Popover>
</div>`.replace(/^\t+| +$/g, '').trim()

      }
    }
  }
</script>
