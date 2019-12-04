<template>
  <transition name="fade">
    <div class="g-carousel-item" v-if="visible" :class="{reverse}">
      <slot/>
    </div>
  </transition>

</template>

<script>
	export default {
		name: 'CarouselItem',
		props: {
			name: {
				type: String,
				required: true
			},
		},
		data() {
			return {
				currentSelected: {
					type: String,
				},
				reverse: {
					type: Boolean,
					default: false
				}
			}
		},
		computed: {
			visible() {
				return this.name === this.currentSelected;
			}
		}
	}
</script>

<style lang="less" scoped>
  .g-carousel-item {
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }

  .fade-enter {
    transform: translateX(100%) scale(0.5);
    opacity: 0;
    position: absolute;
  }

  .fade-enter.reverse {
    transform: translateX(-100%) scale(0.5);
    opacity: 0;
    position: absolute;
  }

  .fade-leave-to {
    transform: translateX(-100%) scale(0.5);
    position: absolute;
    opacity: 0
  }

  .fade-leave-to.reverse {
    transform: translateX(100%) scale(0.5);
    position: absolute;
    opacity: 0;
  }
</style>
