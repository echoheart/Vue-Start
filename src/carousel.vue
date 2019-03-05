<template>
    <div class="g-carousel">
       <div class="g-carousel-window" ref="window">
           <slot>

           </slot>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'g-carousel',
        props: {
            selected: {
                type: String,
                default: () => {
                    return undefined;
                }
            }
        },
        mounted() {
            // console.log(this.$children);
            // console.log(this.$refs);
            // this.$children[0].visible = true;

            // setTimeout(() => {
                // this.$children[0].visible = false;
                // this.$children[1].visible = true;
            this.onUpdateChildren()
            // }, 2500)
        },
        updated() {
            this.onUpdateChildren()
        },
        methods: {
            onUpdateChildren() {
                const first = this.$children[0];
                const selected = this.selected || first.name;
               this.$children.forEach((vm) => {
                    vm.selected = selected;
               })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-carousel {
        border: 1px solid black;
        display: inline-block;
        position: relative;
        overflow: hidden;
    }
</style>