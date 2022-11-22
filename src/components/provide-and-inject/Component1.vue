<template>
    <div>
        <h2>Component 1</h2>
        <ComponentLevel2/>
    </div>
</template>

<script>
import ComponentLevel2 from './Component2.vue'
    export default {
        name:"ComponentLevel1",
        components:{
            ComponentLevel2
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>