<template>
    <div>
        <h2>{{fullName}}</h2>
        <button @click="changeFullName">Cick to change full name</button>       
    </div>
</template>

<script>
    export default{
        name:"ComputedSetter",
        data(){
            return{

            }
        },
        methods:{
            changeFullName(){
              this.fullName = 'Saikumar R';
            }
        },
        computed:{
            fullNameWithSet:{
              get(){
                return `${this.firstName} ${this.lastName}`;
              },
              set(val){
                  const names = val.split('');
                  this.firstName = names[0];
                  this.lastName = names[1];
              }
            }
        }
    }
</script>