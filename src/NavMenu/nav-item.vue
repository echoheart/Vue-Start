<template>
    <div class="g-nav-item"
         v-bind:class="{selected,vertical}"
         v-on:click="addSelect"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GNavItem",
        inject: ['root', 'vertical'],
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
        &:hover {
            color:#1890ff;
        }
    }
    .selected {
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #1890ff;
        }
    }
    .vertical.selected {
        &::after {
            content: '';
            position: absolute;
            /*top: 100%;*/
            bottom: 0;
            left: 100%;
            width: 2px;
            height: 100%;
            background-color: #1890ff;
        }
    }
    .g-sub-nav .g-nav-item {
        &.selected {
            background: #e6f7ff;
            &::after {
                display: none;
            }
        }
    }
</style>