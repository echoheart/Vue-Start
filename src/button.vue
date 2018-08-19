<template>
    <g-button></g-button>
    {{message}}
</template>
<script>
    export default {
        name: '',
        template: `
        <button class="g-button">hi</buttonclass>
        `
    }
</script>
<style lang="scss">

    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--button-radius);
        background: var(--button-bg);
        &:hover {
            border-color: var(--button-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>
