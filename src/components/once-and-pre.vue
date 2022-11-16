<template>
    <div>
        <h2 v-once>{{name}}</h2> 
            <!--here we used v-once so this will not change name even after btn click -->
        <button @click=" name = 'batman'">Click to change name</button>

        <h2 v-pre>{{name}}</h2> 
            <!--since we use v-pre this will stop execution and prints {{name}} in view-->
    </div>
</template>

<script>
    export default{
        name:"OnceAndPre",
        data(){
            return{
                name:"Sai"
            }
        }
    }
</script>