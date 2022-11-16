<template>
    <div>
        <h2>Volume Tracker {0-20}</h2>
        <h2>Volume is {{volume}}</h2>
        <button @click=" volume += 2">Increase</button>
        <button @click="volume -= 2">Decrease</button>
    </div>
</template>

<script>
    export default{
        name:"WatchersVue",
        data(){
            return{
                volume: 0,
            }
        },
        Watch:{
            volume(newVal, oldVal){
              if(newVal > oldVal && newVal === 16) {
                alert('your ears may damage') ; 
              }
            },
        }
    }
</script>