<template>
  <div>
    <Collapse :activeNames="collapseActiveNames" v-on:update-activeNames="onUpdateActiveNames">
      <CollapseItem name="1" title="标题1">内容一</CollapseItem>
      <CollapseItem name="2" title="标题1">内容二</CollapseItem>
      <CollapseItem name="3" title="标题1">内容三</CollapseItem>
    </Collapse>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import Collapse from '../../../src/Collapse/Collapse/collapse';
  import CollapseItem from '../../../src/Collapse/CollapseItem/collapse-item';
  export default {
    components: {
      Collapse,
      CollapseItem
    },
    methods: {
      onUpdateActiveNames(activeNames) {
        this.collapseActiveNames = activeNames;
      },
    },
    data() {
      return {
        collapseActiveNames: [],
        content: `
            <Collapse :activeNames="collapseActiveNames" v-on:update-activeNames="onUpdateActiveNames">
              <CollapseItem name="1" title="标题1">内容一</CollapseItem>
              <CollapseItem name="2" title="标题1">内容二</CollapseItem>
              <CollapseItem name="3" title="标题1">内容三</CollapseItem>
            </Collapse>
                `.replace(/\t+| +/g, '').trim()

      }
    }
  }
</script>
