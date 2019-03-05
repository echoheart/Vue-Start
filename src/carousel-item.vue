<template>
    <transition name="fade">
        <div class="g-carousel-item" v-if="visible">
            <slot></slot>
        </div>
    </transition>

</template>

<script>
    export default {
        name: 'g-carousel-item',
        props: {
            // visible: {
            //     type: Boolean,
            //     default: false
            // }
            name: {
                type: String,
                required: true
            },

        },
        data() {
            return {
                // visible: false
                selected: {
                    type: String,
                }
            }
        },
        computed: {
            visible() {
                return this.name === this.selected;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-carousel-item {
        display: inline-block;
        top: 0;
        left: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter {
        transform: translateX(100%);

    }
    .fade-leave-to {
        transform: translateX(-100%);
        position: absolute;
    }
</style>