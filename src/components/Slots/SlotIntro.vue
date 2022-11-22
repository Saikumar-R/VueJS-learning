<template>
    <div class="card">
        <slot>Default Card</slot>
    </div>
</template>

<script>
    export default {
        name:"CardComp"
    }
</script>

<style scoped>
    .card{
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        padding: 16px;
        margin-bottom: 20px;
    }
    .card:hover{
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>