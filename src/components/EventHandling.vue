<template>
    <div>
        <h2>{{count}}</h2>
      <button v-on:click="increment($event)">increment</button>
      <button v-on:click="fireAlert()" v-on:mouseover="decrement()">mouseover on button for decrement</button>
    </div>
</template>

<script>
    export default{
        name:"EventHandling",
        data(){
            return{
                count: 0,
            }
        },
        methods:{
            increment(event){
                this.count += 1;
                console.log('Event',event)
            },
            decrement(){
              return this.count -= 1;
            },
            fireAlert(){
              return alert('your\'re hacked');
            },
        }
    }
</script>