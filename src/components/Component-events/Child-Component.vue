<template>
    <div>
        <h2>This is child Component</h2>
        <button @click="$emit('close','this data is getting from child component')">Close Child Component</button>
    </div>
</template>

<script>
    export default {
        name:"ChildComponent",
        data(){
            return{

            }
        },
        emits:['close']
    }
</script>

<style scoped>

</style>