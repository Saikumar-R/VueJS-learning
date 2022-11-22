<template>
    <div>
         <h2 v-for="name in names" :key="name.firstName">
            <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
        </h2>
    </div>
</template>

<script>
    export default {
        name:"CompSlotProps",
        data(){
            return{
                names:[
                    {
                        firstName: "Saikumar",
                        lastName: "Raghavapuram"
                    },
                    {
                        firstName: "Steve",
                        lastName: "Halmas"
                    },
                    {
                        firstName: "Robert",
                        lastName: "Harsh"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>