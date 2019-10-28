<template>
  <div class="col"
       v-bind:class="[`col-${span}`, offset && `offset-${offset}`]"
       v-bind:style="this.colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'Col',
		props: {
			span: [Number, String],
			offset: [Number, String],
		},
		computed: {
			colStyle() {
				const {gutter} = this;
				return {
					paddingLeft: gutter / 2 + 'px',
					paddingRight: gutter / 2 + 'px'
				}
			}
		},
		data() {
			return {
				gutter: {
					type: [Number, String]
				}
			}
		}
	}
</script>

<style scoped lang="less">
  /*
  .col {
    width: 50%;
    $class-prefix: col-;
    @for @n from 1 through 24 {
      &.#{@class-prefix}#{@n} {
        width: (@n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for @n from 1 through 24 {
      &.#{@class-prefix}#{@n} {
        margin-left: (@n / 24) * 100%;
      }
    }
  }
  */

</style>
