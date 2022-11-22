<template>
    <div>
        <CardComp></CardComp>
        <CardComp>Adding just text</CardComp>
        <CardComp><h2>Added H2 Tag</h2></CardComp>
        <CardComp><img src="https://st2.depositphotos.com/1141099/6198/i/450/depositphotos_61983329-stock-photo-historic-charminar.jpg" alt=""></CardComp>
    </div>
</template>

<script>
import CardComp from './SlotIntro.vue'
    export default {
        name:"SlotParent",
        components:{
            CardComp
        }
    }
</script>

<style scoped>

</style>