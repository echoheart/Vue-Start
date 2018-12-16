<template>
    <div class="tabs-item" @click="xxx" v-bind:class="classes">
        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        name: 'g-tabs-item',
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
            console.log(this.eventBus, 'tabs-item注入的eventBus');
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            background-color: red;
        }
    }

</style>