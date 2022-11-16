<template>
    <div>
        <h2 v-bind="$attrs">{{title}} Likes - {{likes}} {{isCompleted ? "Yes" : "No"}} </h2>
    </div>
</template>

<script>
    export default {
        name:"NonPropAttributes",
        data(){
            return{
                
            }
        },
        props:{
            title: String,
            likes: Number,
            isCompleted: Boolean
        },
        inheritAttrs: false
    }
</script>

<style scoped>

</style>