<template>
    <div>
        <h2>options API -- {{user}} -- is getting from main.vue</h2>

        <h2>Composition Api -- {{value}} is getting from main.vue</h2>
        <h2>Composition Api ref -- {{countVal}} is getting from main.vue</h2>
        <h2>Composition Api reactive -- {{movieName}} is getting from main.vue</h2>
        <button @click="incrementCount">Click to increamentCount and function is getting from main.vue</button>
    </div>
</template>

<script>
import {inject, toRefs} from 'vue'
    export default {
        name:"ReplacingProvideAndInject",
        inject:['user'],
        setup(){
            const value = inject('c_name','Default')
            const countVal = inject('count',0)
            const movieName = inject('movieFullName',{})
            const incrementCount = inject('incrementCount')
            return{
                value,
                countVal,
                ...toRefs(movieName),
                incrementCount
            }

        }
    }
</script>

<style scoped>

</style>