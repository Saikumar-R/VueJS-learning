<template v-for="movie in movies">
    <h2 v-if="movie === 'AVAK'" :key="movie">Conditional List {{movie}}</h2>
</template>

<script>
export default{
    name:'ConditionalListRendering',
    data(){
        return{
            movies: ['vikram', 'AVAK','KGF','RRR'],
        }
    }
}
</script>