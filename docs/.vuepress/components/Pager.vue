<template>
  <div>
    <Pager :currentPage.sync="currentPage" :totalPage="50"></Pager>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import Pager from '../../../src/Pagination/Pager';

  export default {
    components: {
      Pager
    },
    methods: {

    },
    data() {
      return {
        currentPage: 6,
        content: `
<Pager :currentPage.sync="currentPage" :totalPage="100"></Pager>
                `.replace(/^\t+| +$/g, '').trim()

      }
    }
  }
</script>
