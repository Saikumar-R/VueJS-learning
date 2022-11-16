<template>
    <div>
        <div>{{greet}} {{name}}</div> <!-- Mustache Syntax-->
        <div v-text="city"></div> <!-- text Binding here v-text is attribute -->
    </div>
</template>

<script>
export default{
    name: 'BindingText',
    data(){
        return{
            name: 'Saikumar',
            greet: 'hello',
            city: 'nellore',
        }
    }
}
</script>