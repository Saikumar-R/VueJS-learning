<template>
    <div v-html="boldTag"></div> <!-- HTML Binding here v-html is attribute -->
</template>

<script>
export default{
    name:'BindingHtml',
    data(){
        return{
            boldTag: '<b>I am working in TCS HYD</b>',
        }
    }
}
</script>