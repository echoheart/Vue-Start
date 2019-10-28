<template>
  <div class="tabs-item" @click="emitUpdateSelected" v-bind:class="classes">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'TabItem',
		inject: ['eventBus'],
		data() {
			return {
				active: false
			}
		},
		props: {
			disabled: {
				type: Boolean,
				default: false
			},
			name: {
				type: String | Number,
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
			});
		},
    mounted() {
      // console.log(this)
    },
		methods: {
			emitUpdateSelected() {
				this.eventBus.$emit('update-value', this.name);
			}
		}
	}
</script>

<style lang="less" scoped>
  @blue: blue;
  .tabs-item {
    flex-shrink: 0;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    border-bottom: 1px solid #ddd;
    &.active {
      color: @blue;
      font-weight: bold;
      background-color: #ddd;
    }
  }

</style>
