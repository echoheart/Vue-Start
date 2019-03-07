<template>
    <div class="g-carousel">
       <div class="g-carousel-window" ref="window">
           <slot>

           </slot>
       </div>
        <div class="dots">
            <span v-for="n in childrenLength"
                  v-bind:class="{active: selectedIndex === n - 1}"
                  v-on:click="select(n-1)"
            >
                {{ n }}
            </span>
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
        data() {
            return {
                childrenLength: 0,
                lastSelectedIndex: undefined
            }
        },
        mounted() {

            this.onUpdateChildren();
            this.playAutomatically();
            this.childrenLength = this.names.length;
        },
        updated() {
            this.onUpdateChildren()
        },
        computed: {
            names () {
                return this.$children.map((vm) => {
                    return vm.name;
                })
            },
            selectedIndex () {
                return this.names.indexOf(this.selected) || 0;
            }
        },
        methods: {
            select(index) {
                this.lastSelected = this.selected;
                this.$emit('update:selected', this.names[index])
            },
            playAutomatically() {



                const run = () => {
                    let index = this.names.indexOf(this.getDefaultSelected());
                    if (index === this.names.length) {
                        index = 0;
                    }
                    let newIndex = index - 1;
                    if (newIndex === -1) {
                        newIndex = this.names.length - 1;
                    }
                    if (newIndex === this.names.length) {
                        newIndex = 0;
                    }
                    this.select(newIndex);
                    setTimeout(run, 6000)
                };
                run();

            },
            getDefaultSelected() {
                const first = this.$children[0];
                return this.selected || first.name;
            },
            onUpdateChildren() {
                const selected = this.getDefaultSelected();
               this.$children.forEach((vm) => {

                   const oldIndex = this.names.indexOf(this.lastSelected);
                   const newIndex = this.names.indexOf(selected);
                   vm.reverse = newIndex - oldIndex <= 0;
                   this.$nextTick(() => {
                       vm.selected = selected;
                   });

               })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-carousel {
        /*border: 1px solid black;*/
        /*display: inline-block;*/
        position: relative;
        overflow: hidden;
        > .dots{
            & .active {
                color: red;
            }
        }
    }
</style>