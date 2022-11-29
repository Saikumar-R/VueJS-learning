<template>
    <div>
        <h2>Composition API</h2>
        <!-- <ReplacingDataWithRef /> -->
        <!-- <ReplacingDatawithReactive /> -->
        <!-- <ReactivityAndToRefs /> -->
        <!-- <ReplacingMethods /> -->
        <VmodelAndCompositionApi />
    </div>
</template>

<script>
//import ReplacingDataWithRef from './replacing-data-with-ref.vue'
// import ReplacingDatawithReactive from './replacing-data-with-Reactive.vue'
// import ReactivityAndToRefs from './Reactivity-and-toRefs.vue'
// import ReplacingMethods from './Replacing-methods.vue'
import VmodelAndCompositionApi from './v-model-and-compositionAPI.vue'
    export default {
        name:"CompositionApiMainFile",
        components:{
            // ReplacingDataWithRef,
            // ReplacingDatawithReactive,
            // ReactivityAndToRefs,
            // ReplacingMethods
            VmodelAndCompositionApi
        }
    }
</script>

<style lang="scss" scoped>

</style>