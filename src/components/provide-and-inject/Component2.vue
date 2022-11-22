<template>
    <div>
        <h2>Component 2</h2>
        <ComponentLevel3/>
    </div>
</template>

<script>
import ComponentLevel3 from './Component3.vue'

    export default {
        name:"ComponentLevel2",
        components:{
            ComponentLevel3
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>