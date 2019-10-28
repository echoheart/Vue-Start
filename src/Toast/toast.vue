<template>
  <div class="wrapper-animation" v-bind:class="toastClasses">
    <div class="toast" ref="toast">
      <slot></slot>
      <div class="line" ref="line"></div>
      <span class="close"
            v-if="closeButton"
            v-on:click="onClickClose"
      >
          {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Toast',
    data() {
    	return {
				autoClose: true,
				autoCloseDelay: 2,
				closeButton: {
					text: '关闭',
					callback: undefined
				},
				position: 'top'
      }
    },
    mounted() {
    	this.updateStyles();
      this.onAutoClose();
    },
    computed: {
      toastClasses() {
        return {[`position-${this.position}`]: true};
      }
    },
    methods: {
			onAutoClose () {
				if (this.autoClose) {
					setTimeout(() => {
						this.close();
					}, this.autoCloseDelay * 1000)
				}
			},
			updateStyles () {
				this.$nextTick(() => {
					this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
			},
      close() {
        this.$el.remove();
        this.$emit('close');
        this.$destroy();
      },
      onClickClose() {
        this.close();
        if (this.closeButton && typeof(this.closeButton.callback) === 'function') {
            this.closeButton.callback();
        }
      }
    }
  }
</script>
<style lang="less">
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes bottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes top {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  .wrapper-animation {
    position: fixed;
    animation: fade-in 0.5s;
    left: 50%;
    z-index: 2000;

    &.position-top {
      top: 16px;
      transform: translateX(-50%);
      .toast {
        animation: top 0.5s;
      }
    }

    &.position-bottom {
      bottom: 0;
      transform: translateX(-50%);
      .toast {
        animation: bottom 0.5s;
      }
    }

    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .toast {
      font-size: 14px;
      line-height: 1.8;
      min-height: 40px;
      display: flex;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.75);
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
      color: #FFF;
      padding: 0 14px;
      border-radius: 4px;

      .close {
        padding-left: 16px;
        flex-shrink: 0;
        cursor: pointer;
      }
    }
  }

</style>
