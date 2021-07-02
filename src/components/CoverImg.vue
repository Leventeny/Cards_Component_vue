<template>
    <div class="cover">
        <img src="../assets/living-low_reso.jpg" alt="Living room" 
        srcset="
        ../assets/living-high_reso.jpg 2x,
        ../assets/living-low_reso.jpg 1x
        ">
    </div>
</template>

<script>
    export default {
        name: 'CoverImg'
    }
</script>

<style scoped>
    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
</style>