<template>
    <h2>hello {{name}} your leader is {{leader}}</h2>
</template>

<script>
    export default{
        name:"ComponentProps",
        data(){
            return{

            }
        },
        props:['name','leader']
    }
</script>