<template>
    <div>
        <h2>reactivity and to refs</h2>
        <!-- <h2>name changes to {{name}}</h2> -->
        <h1>{{firstName}} {{lastName}}</h1>
    </div>
</template>

<script>
// import {  ref} from "vue";
import {reactive, toRefs} from 'vue'
    export default {
        name:"ReactivityAndToRefs",
        setup(){
            // const name = ref('Saikumar')

            // setTimeout(()=>{
            //     name.value = "hello"
            // },1000)

            const state = reactive({
                firstName : 'Saikumar',
                lastName: 'Raghavapuram'
            })
            setTimeout(()=>{
                state.firstName = 'Bruce',
                state.lastName= 'vane'
            },2000)
            // return{
            //     name,
            // },
            return toRefs(state)
        }
    }
</script>

<style scoped>

</style>