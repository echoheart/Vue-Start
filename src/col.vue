<template>
    <div class="col"
         v-bind:class="[`col-${span}`, offset && `offset-${offset}`]"
         v-bind:style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}"
    >
        <div class="inner" style="background: grey; height: 100px; border: 1px solid red">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            span: [Number, String],
            offset: [Number, String],
            // gutter: {
            //     type: [Number, String],
            // }
        },
        data () {
            return {
                gutter: {
                    type: [Number, String]
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        /*background: grey;*/
        width: 50%;
        /*border: 1px solid red;*/
        height: 100px;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>