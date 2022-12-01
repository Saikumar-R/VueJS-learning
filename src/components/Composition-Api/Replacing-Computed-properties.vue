<template>
    <div>
        <h2>Replacing Computed Properties</h2>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">

        <h2>Type to update your name {{fullName}}</h2>
        <hr>

        <input type="text" v-model="heroName">
        <input type="text" v-model="movieName">

        <h2>Type to update your Cast Details {{castDetails}}</h2>
    </div>
</template>

<script>
import{computed, reactive, ref, toRefs} from 'vue'
    export default {
        name:"ReplacingComputedProperties",
        setup(){
            const firstName = ref(''),
                lastName = ref('');

            const fullName = computed(()=>{
                return `${firstName.value} ${lastName.value}`
            })

            const state = reactive({
                heroName:"",
                movieName:""
            })
            const castDetails = computed(()=>{
                return `hero ${state.heroName} movie ${state.movieName}`
            })
            return{
                firstName,
                lastName,
                fullName,
                ...toRefs(state),
                castDetails
            }
        }
    }
</script>

<style scoped>

</style>