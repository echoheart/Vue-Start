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
    }
    .selected {
        background-color: red;
    }
</style>