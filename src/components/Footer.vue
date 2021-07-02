<template>
    <p>
        {{ footerText }}
    </p>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            footerText: String
        }
    }
</script>

<style scoped>
    p {
        text-align: center;
        padding: 10px;
        border-top: 1px solid grey;
        margin: 0;
        position: relative;
    }
</style>