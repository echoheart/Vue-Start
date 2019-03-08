<template>
    <div class="g-nav" v-bind:class="{vertical:vertical}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GNav",
        provide () {
          return {
              root: this,
              vertical: this.vertical
          }
        },
        props: {
            selected: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            multiple: {
                type: Boolean,
                default: false
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                items: [],
                namePath: []
            }
        },
        computed: {

        },
        methods: {
            addItem(vm) {
                this.items.push(vm)
            },
            updateChildren() {
                this.items.forEach((vm) => {
                    if (this.selected.indexOf(vm.name) > -1) {
                        vm.selected = true;
                    } else {
                        vm.selected = false;
                    }
                })
            },
            listenToChildren() {
                this.items.forEach((vm) => {
                    vm.$on('add:select', (name) => {
                        const copySelected = JSON.parse(JSON.stringify(this.selected));
                        let index = copySelected.indexOf(name);
                        if (index > -1) {
                            copySelected.splice(index,1)
                        } else {
                            copySelected.push(name);
                        }
                        if (this.multiple) {
                            this.$emit('update:selected', copySelected)
                        } else {
                            this.$emit('update:selected', [name]);
                        }

                    })
                })
            }
        },
        updated() {
            this.updateChildren();
        },
        mounted() {
            this.listenToChildren();
            this.updateChildren();
        }
    }
</script>

<style scoped lang="scss">
    .g-nav {
        display: flex;
        border-bottom: 1px solid #ddd;
        &.vertical {
            flex-direction: column;
        }
    }
</style>