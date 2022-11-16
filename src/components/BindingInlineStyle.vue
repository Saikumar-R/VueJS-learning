<template>
    <div>
        <h2 v-bind:style="{
            color: orangeColour,
            'font-size': fontSize + 'px'
        }">inline style binding with object</h2>
      
      <div v-bind:style="successStyle">inline styles with declared object</div>
      <div v-bind:style="[successStyle, bgColour]"> inline styling with array of objects</div>
    </div>
</template>

<script>
export default{
    name:'BindingInlineStyle',
    data(){
        return{
            orangeColour:'orange',
            fontSize: 30,
            successStyle: {
                color: 'orange',
                fontSize: '50px',
                textDecoration: 'underline',
                padding: '50px',
                border: '2px solid green'
            },
            bgColour:{
              'background-color': 'black'
            },
        }
    }
}
</script>
