<template>
    <div>
        <h2>Custom events and composition API</h2>
        <input type="text" v-model="val">
        <button @click="sendEvent">Click here</button>
    </div>
</template>

<script>
import {computed, ref} from 'vue'
    export default {
        name:"CustomEventsAndCompositionApi",
        props:['fName,lName'],
        setup(props,context){
            const val = ref('')

            const fullname = computed(()=>{
                return `${props.fName}`
            });
            const sendEvent = ()=>{
                context.emit('callEvent', val.value)
                //alert();
            }
            return{
                sendEvent,
                val,
                fullname
            }
        }
    }
</script>

<style scoped>

</style>