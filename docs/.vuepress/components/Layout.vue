<template>
  <div>
    <div class="demo-show-item" style="margin-bottom: 50px;">
      <Layout class="demo-layout">
        <Header class="demo-header">header</Header>
        <Content class="demo-content">content</Content>
        <Footer class="demo-footer">footer</Footer>
      </Layout>
    </div>

    <div class="demo-show-item">
      <Layout class="demo-layout">
        <Header class="demo-header" height="100">header</Header>
        <Layout>
          <Aside class="demo-aside">Aside</Aside>
          <Content class="demo-content">Content</Content>
        </Layout>
        <Footer class="demo-footer" height="100">footer</Footer>
      </Layout>
    </div>
  </div>
</template>


<script>
  import Header from '../../../src/Layout/Header/header';
  import Layout from '../../../src/Layout/Layout/layout';
  import Content from '../../../src/Layout/Content/content';
  import Aside from '../../../src/Layout/Aside/aside';
  import Footer from '../../../src/Layout/Footer/footer';
  export default {
    components: {
      Header,
      Layout,
      Content,
      Aside,
      Footer
    },
    data() {
      return {
        content: `
<div class="demo-show-item">
  <Layout class="demo-layout">
    <Header class="demo-header">header</Header>
    <Content class="demo-content">content</Content>
    <Footer class="demo-footer">footer</Footer>
  </Layout>
</div>
<div class="demo-show-item">
  <Layout class="demo-layout">
    <Header class="demo-header" height="100">header</Header>
    <Layout>
      <Aside class="demo-aside">Aside</Aside>
      <Content class="demo-content">Content</Content>
    </Layout>
    <Footer class="demo-footer" height="100">footer</Footer>
  </Layout>
</div>
      `.replace(/^\t+| +$/g, '').trim()

      }
    }
  }
</script>

<style lang="less" scoped>
  .demo-layout {
    width: 100%;
    .demo-header, .demo-content, .demo-footer, .demo-aside {
      text-align: center;
      font-size: 16px;
    }
    .demo-header {
      background: #aaa;
      height: 30px;
      line-height: 30px;
    }
    .demo-content {
      background: #bbb;
      padding: 20px;
      flex-grow: 1;
    }
    .demo-footer {
      background: #ddd;
      height: 30px;
      line-height: 30px;
    }
    .demo-aside {
      width: 45px;
      background: #ccc;
    }
  }
</style>
