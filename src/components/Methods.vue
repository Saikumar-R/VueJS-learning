<template>
    <div>
        <h2>we are perfroming aadition {{ addition(6) }}</h2>
        <h2>we are performing multiplication {{ multiplication(2) }}</h2>
    </div>
</template>

<script>
export default{
    name:"MethodsRendering",
    data(){
        return{
            baseVlaue: 5,
        }
    },
    methods:{
        addition(num){
            return this.baseVlaue + num;
        },
        multiplication(num){
          return this.baseVlaue * num;
        },
    }
}
</script>