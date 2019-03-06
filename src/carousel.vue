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
            },
            autoPlay: {
                type: Boolean,
                default: true
            }
        },
        mounted() {
            // console.log(this.$children);
            // console.log(this.$refs);
            // this.$children[0].visible = true;

            // setTimeout(() => {
                // this.$children[0].visible = false;
                // this.$children[1].visible = true;

            // }, 2500)
            this.onUpdateChildren();
            this.playAutomatically();
        },
        updated() {
            this.onUpdateChildren()
        },
        methods: {
            playAutomatically() {
                const names = this.$children.map((vm) => {
                    return vm.name;
                });
                console.log(names);
                let index = names.indexOf(this.getDefaultSelected());

                const run = () => {
                    if (index === names.length) {
                        index = 0;
                    }
                    this.$emit('update:selected', names[index]);
                    index++;
                    setTimeout(run, 3000)
                };
                // setInterval(() => {
                //
                // },2500)
                run();
            },
            getDefaultSelected() {
                const first = this.$children[0];
                return this.selected || first.name;
            },
            onUpdateChildren() {
                const selected = this.getDefaultSelected();
               this.$children.forEach((vm) => {
                   const names = this.$children.map((vm) => {return vm.name});
                   const oldIndex = names.indexOf(vm.selected);
                   const newIndex = names.indexOf(selected);
                    vm.selected = selected;
                    vm.reverse = newIndex - oldIndex <= 0;
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