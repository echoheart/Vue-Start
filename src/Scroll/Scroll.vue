<template>
  <div class="scroll-wrapper" ref="parent">
    <div class="scroll" ref="child">
      <slot></slot>
    </div>

    <div class="scroll-track" >
      <div class="scroll-bar" ref="bar">
        <div class="scroll-bar-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Scroll",
    data() {
      return {
        innerBarHeight: 0
      }
    },
    mounted() {
      console.log('scroll mounted');

      const parent = this.$refs.parent;
      const child = this.$refs.child;
      let translateY = 0;
      const {height: parentHeight} = parent.getBoundingClientRect();
      const {height: childHeight} = child.getBoundingClientRect();
      let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent);
      borderTopWidth = parseInt(borderTopWidth);
      borderBottomWidth = parseInt(borderBottomWidth);
      paddingTop = parseInt(paddingTop);
      paddingBottom = parseInt(paddingBottom);
      let maxHeight = childHeight - parentHeight + (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom);

      parent.addEventListener('wheel', (e) => {
        if (e.deltaY > 20) {
          translateY -= 20 *3
        } else if(e.deltaY < -20) {
          translateY -= -20 *3
        } else {
          translateY -= e.deltaY * 3;
        }
        console.log(translateY);

        if (translateY > 0) {
          translateY = 0;
        } else if (translateY < -maxHeight) {
          translateY = -maxHeight;
        } else {
          e.preventDefault();
        }


        child.style.transform = `translateY(${translateY}px)`;
        this.updateScrollHeight(parentHeight, childHeight, translateY);
      });

    },
    methods: {
      updateScrollHeight(parentHeight, childHeight, translateY) {
        const barHeight = parentHeight * parentHeight / childHeight;
        this.$refs.bar.style.height = barHeight + 'px';

        const y = parentHeight * translateY / childHeight;
        this.$refs.bar.style.transform = `translateY(${-y}px)`
      }
    }
  }
</script>

<style scoped lang="less">
  .scroll-wrapper {
    border: 1px solid grey;
    overflow: hidden;
    position: relative;
    .scroll {
      transition: transform 0.02s ease;
    }
    .scroll-track {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 14px;
      background-color: #FAFAFA;
      border-left: 1px solid #E8E7E8;
    }
    .scroll-bar {
      position: absolute;
      top: -1px;
      left: 50%;
      height: 40px;
      width: 8px;
      margin-left: -4px;
      transition: transform 0.02s ease;
      &-inner {
        background: #C2C2C2;
        border-radius: 4px;
        height: 100%;
        &:hover {
          background: #7d7d7d;
        }
      }
    }
  }
</style>