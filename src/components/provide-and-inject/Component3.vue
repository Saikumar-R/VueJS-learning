<template>
    <div>
        <h2>Component 3</h2>
        <h2>Getting UserName from App Component {{userName}}</h2>
    </div>
</template>

<script>
    export default{
        name:"ComponentLevel3",
        data(){
            return{

            }
        },
        inject: ['userName']
    }
</script>