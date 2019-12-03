<template>
  <div class="g-carousel">
    <div class="g-carousel-window" ref="window">
      <slot/>
    </div>

    <div class="dots">
      <span v-on:click="onClickPrev">
        <Icon name="left"/>
      </span>
      <span
        v-for="n in childrenLength"
        v-bind:class="{active: selectedIndex === n - 1}"
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
        default: 2
      }
		},
		data() {
			return {
				childrenLength: 0,
				lastSelectedIndex: undefined,
				timerId: undefined,
				startPoint: undefined,
				endPoint: undefined,
        currentSelected: this.initSelected
			}
		},
		mounted() {
			this.onUpdateChildren();
			this.autoPlay();
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
        const names = this.names;
        /** 模拟setInterval*/
        const play = () => {
					let newIndex = this.currentSelectedIndex + 1;
        	if (newIndex === names.length) {
						newIndex = 0;
          }
        	if (newIndex === -1) {
						newIndex = names.length - 1;
          }
        	this.currentSelected = names[newIndex];
        	console.log(newIndex, 'newIndex');
					this.onUpdateChildren();
          setTimeout(play, 1000 * this.interval)
        };
        setTimeout(() => {
					play()
        }, this.interval * 1000);
      },
			onClickPrev() {
				this.select(this.selectedIndex - 1)
			},
			onClickNext() {
				this.select(this.selectedIndex + 1)
			},
			getCurrentSelected() {
				const first = this.children[0];
				return this.currentSelected || first.name;
			},
			onUpdateChildren() {
				const currentSelected = this.getCurrentSelected();
				this.children.forEach((child) => {
					child.currentSelected = currentSelected;
          const preSelectedIndex = this.names.indexOf(child.name);
          child.reverse = this.currentSelectedIndex < preSelectedIndex ? false : true;
					// console.log(currentSelectedIndex, 'currentSelectedIndex');
					// console.log(preSelectedIndex, 'preSelectedIndex');
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
