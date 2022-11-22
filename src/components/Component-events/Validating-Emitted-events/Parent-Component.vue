<template>
    <div>
        <h2>This is Parent Component</h2>
        <button @click="isShowed=true">Open Child Component</button>
        <ChildComponent v-show="isShowed" @close="closeChild"/>
    </div>
</template>

<script>
import ChildComponent from "../Validating-Emitted-events/Child-Component.vue"
    export default {
        name:"ValidatingEmittedEventFromChild",
        components:{
            ChildComponent
        },
        data(){
            return{
                isShowed:false
            }
        },
        methods:{
            closeChild(name){
                this.isShowed = false
                console.log(name)
            }
        }
    }
</script>

<style scoped>

</style>