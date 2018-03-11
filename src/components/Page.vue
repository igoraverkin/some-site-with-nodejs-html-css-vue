<template>

<div>

<ul>
    <li v-if="direction =='history'">
        <a> 11</a>
    </li>
    
    <li v-if="direction =='mag/history'">
        <a>13 </a>
    </li>

    <li v-if="direction =='ru_history'">
        <a>12 </a>
    </li>
</ul>

</div>

</template>

<script>

export default {
data(){
    return{

    }
    props:{'direction'}
}
}
</script>

<style scoped>


</style>
