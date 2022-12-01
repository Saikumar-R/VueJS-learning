<template>
    <div>
        <h2>{{fullname}}</h2>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
    export default {
        name:"PropsAndCompositionApi",
        props:['firstName', 'lastName'],
        setup(props){
            const fullname = computed(()=>{
                return `${props.firstName} ${props.lastName}`
            })
            return{
                fullname
            }
        }
    }
</script>

<style scoped>

</style>