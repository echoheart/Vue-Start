<template>
    <svg class="g-icon">
        <use v-bind:xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        props: ['name']
    }
</script>

<style lang="scss">
    .g-icon {
        height: 1em;
        width: 1em;
    }
</style>