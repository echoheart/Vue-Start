<template>
  <div>
    <Tab :value="this.tabValue" v-on:click="this.onTabClick">
      <TabPane name="one" label="标题一">one</TabPane>
      <TabPane name="two" label="标题二">two</TabPane>
      <TabPane name="three" label="标题三">three</TabPane>
      <TabPane name="four" label="标题四">four</TabPane>
    </Tab>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import Tab from '../../../src/Tab/Tab/tab';
  import TabPane from '../../../src/Tab/TabPane/tab-pane';
  export default {
    components: {
      Tab,
      TabPane
    },
    methods: {
      onTabClick(name) {
        this.tabValue = name;
      },
    },
    data() {
      return {
        tabValue: 'one',
        content: `
            <Tab :value="this.tabValue" v-on:click="this.onTabClick">
              <TabPane name="one" label="标题一">one</TabPane>
              <TabPane name="two" label="标题二">two</TabPane>
              <TabPane name="three" label="标题三">three</TabPane>
              <TabPane name="four" label="标题四">four</TabPane>
            </Tab>
                `.replace(/\t+| +/g, '').trim()

      }
    }
  }
</script>
