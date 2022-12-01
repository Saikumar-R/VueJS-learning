<template>
    <div>
        <h2>Composition API</h2>
        <!-- <ReplacingDataWithRef /> -->
        <!-- <ReplacingDatawithReactive /> -->
        <!-- <ReactivityAndToRefs /> -->
        <!-- <ReplacingMethods /> -->
        <!-- <VmodelAndCompositionApi /> -->
        <!-- <ReplacingComputedProperties /> -->
        <!-- <ReplacingWatchers /> -->
        <ReplacingProvideAndInject />
        <ReplacingLifeCycleHooks />
        <TemplateRefAndCompositionApi />

        <input type="text" v-model="lastName">
        <input type="text" v-model="firstName">
        <PropsAndCompositionApi :firstName="firstName" :lastName="lastName" />

        <CustomEventsAndCompositionApi :fName="fName" @sendEvent="sendEvent"/>

        <ReusabilityWithCompositionApi />

    </div>
</template>

<script>
import { provide, reactive, toRefs, ref } from 'vue'
//import ReplacingDataWithRef from './replacing-data-with-ref.vue'
// import ReplacingDatawithReactive from './replacing-data-with-Reactive.vue'
// import ReactivityAndToRefs from './Reactivity-and-toRefs.vue'
// import ReplacingMethods from './Replacing-methods.vue'
// import VmodelAndCompositionApi from './v-model-and-compositionAPI.vue'
// import ReplacingComputedProperties from './Replacing-Computed-properties.vue'
// import ReplacingWatchers from './Replacing-watchers.vue'
import ReplacingProvideAndInject from './Replacing-provide-and-inject.vue'
import ReplacingLifeCycleHooks from './Replacing-Life-Cycle-hooks.vue'
import TemplateRefAndCompositionApi from './Replacing-TemplateRef.vue'
import PropsAndCompositionApi from './props-and-composition-Api.vue'
import CustomEventsAndCompositionApi from './custom-events-and-composition-api.vue'
import ReusabilityWithCompositionApi from './Reusability-and-composition-Api.vue'

    export default {
        name:"CompositionApiMainFile",
        components:{
            // ReplacingDataWithRef,
            // ReplacingDatawithReactive,
            // ReactivityAndToRefs,
            // ReplacingMethods
            // VmodelAndCompositionApi
            // ReplacingComputedProperties
            // ReplacingWatchers
            ReplacingProvideAndInject,
            ReplacingLifeCycleHooks,
            TemplateRefAndCompositionApi,
            PropsAndCompositionApi,
            CustomEventsAndCompositionApi,
            ReusabilityWithCompositionApi
        },
        //options Api Start
        data(){
            return{
                name:"Saikumar"
            }
        },
        provide(){
            return{
                user : this.name
            }
        },
        //options Api End

        
        setup(){
            //Composition Api Start for provide and inject
            provide('c_name','Bruce');
            const count = ref(0),
            state = reactive({
                movieName: 'Black Panther',
                tag:"wakanda forever"
            })
            provide('count', count);
            provide('movieFullName',state)

            const incrementCount = ()=>{
                return count.value ++
            }
            provide('incrementCount',incrementCount)
            //Composition Api End for provide and inject
            
             const firstName = ref(''),
                lastName = ref('')

            const sendEvent = (eve)=>{
                alert(`${eve}`)
            }
            return{
                count,
                ...toRefs(state),
                incrementCount,
                firstName,
                lastName,
                sendEvent
            }
            
           
        }
        
    }
</script>

<style lang="scss" scoped>

</style>