<template>
    <div class="g-nav-item"
         v-bind:class="{selected}"
         v-on:click="addSelect"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GNavItem",
        inject: ['root'],
        props: {
            name: {
                type: String,
                required: true
            },

        },
        created() {
            this.root.addItem(this);
        },
        methods: {
            addSelect() {
                if (this.$parent.updateNamePath) {
                    this.$parent.updateNamePath(false)
                } else {
                    this.root.namePath = []
                }
                this.$emit('add:select', this.name);
            }
        },
        data () {
            return {
                selected: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-nav-item {
        padding: 20px 30px;
        cursor: pointer;
        position: relative;
    }
    .selected {
        &::after {
            content: '';
            position: absolute;
            /*top: 100%;*/
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: blue;
        }
    }
    .g-sub-nav .g-nav-item {
        &.selected {
            background: #ddd;
            &::after {
                display: none;
            }
        }
    }
</style>