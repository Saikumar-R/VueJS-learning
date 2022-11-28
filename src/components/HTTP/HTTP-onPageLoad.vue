<template>
    <div>
        <h2>HTTP Request on Page Load</h2>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"ApiCallOnPageLoad",
        data(){
            return{

            }
        },
        methods:{
            getPosts(){
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((response)=>{
                        console.log(response.data)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }
        },
        created(){
            this.getPosts();
        }
    }
</script>

<style scoped>

</style>