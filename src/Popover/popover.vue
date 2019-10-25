<template>
  <div class="popover" v-on:click="onClick" ref="popover">
    <div ref="popoverContent" class="content-wrapper" v-show="this.visible"
         :style="popoverStyle" :class="{[`position-${position}`]: true}">
      <div class="popover-title" v-if="title" v-text="title"></div>
      <slot>{{ this.content }}</slot>
    </div>
    <span ref="trigger" style="display: inline-block;">
        <slot name="trigger"></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Popover',
    props: {
      content: {
        default: 'content'
      },
      title: {
        default: ''
      },
      trigger: {
        validator(value) {
          return value === ['click', 'hover', 'focus'].find((item) => {
            return value === item;
          });
        }
      },
      position: {
        default: 'top',
        validator(value) {
          return value === ['top', 'bottom', 'left', 'right'].find((item) => {
            return value === item;
          });
        }
      }
    },
    data() {
      return {
        visible: false,
        popoverStyle: {}
      }
    },
    methods: {
      portal() {
        if (this.visible === false) return;
        const {popoverContent} = this.$refs;
        document.body.appendChild(popoverContent);
        this.$nextTick(() => {
          this.getContentPosition();
        });
        // this.getContentPosition();
        // setTimeout(() => {
        //   this.getContentPosition();
        // }, 0)
      },
      getContentPosition() {
        let {width, height, left, top} = this.$refs.trigger.getBoundingClientRect();
        /*hack技巧出发dom渲染更新?*/
        this.visible = false;
        const height2 = this.$refs.popoverContent.getBoundingClientRect().height;
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const positions = {
          top: {
            left: left + scrollX,
            top: top + scrollY
          },
          bottom: {
            left: left + scrollX,
            top: top + scrollY + height
          },
          left: {
            left: left + scrollX,
            top: top + scrollY + (height - height2) / 2
          },
          right: {
            left: left + scrollX + width,
            top: top + scrollY + (height - height2) / 2
          }
        };
        left = positions[this.position].left + 'px';
        top = positions[this.position].top + 'px';
        /*hack技巧出发dom渲染更新?*/
        this.visible = true;
        Object.assign(this.popoverStyle, {
          left,
          top
        })
      },
      onClickDocument(e) {
        const {popoverContent} = this.$refs;
        if (popoverContent === e.target ||
          popoverContent.contains(e.target)) return false;
        this.close()
      },
      listenToDocument() {
        console.log('增加document监听器');
        document.addEventListener('click', this.onClickDocument)
      },
      open() {
        this.visible = true;
        this.portal();
        /*$nextTick异步处理此处有问题*/
        setTimeout(() => {
          this.listenToDocument();
        }, 0)
      },
      close() {
        this.visible = false;
        document.removeEventListener('click', this.onClickDocument);
        console.log('删除监听器并且关闭');
      },
      onClick(e) {
        if (this.$refs.trigger.contains(e.target)) {
          this.visible === true ? this.close() : this.open();
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    /*英文换行*/
    word-break: break-all;
    background: #fff;
    filter: drop-shadow(0 0 3px rgba(0, 1px, 0, 0.5));
    border: 1px solid #999;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    z-index: 2000;
    padding: 12px;
    border-radius: 4px;
    min-width: 158px;
    width: 200px;
    transition: all 300ms linear;

    &::after, &::before {
      width: 0;
      height: 0;
      border: 10px solid transparent;
      content: '';
      position: absolute;

    }

    &.position-top {
      margin-top: -10px;
      transform: translateY(-100%);

      &::after {
        top: calc(100% - 2px);
        left: 10px;
        border-top-color: #fff;
      }

      &::before {
        top: calc(100%);
        left: 10px;
        border-top-color: #999;
      }
    }

    &.position-bottom {
      margin-top: 10px;

      &::after {
        bottom: calc(100% - 2px);
        left: 10px;
        border-bottom-color: #fff;
      }

      &::before {
        bottom: calc(100%);
        left: 10px;
        border-bottom-color: #999;
      }
    }

    &.position-left {
      transform: translate(-100%);
      margin-left: -10px;

      &::after, &::before {
        left: 100%;
        border-left-color: #999;
        top: 50%;
        transform: translateY(-50%)
      }

      &::after {
        left: calc(100% - 1px);
        border-left-color: #fff;
      }

    }

    &.position-right {
      margin-left: 10px;
      &::after, &::before {
        right: 100%;
        border-right-color: #999;
        top: 50%;
        transform: translateY(-50%)
      }
      &::after {
        right: calc(100% - 1px);
        border-right-color: #fff;
      }
      &::before {
        right: 100%;
      }
    }


    .popover-title {
      color: #303133;
      font-size: 16px;
      line-height: 1;
      margin-bottom: 12px;
    }
  }
</style>
