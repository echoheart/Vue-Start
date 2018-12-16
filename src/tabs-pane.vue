<template>
    <div class="tabs-pane" v-bind:class="classes" v-if="active" >
        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        name: 'g-tabs-pane',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            name: {
                type: String,
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
            console.log(this.eventBus, 'tabs-item注入的eventBus');
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
    }
</script>

<style lang="scss" scoped>
    .tabs-pane {
        &.active {
            background-color: red;
        }
    }

</style>