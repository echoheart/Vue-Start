<template>
  <div class="sticky" ref="wrapper" :style="{height}">
    <div class="sticky-inner" :class="classes" :style="{left, width}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sticky",
    data() {
      return {
        sticky: false,
        height: undefined,
        width: undefined,
        left: undefined,
      }
    },
    computed: {
      classes() {
        return {
          sticky: this.sticky
        };
      }
    },
    mounted() {
      let top = this.getTop();
      document.addEventListener('scroll', this.onScrollHandler)
    },
    beforeDestroy() {
      document.removeEventListener('scroll', this.onScrollHandler)
    },
    methods: {
      getTop() {
        const {top} = this.$refs.wrapper.getBoundingClientRect();
        const scrollY = window.scrollY;
        console.log('top:',top, 'scrollY:', scrollY);
        return top + scrollY
      },
      onScrollHandler() {
        const {height, left, width} = this.$refs.wrapper.getBoundingClientRect();
        this.height = height + 'px';
        this.width = width + 'px';
        this.left = left + 'px';
        this.sticky = top < window.scrollY;
      }
    }
  }
</script>

<style scoped lang="scss">
  .sticky {
    .sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
</style>
