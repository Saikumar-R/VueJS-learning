<template>
    <div>
        <h2>{{fullName}}</h2>
        <button @click="items.push({id:3, title:'ring', price:15000})">click to add item to data</button>
        <h2>Computed - {{totalPrice}}</h2>
    </div>
</template>

<script>
    export default{
        name:"ComputedProperties",
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
            fullName(){
              return `${this.name} ${this.lastName}`;
            },
            totalPrice(){
              return this.items.reduce((total, curr) =>{
                return (total = total + curr.price)
              },0)
            },
        }
    }
</script>