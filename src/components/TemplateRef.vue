<template>
    <div>
        <input type="text" ref="inputElement">
        <p>hello danger</p>
    </div>
</template>

<script>
import $ from 'jquery'
    export default {
        name:"TemplateRef",
        data(){
            return{

            }
        },
        mounted(){
            this.$refs.inputElement.focus();
            $('p').css('color','red')
        }
    }
</script>

<style scoped>

</style>