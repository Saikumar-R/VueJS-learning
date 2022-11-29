<template>
    <div>
        <h2>Replacing Methods</h2>
        <h1>{{count}}</h1>
        <button @click="increamentCount">Click to increment Count</button>

        <h1>{{firstName}} {{lastName}}</h1>
        <button @click="changeName">Click to change firstName</button>
    </div>
</template>

<script>
import {reactive, ref, toRefs} from 'vue'
    export default {
        name:"ReplacingMethods",
        setup(){
            const count = ref(0);
            const increamentCount = ()=>{
                count.value ++
            };
            const state = reactive({
                firstName: "Bruce",
                lastName: "Wane"
            });
            const changeName =()=>{
                state.firstName = "Sai"
            }
            return{
                count,
                increamentCount,
                ...toRefs(state),
                changeName
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>