<template>
    <div>
        <h2>Replacing Data</h2>
        <h2>Options API -- {{options_firstName}}</h2>
        <h2>Composition API -- {{composition_firstName}}</h2>
        <h2>Composition API {{greet}}</h2>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        name:"ReplacingDataWithRef",
        //Composition API
        setup(){
            const composition_firstName = ref('clark')
            composition_firstName.value = 'John'
            const greet = `Hello ${composition_firstName.value}`
            console.log(composition_firstName)

            return{
                composition_firstName,
                greet
            }
        },

        //Options API
        data(){
            return{
                options_firstName: "Bruce"
            }
        }
    }
</script>

<style scoped>

</style>