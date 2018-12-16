<template>
    <div class="tabs-item">
        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        name: 'g-tabs-item',
        props: {
            disabled: {
                type: String,
                default: false
            }
        }
    }
</script>

<style>
    .tabs-item {

    }

</style>