<template>
    <div class="tabs">
        <slot>

        </slot>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: 'g-tabs',
        props: {
            selected: {
                type: String,
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
                eventBus: new Vue()
            }
        },
        created() {
            console.log(this.eventBus);
        },
        mounted() {
            console.log(this.$children);
            this.$children.forEach((vm) => {
                console.log(vm.$options.name);
                if (vm.$options.name === 'g-tabs-header') {
                    vm.$children.forEach((item) => {
                        if (item.$options.name === 'g-tabs-item' && item.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, item)
                        }
                        console.log(item.$options.name);
                    })
                }
            });

        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        }
    }
</script>

<style>
    .tabs {}

</style>