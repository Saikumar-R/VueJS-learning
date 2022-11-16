<template>
    <div>
        <button v-bind:id="idName" v-bind:disabled="isDisabled">
        here Iam binding a ID and disable property
    </button>

    <!-- Conditional Binding Start -->
        <h2 v-bind:class="isPromoted && 'promoted' ">Promoted Movies</h2>
        <h2 v-bind:class=" isSoldOut ? 'soldOut' : 'promoted'">Tickets Sold out or Available</h2>
        <h2 v-bind:class="['underline','promoted']">Array of classes</h2>
        <h2 v-bind:class="[isSoldOut ? '.soldOut' : 'promoted',
                            isPromoted && 'underline'
                          ]">Conditional Array of Classes</h2>
        <h2 v-bind:class="{
         promoted : isPromoted,
         soldOut : !isSoldOut,
         underline : isUnderline
        }">Conditional Objects</h2>
        <!-- Conditional Binding Start -->
    </div>
</template>

<script>
    export default{
        name:"BindingToAttributes",
        data(){
            return{
                idName: 'primary',
                isDisabled: true,
                isPromoted: true,
                isSoldOut: false,
                isUnderline: false,
            }
        }
    }
</script>