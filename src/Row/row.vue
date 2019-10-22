<template>
    <div class="row" v-bind:style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Row',
        props: {
            gutter: {
                type: [Number, String],
            }
        },
        created () {
            console.log('created');
        },
        mounted () {
            console.log('mounted');
            console.log(this.$children);
            this.$children.map(function (vm) {
                vm.gutter = this.gutter;
            }.bind(this));
            console.log(this.$children.gutter);
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>
