<template>
  <div class="scroll-wrapper" ref="parent" @wheel="onWheel">
    <div class="scroll" ref="child" :style="{transform: `translateY(${contentY}px)`}">
      <slot></slot>
    </div>

    <div class="scroll-track" >
      <div class="scroll-bar" ref="bar"
           @mousedown="onMouseDownScrollbar"
           @selectstart.prevent
           :style="{transform: `translateY(${scrollBarY}px)`}">
        <div class="scroll-bar-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>

  import libHelper from '../utils/lib-helper';
  export default {
    name: "Scroll",
    data() {
      return {
        scrollBarVisible: false,
        isScrolling: false,
        startPosition: undefined,
        endPosition: undefined,
        scrollBarY: 0,
        contentY: 0,
        barHeight: undefined,
        parentHeight: undefined,
        childHeight: undefined
      }
    },
    mounted() {
      this.listenDocument();
      this.parentHeight = this.$refs.parent.getBoundingClientRect().height;
      this.childHeight = this.$refs.child.getBoundingClientRect().height;
      this.updateScrollBarY();
    },
    computed: {
      maxScrollHeight() {
        return this.parentHeight - this.barHeight;
      }
    },
    methods: {
      listenDocument() {
        document.addEventListener('mousemove', libHelper.throttle(this.onMouseMoveScrollbar, 0.01));
        document.addEventListener('mouseup', e => this.onMouseUpScrollbar(e));
      },
      onWheel(e) {
        let maxHeight = this.getContentYMax();
        if (e.deltaY > 20) {
          this.contentY -= 20 *3
        } else if(e.deltaY < -20) {
          this.contentY -= -20 *3
        } else {
          this.contentY -= e.deltaY * 3;
        }
        // console.log(this.contentY);
        if (this.contentY > 0) {
          this.contentY = 0;
        } else if (this.contentY < -maxHeight) {
          this.contentY = -maxHeight;
        } else {
          e.preventDefault();
        }
        this.updateScrollBarY();
      },
      getContentYMax() {
        const parent = this.$refs.parent;
        let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent);
        borderTopWidth = parseInt(borderTopWidth);
        borderBottomWidth = parseInt(borderBottomWidth);
        paddingTop = parseInt(paddingTop);
        paddingBottom = parseInt(paddingBottom);
        let maxHeight = this.childHeight - this.parentHeight + (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom);
        return maxHeight;
      },
      updateScrollBarY() {
        this.barHeight = this.parentHeight * this.parentHeight / this.childHeight;
        this.$refs.bar.style.height = this.barHeight + 'px';
        this.scrollBarY = -this.parentHeight * this.contentY / this.childHeight;
      },
      getTranslateY(dom) {
        const matrix = window.getComputedStyle(dom).transform;
        const reg = /^0-9$/g;
        const result = matrix.replace(reg, '');
        const arr = result.split(',');
        return parseFloat(arr[arr.length - 1])
      },
      onMouseMoveScrollbar(e) {
        if (!this.isScrolling) { return }
        this.endPosition = {x: e.screenX, y: e.screenY};
        let delta = {x: this.endPosition.x - this.startPosition.x, y: this.endPosition.y - this.startPosition.y};
        let newValue = this.scrollBarY + delta.y;
        if (newValue < 0) {
          newValue = 0;
        } else if (newValue > this.maxScrollHeight) {
          newValue = this.maxScrollHeight;
        }
        console.log(newValue);
        this.scrollBarY = newValue;

        this.contentY = -(this.childHeight * this.scrollBarY / this.parentHeight);
        this.startPosition = this.endPosition;
      },
      onMouseUpScrollbar(e) {
        this.isScrolling = false;

      },
      onMouseDownScrollbar(e) {
        this.isScrolling = true;
        let {screenX, screenY} = e;
        this.startPosition = {x: screenX, y: screenY};
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