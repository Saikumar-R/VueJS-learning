<template>
    <div>
        <!-- <CardComp></CardComp>
        <CardComp>Adding just text</CardComp>
        <CardComp><h2>Added H2 Tag</h2></CardComp>
        <CardComp><img src="https://st2.depositphotos.com/1141099/6198/i/450/depositphotos_61983329-stock-photo-historic-charminar.jpg" alt=""></CardComp>

        <NamedSlots>
            <template v-slot:header>
                header
            </template>
            <template v-slot:default>
                <img src="https://st2.depositphotos.com/1141099/6198/i/450/depositphotos_61983329-stock-photo-historic-charminar.jpg" alt="">
            </template>
            <template v-slot:footer>
                <button>Click for details</button>
            </template>
        </NamedSlots> -->

        <CompSlotProps>
            <template v-slot:default="slotProps">
                {{slotProps.firstName}} {{slotProps.lastName}}
            </template>
        </CompSlotProps> 
        <CompSlotProps>
            <template v-slot:default="slotProps">
               {{slotProps.lastName}}   {{slotProps.firstName}}
            </template>
        </CompSlotProps> 
        <CompSlotProps>
            <template v-slot:default="slotProps">
                {{slotProps.firstName}}
            </template>
        </CompSlotProps> 
    </div>
</template>

<script>
// import CardComp from './SlotIntro.vue'
// import NamedSlots from './Named-Slots.vue'
import CompSlotProps from './Slot-Props.vue'
    export default {
        name:"SlotParent",
        components:{
            // CardComp,
            // NamedSlots,
            CompSlotProps
        }
    }
</script>

<style scoped>
    .card{
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        padding: 16px;
        margin-bottom: 20px;
    }
    .card:hover{
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>