<template>
  <div class="g-carousel">
    <div class="g-carousel-window" ref="window"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
         @touchstart="onTouchStart"
         @touchmove="onTouchMove"
         @touchend="onTouchEnd"
    >
      <slot/>
    </div>

    <div class="dots">
      <span v-on:click="onClickPrev">
        <Icon name="left"/>
      </span>
      <span
        v-for="n in childrenLength"
        v-bind:class="{active: currentSelectedIndex === n - 1}"
        v-on:click="select(n-1)"
      >
        {{ n }}
      </span>

      <span v-on:click="onClickNext">
        <Icon name="right"/>
      </span>
    </div>

  </div>
</template>

<script>
	import Icon from '../../Icon/icon';
	export default {
		name: 'Carousel',
		components: {
			Icon
		},
		props: {
			initSelected: {
				type: String | Number,
				default: () => {
					return undefined;
				}
			},
			isAutoPlay: {
				type: Boolean,
				default: true
			},
			interval: {
				type: Number,
        default: 5
      }
		},
		data() {
			return {
				childrenLength: 0,
				lastSelectedIndex: undefined,
				timerId: undefined,
				touchStartPoint: undefined,
				touchEndPoint: undefined,
        currentSelected: this.initSelected,
			}
		},
		mounted() {
			this.onUpdateChildren();
			this.autoPlay();
			this.childrenLength = this.children.length;
		},
    beforeDestroy() {

		},
		computed: {
			names() {
				return this.$children.filter((vm) => {
					if (vm.$options.name === 'CarouselItem') {
						return true;
          }
				}).map((vm) => {
					return vm.name;
        })
			},
			children() {
				return this.$children.filter((child) => {
					if (child.$options.name === 'CarouselItem') {
						return true;
					}
        }).map((child) => {
        	return child;
        })
      },
			currentSelectedIndex() {
				let currentSelectedIndex = this.names.indexOf(this.currentSelected);
				return currentSelectedIndex === -1 ? 0 : currentSelectedIndex;
			}
		},
		methods: {
			autoPlay() {
				if (!this.isAutoPlay) return;
				if (this.timerId) return;
        const names = this.names;
        /** 模拟setInterval*/
        const play = () => {
					let newIndex = this.currentSelectedIndex + 1;
        	this.select(newIndex);
          this.timerId = setTimeout(play, this.interval * 1000)
        };
        this.timerId =  setTimeout(play, this.interval * 1000);
      },
      onTouchStart(e) {
        this.pause();
        const {clientX: x1, clientY: y1} = e.changedTouches[0];
        this.touchStartPoint = [x1, y1];
      },
      onTouchMove() {
      },
      onTouchEnd(e) {

        const {clientX: x2, clientY: y2} = e.changedTouches[0];
        this.touchEndPoint = [x2, y2];
        const [x1, y1] = this.touchStartPoint;
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const deltaY = Math.abs(y2 - y1);
        const rate = 2;
        if (distance / deltaY > rate) {
          if (x2 > x1) {
            this.select(this.currentSelectedIndex + 1);
          } else {
            this.select(this.currentSelectedIndex - 1);
          }
        }
        this.autoPlay()
      },
      onMouseEnter() {
        this.pause();
      },
      onMouseLeave() {
        this.autoPlay()
      },
      pause() {
			  window.clearTimeout(this.timerId);
			  this.timerId = null;
      },
			onClickPrev() {
        const newIndex = this.currentSelectedIndex - 1;
				// this.select(newIndex < 0 ? this.childrenLength - 1 : newIndex)
        this.select(newIndex)
			},
			onClickNext() {
        const newIndex = this.currentSelectedIndex + 1;
				// this.select(newIndex > this.childrenLength - 1 ? 0 : newIndex)
        this.select(newIndex)
			},
      select(newIndex) {
			  if (newIndex < 0) {
          newIndex = this.childrenLength - 1;
        } else if (newIndex > this.childrenLength - 1){
          newIndex = 0;
        }
        /**取上一次的选中值的index 为了计算动画方向  */
        this.lastSelectedIndex = this.currentSelectedIndex;
        this.currentSelected = this.names[newIndex];
        this.onUpdateChildren();
      },
			getCurrentSelected() {
				const first = this.children[0];
				return this.currentSelected || first.name;
			},
			onUpdateChildren() {
				const currentSelected = this.getCurrentSelected();
				this.children.forEach((child) => {

          child.reverse = this.currentSelectedIndex < this.lastSelectedIndex;
          /**todo 由于vue的视图是异步更新的, 导致了虽然更新了子元素的reverse,
           *  但是实际dom中的reverse类还是没有更新
           *  所以解决办法就是异步的更新visible, 也就是异步的触发动画
           * */
          this.$nextTick(() => {
            child.currentSelected = currentSelected;
          });

				})
			}
		}
	}
</script>

<style lang="less" scoped>
  .g-carousel {
    position: relative;
    overflow: hidden;

    > .dots {
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        width: 1.2em;
        height: 1.2em;
        background-color: #ddd;
        border-radius: 50%;
        margin: 6px 6px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
      }

      & .active {
        color: #FFF;
        background-color: #000;
      }
    }
  }
</style>
