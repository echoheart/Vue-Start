<template>
  <div class="tabs">
    <TabHeader>
      <div v-for="item in labelsNames" class="tab-item-wrapper">
        <TabItem :name="item.name">{{item.label}}</TabItem>
      </div>
    </TabHeader>
    <TabBody>
      <slot></slot>
    </TabBody>
  </div>
</template>

<script>
	import Vue from 'vue';
	import TabHeader from '../TabHeader/tab-header';
	import TabItem from '../TabItem/tab-item';
	import TabBody from '../TabBody/tab-body';
	export default {
		name: 'Tab',
    components: {TabHeader, TabItem, TabBody},
		props: {
      value: {
				type: [String, Number],
				required: true
      },
			direction: {
				type: String,
				default: 'horizontal',
				validator(value) {
					return ['horizontal', 'vertical'].indexOf(value) > -1;
				}
			}
		},
		data() {
			return {
				eventBus: new Vue(),
        labelsNames: [],
			}
		},
    methods: {
			getLabelsNames() {
				const labelsNames = [];
				const tabBody = this.$children[1];
				const tabPanes = tabBody.$children;
				for (let i = 0; i < tabPanes.length; i++) {
					if (tabPanes[i].label === undefined || tabPanes[i].name === undefined) {
						console.warn('请检查TabPane的label属性值');
					}
					labelsNames.push({label:tabPanes[i].label, name:tabPanes[i].name });
        }
				return labelsNames;
      }
    },
		created() {
      this.eventBus.$on('update-value',(name) => {
      	this.$emit('click', name);
			})
		},
		mounted() {
      this.labelsNames = this.getLabelsNames();
      /*v-for渲染的子组件生命周期和父组件生命周期顺序不符合预期*/
      this.$nextTick(() => {
				this.eventBus.$emit('update-value', this.value);
      });
		},
		provide() {
			return {
				eventBus: this.eventBus
			}
		}
	}
</script>

<style lang="scss">
  .tabs {
    .tab-item-wrapper {
      display: flex;
      /*padding: 0 1.5em;*/
      height: 100%;
    }
  }

</style>
