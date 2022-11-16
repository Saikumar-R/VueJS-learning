<template>
    <div>
        <h2>PropTypes and Validation Component</h2>
        <h2>{{titile}}</h2>
        <h2>Likes - {{likes}}</h2>
        <h2>Published {{isPublished ? 'Yes' : 'No'}}</h2>
        <h2>{{importantString}}</h2>
    </div>
</template>

<script>
    export default {
        name:"PropTypesAndValidation",
        data(){
            return{

            }
        },
        props:{
            titile: String,
            likes: Number,
            isPublished: Boolean,
            importantString:{
                type: String,
                required: true,
                default: "This is required"
            }
        }
    }
</script>