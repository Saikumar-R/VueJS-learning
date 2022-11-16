<template>
    <div>
        <!-- Approach-1 -->
        <template v-for="item in items">
           <h2 v-if="item.price > 100" :key="item.id">expensive item - {{item.title}}</h2>
        </template>

        <!-- Approach-2 -->
        <h2 v-for="item in expensiveItems" :key="item.id"> expensive Item - {{item.title}}</h2>
    </div>
</template>

<script>
    export default{
        name:"ComputedPropertiesAndConditionalRendering",
        data(){
            return{
                 items:[
                    {
                      id:1,
                      title:'AC',
                      price:40000
                    },
                    {
                      id:2,
                      title: "choclate",
                      price: 5
                    },
                    {
                      id:2,
                      title: "coffee",
                      price: 80
                    },
                    {
                      id:2,
                      title: "pizza",
                      price: 300
                    }
                ],
            }
        },
        computed:{
            expensiveItems(){
              return this.items.filter((item)=>{
                return (item.price > 100);
              })
            },
        }
    }
</script>