<template>
    <div class="g-table">

    </div>
</template>

<script>
    export default {
        name: "table",
        props: {
            dataSource: {
                type: Array,
                required: true
            },
            columns: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-table {

    }
</style>