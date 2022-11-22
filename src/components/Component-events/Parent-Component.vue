<template>
    <div>
        <button @click="isShow = true">Click to trigger child component</button>
        <ChildComponent v-if="isShow" @close="closeChild"/>
        <h2>{{data}}</h2>
    </div>
</template>

<script>
import ChildComponent from './Child-Component.vue'
    export default {
        name:"ParentComponent",
        components:{
            ChildComponent
        },
        data(){
            return{
                isShow: false,
                data: ""
            }
        },
        methods:{
            closeChild(compData){
                this.isShow = false,
                this.data = compData
            }
        }
        
    }
</script>

<style scoped>

</style>