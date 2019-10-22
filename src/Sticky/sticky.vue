<template>
  <div class="wrapper-sticky" ref="wrapper" :style="{height}">
    <div class="wrapper-sticky-inner" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sticky",
    props: {
      distance: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        sticky: false,
        height: undefined,
        width: undefined,
        left: undefined,
        top: undefined
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
      this.onScrollHandler = this._onScrollHandler.bind(this);
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
      _onScrollHandler() {
        let top = this.getTop();
        const {height, left, width} = this.$refs.wrapper.getBoundingClientRect();
        this.height = height + 'px';
        this.width = width + 'px';
        this.left = left + 'px';
        this.top = this.distance + 'px';
        this.sticky = top < window.scrollY + this.distance;
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper-sticky {
    &-inner {
      background: green;
      opacity: 0.3;
    }
    .sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
</style>
