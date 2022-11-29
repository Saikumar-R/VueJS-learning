<template>
    <div>
        <input type="text" v-model="firstName"><br>
        <input type="text" v-model="lastName">
        <hr>
        <input type="text" placeholder="hero name" v-model="heroName"><br>
        <input type="text" placeholder="heroine name" v-model="heroineName">
    </div>
</template>

<script>
import {reactive, ref, toRefs} from 'vue'
    export default {
        name:"VmodelAndCompositionApi",
        setup(){
            const firstName = ref(''),
                    lastName = ref(''),
                    state = reactive({
                        heroName: "",
                        heroineName: ""
                    })
            
            return{
                firstName,
                lastName,
                ...toRefs(state)
            }
        }
    }
</script>

<style scoped>

</style>