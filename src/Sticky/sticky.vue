<template>
    <div class="sticky" ref="wrapper" v-bind:class="{active: classes}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sticky",
        data() {
            return {
                sticky: false
            }
        },
        computed: {
            classes() {
                return this.sticky;
            }
        },
        mounted() {
            document.addEventListener('scroll', () => {
                this.sticky = this.getTop() < window.scrollY;
            })
        },
        methods: {
            getTop() {
                const { top } = this.$refs.wrapper.getBoundingClientRect();
                const scrollY = window.scrollY;
                console.log(top, scrollY);
                return top + scrollY
            }
        }
    }
</script>

<style scoped lang="scss">
    .sticky {
        &.active {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
        }
    }
</style>
