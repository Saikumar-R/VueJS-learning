<template>
    <div>
        <h2>Replacing Life Cycle Hooks</h2>
    </div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from '@vue/runtime-core'
    export default {
        name:"ReplacingLifeCycleHooks",
       setup(){
        onBeforeMount(()=>{
            console.log('Before Mount')
        })
        onMounted(()=>{
            console.log('mounted')
        })
        onBeforeUpdate(()=>{
            console.log('Before Update')
        })
        onUpdated(()=>{
            console.log('updated')
        })
        onBeforeUnmount(()=>{
            console.log('Before Unmount')
        })
        onUnmounted(()=>{
            console.log('unmounted')
        })
      }
    }
</script>

<style scoped>

</style>