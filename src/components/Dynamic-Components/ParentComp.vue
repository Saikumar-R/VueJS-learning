<template>
    <div>
        <button @click="activeTab = 'TabAComp' ">Tab A</button>
        <button @click="activeTab = 'TabBComp' ">Tab B</button>
        <button @click="activeTab = 'TabCComp' ">Tab C</button>
        
        <!-- <TabAComp v-if ="activeTab ==='TabA'"/>
        <TabBComp v-if="activeTab ==='TabB'"/>
        <TabCComp v-if="activeTab ==='TabC'"/> -->
        <keep-alive>
            <component v-bind:is="activeTab" />
        </keep-alive>
        
    </div>
</template>

<script>
import TabAComp from './TabA.vue'
import TabBComp from './TabB.vue'
import TabCComp from './TabC.vue'
    export default {
        name:"DynamicCompParent",
        components:{
            TabAComp,
            TabBComp,
            TabCComp
        },
        data(){
            return{
                activeTab: "TabAComp"
            }
        }
    }
</script>

<style scoped>

</style>