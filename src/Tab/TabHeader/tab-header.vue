<template>
  <div class="tabs-header">
    <slot></slot>
<!--    <div class="line" ref="line"></div>-->
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

<style scoped lang="scss">
  $tab-height: 40px;
  $blue: blue;
  .tabs-header {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    > .actions-wrapper {
      margin-left: auto;
    }
  }

</style>
