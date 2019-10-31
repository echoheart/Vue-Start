<template>
    <svg class="g-icon" v-on:click="$emit('click', $event)">
        <use v-bind:xlink:href="`#pure-${name}`"></use>
    </svg>
</template>

<script>
    import './svg';
    export default {
        name: 'Icon',
        props: {
            name: String
        }
    }
</script>

<style lang="less">
    .g-icon {
        height: 1em;
        width: 1em;
    }
</style>
