<template>
    <div class="card-titles">
        <h3>{{ cardData.title }}</h3>
        <h5>{{ cardData.subTitle }}</h5> 
    </div>
</template>

<script>
    export default {
        name: 'Titles',
        props: {
            cardData: Object
        }
    }
</script>

<style scoped>
    h3, h5 {
        margin: 0;
        padding: 10px;
    }
</style>