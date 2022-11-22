<template>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
</template>

<script>
    export default {
        name:"InputComp",
        props:{
            modelValue:String
        }
    }
</script>

<style scoped>
    input[type='text']{
        display: block;
        width: 350px;
        justify-content: start;
        border: 1px solid wheat;
    }
</style>