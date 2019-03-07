<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>


<script>
    import Vue from 'vue'

    export default {
        name: 'g-collapse',
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array,
            },
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected);
            // console.log(this.selected)
            //    添加元素
            this.eventBus.$on('update:addSelected', (name) => {
                let selectedCopy = this.selected.slice();
                // console.log(this.selected);
                if (this.single) {
                    selectedCopy = [name];
                } else {
                    selectedCopy.push(name);
                }

                // console.log(name, this.selected)
                //    通知组件外部更新selected数组
                this.$emit('update:selected', selectedCopy);

                //
                this.eventBus.$emit('update:selected', selectedCopy)
            });

            //    移除元素

            this.eventBus.$on('update:removeSelected', (name) => {
                let selectedCopy = this.selected.slice();
                const index = selectedCopy.indexOf(name);
                // console.log(index);
                if (this.single) {
                    selectedCopy = []
                } else {
                    selectedCopy.splice(index, 1);
                }

                console.log(this.selected);
                this.$emit('update:selected', selectedCopy);
                this.eventBus.$emit('update:selected', selectedCopy);
            })

        }
    }

</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>