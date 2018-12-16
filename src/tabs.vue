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
            // console.log(this);
            console.log(this.eventBus);
            // this.$emit('update:selected', 'handle')
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
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