<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'TabHeader',
		inject: ['eventBus'],
		mounted() {

		}
	}
</script>

<style scoped lang="less">
  @tab-height: 40px;
  @blue: blue;
  .tabs-header {
    transition: all 300ms linear;
    display: flex;
    height: @tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;


    > .actions-wrapper {
      margin-left: auto;
    }
  }

</style>
