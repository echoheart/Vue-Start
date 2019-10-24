<template>
  <div class="tabs-pane" v-bind:class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'TabPane',
		inject: ['eventBus'],
		data() {
			return {
				active: false
			}
		},
		props: {
			name: {
				type: [String, Number],
				required: true
			},
      label: {
				type: [String, Number],
				required: true
      }
		},
		computed: {
			classes() {
				return {
					active: this.active
				}
			}
		},
		created() {
			this.eventBus.$on('update-value', (name) => {
				this.active = name === this.name;
			})
		},
	}
</script>

<style lang="scss" scoped>
  .tabs-pane {
    margin-top: 20px;

  }

</style>
