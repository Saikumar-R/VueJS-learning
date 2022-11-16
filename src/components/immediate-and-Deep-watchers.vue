<template>
    <div>
      <input type="text" v-model="movie">
      <input type="text" v-model="movieInfo.name">
      <input type="text" v-model="movieInfo.actor">
      <button @click="movies.push('Black Panther')">Click to add movie</button>
    </div>
</template>

<script>
    export default{
        name:"ImmediateAndDeepWatchers",
        data(){
            return{
                movie: 'Batman',
                movieInfo:{
                  name: "Batman",
                  actor:"I dont know"
                }
            }
        },
        watch:{
            movie:{
              handler(newVal){
                console.log(`we are watching movie - ${newVal}`)
              },
              immediate:true
            },
            movieInfo:{
              handler(neVal){
                console.log(`movie Name ${neVal.name} actor ${neVal.actor}`);
              },
              deep:true
            },
            movies:{
              handler(newVal){
                console.log(newVal);
              },
              deep:true
            }
        }
    }
</script>