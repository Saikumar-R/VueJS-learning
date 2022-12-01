<template>
    <div>
        <h2>Replacing Watchers</h2>
        <input type="text" v-model="firstName">

        <input type="text" v-model="area">
        <input type="text" v-model="city">

        <input type="text" placeholder="reactive fname" v-model="fName">
        <input type="text" placeholder="reactive lname" v-model="lName">
          <input type="text" placeholder="reactive greet" v-model="options.greet">
    </div>
</template>

<script>
import {reactive, ref,  toRefs, watch} from 'vue'
import _ from 'lodash'
    export default {
        name:"ReplacingWatchers",
        setup(){
            //with ref start
            const firstName = ref(''),
                    area=ref(''),
                    city=ref('');
            watch(firstName,(oldvalue,newvalue)=>{
                console.log('old value',oldvalue )
                console.log('old value', newvalue )
            })
            watch([area,city],
            (oldvalues, newvalues)=>{
                
                console.log('new value', newvalues[0] )
                console.log('old value',oldvalues[0] )
                // console.log('old value',oldvalues[1] )
                // console.log('old value', newvalues[1] )
            },{
                immediate:true
            }
            )
            //with ref start end

            //with reactive start

            const state = reactive({
                fName: "",
                lName:"",
                options:{
                    greet:""
                }
            })
            // watch(state,(oldValue, newValue)=>{
            //     console.log('oldValue',oldValue.fName)
            //     console.log('oldValue',newValue.fName)
            //     console.log('oldValue',oldValue.fName)
            //     console.log('oldValue',newValue.fName)
            // })

            // watch(()=>{
            //     return {...state}
            // },(oldValue, newValue)=>{
            //     console.log('oldValue',oldValue.fName)
            //     console.log('newValue',newValue.fName)
            //     console.log('oldValue',oldValue.fName)
            //     console.log('newValue',newValue.fName)
            // })

            // watch(()=> state.fName,(oldValue, newValue)=>{
            //     console.log('oldValue',oldValue)
            //     console.log('newValue',newValue)
            // })
            watch(()=> _.cloneDeep(state.options),
            (newvalue, oldvalue)=>{
                console.log(newvalue)
                console.log(oldvalue)
            },
            {
                deep:true
            }
            )
            return{
                firstName,
                area,
                city,
                ...toRefs(state)
            }
        }

    }
</script>

<style scoped>

</style>