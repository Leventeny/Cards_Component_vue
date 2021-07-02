<template>
    <p>
        {{ lorem }}    
    </p>
</template>

<script>
    export default {
        name: 'Body',
        props: {
            lorem: String
        }
    }
</script>

<style scoped>
    p {
        padding: 10px;
        margin: 0;
    }
</style>