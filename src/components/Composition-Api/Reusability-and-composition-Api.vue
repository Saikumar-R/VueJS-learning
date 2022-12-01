<template>
    <div>
        <h2>Reusability with composition API{{count}}</h2>
        <button @click="incrementCounter">Click </button>
    </div>
</template>

<script>
import useCounter from '../../Composables/useCounter'
    export default {
        name:"ReusabilityWithCompositionApi",
        setup(){
            const {count, incrementCounter} = useCounter() 
            return{
                count,
                incrementCounter
            }
        }
    }
</script>

<style scoped>

</style>