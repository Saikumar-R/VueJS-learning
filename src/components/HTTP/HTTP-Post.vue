<template>
    <div>
        <form @submit.prevent="submitUserForm">
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="userData.title">
            </div>
            <div>
                <label for="name">ID</label>
                <input type="text" v-model="userData.userId">
            </div>
            <div>
                <label for="name">Number</label>
                <input type="text" v-model="userData.body">
            </div>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"HTTPPost",
        data(){
            return{
                userData:
                    {
                         title: '',
                        body: '',
                        userId: "",
                    }
            }
        },
        methods:{
            submitUserForm(){
                //console.log(this.userData);
                axios.post('https://jsonplaceholder.typicode.com/posts', this.userData)
                        .then((response)=>{
                            console.log(response.data)
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
            }
        }
    }
</script>

<style scoped>

</style>