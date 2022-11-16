<template>
    <div>
        <div>Array of strings v-for
        <h2 v-for="movie of movies" v-bind:key="movie">{{movie}}</h2>
      </div>
      <div>Array of objects
        <h2 v-for="fullName of fullNames" :key="fullName">
          {{fullName.firstName}} {{fullName.lastName}}
        </h2>
      </div>
      <div>Array of Arrays
        <div v-for="actor of actors" :key="actor">
          <h2>{{actor.actorName}}</h2>
            <h4 v-for="movie in actor.movies" :key="movie">{{movie}}</h4>
        </div>
      </div>
      <h1 v-for="(index,key,value) in states" :key="value"> {{value}} {{key}} {{index}}</h1>
    </div>
</template>

<script>
    export default{
        name:"ListRendering",
        data(){
            return{
                movies: ['vikram', 'AVAK','KGF','RRR'],
                fullNames:[
                  {
                    firstName: 'Sai',
                    lastName: 'Kumar'
                  },
                  {
                    firstName: 'Sirisha',
                    lastName: 'bontha'
                  }
                ],
                actors:[
                  {
                    actorName: 'Ramcharan',
                    movies:['orange','RRR']
                  },
                  {
                    actorName: 'PSPK',
                    movies:['BM','VS']
                  }
                ],
                states:{
                  name:'AP',
                  City:'Nellore'
                },
            }
        }
    }
</script>