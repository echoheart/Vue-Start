<template>
  <div class="popover" v-on:click="onClick" ref="popover">
    <div ref="popoverContent" class="content-wrapper" v-show="this.visible" :style="popoverStyle">
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
      }
    },
		data() {
			return {
				visible: false,
				popoverStyle: {
					border: '1px solid green',
					position: 'absolute',
        }
			}
		},
		methods: {
			portal() {
				if (this.visible === false) return;
				this.getContentPosition();
        const {popoverContent} = this.$refs;
        document.body.appendChild(popoverContent);
      },
			getContentPosition() {
					let {width, height, left, top} = this.$refs.trigger.getBoundingClientRect();
					console.log(width, height, left, top);
					const scrollX = window.scrollX;
					const scrollY = window.scrollY;
				  left = `${left + scrollX}px`;
				  top = `${top + scrollY}px`;
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
    border: 1px solid green;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>
