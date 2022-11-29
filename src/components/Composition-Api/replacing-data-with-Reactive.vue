<template>
    <div>
        <h2>Replacing Data with Reactive</h2>
        <h2>hello {{state.c_firstname}} {{state.c_lastname}}</h2>
        <h2>{{greet}}</h2>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
    export default {
        name:"ReplacingDatawithReactive",
        setup(){
            const state = reactive({
                c_firstname: "Jane",
                c_lastname: "welca"
            })
            const greet = `hello ${state.c_firstname} ${state.c_lastname}`
            return{
                state,
                greet
            }

        }
    }
</script>

<style scoped>

</style>