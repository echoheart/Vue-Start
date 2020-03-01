<template>
  <div class="scroll-wrapper" ref="parent">
    <div class="scroll" ref="child">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Scroll",
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


        child.style.transform = `translateY(${translateY}px)`

      })
    }
  }
</script>

<style scoped lang="less">
  .scroll-wrapper {
    border: 5px solid red;
    overflow: hidden;
    .scroll {
      border: 2px solid green;
      transition: transform 0.02s ease;
    }
  }
</style>