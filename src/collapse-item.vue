<template>
    <div class="collapse-item" v-on:click="toggle">
        <div class="title">
            {{ title }}
        </div>

        <div class="content" v-show="isOpen">
            <slot></slot>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'g-collapse-item',
        props: {
            title: {
                type: String,
                require: true
            },
        },
        data() {
            return {
                isOpen: false
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (vm) => {
                console.log(this);
                if (vm !== this) {
                    this.isOpen = false;
                }
            })
            // this.eventBus.$on('update:selected', function (vm) {
            //     console.log(this);
            //     if (vm !== this) {
            //         this.isOpen = false;
            //     }
            // })
        },

        methods: {
            toggle() {
                if (this.isOpen) {
                    this.isOpen = false
                } else {
                    this.isOpen = true;
                    this.eventBus && this.eventBus.$emit('update:selected', this)
                }
            }
        },

    }

</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse-item {
        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding-left: 20px;
        }
        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
    }
</style>