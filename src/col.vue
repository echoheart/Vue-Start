<template>
    <div class="col" v-bind:class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            span: [Number, String],
        }
    }
</script>

<style scoped lang="scss">
    .col {
        background: grey;
        width: 50%;
        border: 1px solid red;
        height: 100px;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>