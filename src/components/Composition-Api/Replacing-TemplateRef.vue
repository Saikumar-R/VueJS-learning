<template>
    <div>
        <h2>Template Ref and Composition Api</h2>
        <input type="text" ref="inputElement">
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
    export default {
        name:"TemplateRefAndCompositionApi",
        setup(){
            const inputElement = ref(null)

            onMounted(()=>{
                inputElement.value.focus();
            })

            return{
                inputElement
            }
        }
    }
</script>

<style scoped>


</style>