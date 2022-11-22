<template>
    <div>
        <h2>This is Child Component</h2>
        <input type="text" v-model="name">
        <button @click="$emit('close', name)">Close Child Component</button>
    </div>
</template>

<script>
    export default {
        name:"ChildComponent",
        data(){
            return{
                name: ""
            }
        },
        emits:{
            close: (name) =>{
                if(!name){
                    return false
                }else{
                    return true
                }
            }
        }
    }
</script>

<style scoped>

</style>