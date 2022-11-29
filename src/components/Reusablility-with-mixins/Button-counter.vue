<template>
    <div>
        <button @click="triggerCounter">You have clicked {{count}}</button>
    </div>
</template>

<script>
import counter from '../../mixins/counter'
    export default {
        name:"ButtonCounter",
        mixins:[counter]
    }
</script>

<style scoped>

</style>