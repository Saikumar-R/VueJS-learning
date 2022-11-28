<template>
    <div>
        <h2>Content is from Tab C</h2>
        <input type="text" v-model="name">
    </div>
</template>

<script>
    export default {
        name:"TabCComp",
        data(){
            return{
                name:""
            }
        }
    }
</script>

<style scoped>

</style>