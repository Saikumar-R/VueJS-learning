<template>
    <div>
        <h1 v-if="num ===0"> Element is rendering using vue IF</h1>
        <h1 v-else-if=" num > 0 ">Element is rendering using vue elseIf</h1>
        <h1 v-else>Element is rendering using vue else</h1>
        <h1>
          <a v-show="isDisabled" href="hello">
              This is rendering using v-show
          </a>
        </h1>
    </div>
</template>

<script>
    export default{
        name:"ConditionalRendering",
        data(){
            return{
                 num: 5,
                 isDisabled: true
            }
        }
    }
</script>