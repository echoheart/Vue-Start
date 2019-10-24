<template>
  <div class="row" v-bind:style="this.rowStyle">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'Row',
		props: {
			gutter: {
				type: [Number, String],
			}
		},
		computed: {
			rowStyle() {
				return {
					marginLeft: -this.gutter/2 + 'px',
					marginRight: -this.gutter / 2 + 'px'
				}
			}
		},
		mounted() {
			this.$children.map(function (vm) {
				vm.gutter = this.gutter;
			}.bind(this));
		}
	}
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
  }
</style>
