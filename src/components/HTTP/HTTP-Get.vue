<template>
    <div>
        <button @click="getData">Load Posts</button>
        <div v-for="post in posts" :key="post.userId">
            <p>postId: {{post.id}}</p>
            <p>post Title:{{post.title}}</p>
            <p>post Body: {{post.body}}</p>
            <hr>
        </div>
        <h2 v-if="errorMsg">{{errorMsg}}</h2>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name:"HTTPGet",
        data(){
            return{
                posts:[],
                errorMsg: ""
            }
        },
        methods:{
            getData(){
                axios.
                    get("https://jsonplaceholder.typicode.com/posts")
                    .then((response)=>{
                        console.log(response.data);
                        this.posts = response.data
                    })
                    .catch((err)=>{
                        console.log(err);
                        this.errorMsg = err;
                    })
            }
        }
    }
</script>

<style scoped>

</style>