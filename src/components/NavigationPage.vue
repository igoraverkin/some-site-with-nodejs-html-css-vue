<template>
<div>
<img class="cathedral-logo" src="" alt="Oh shit, thats fucking nothing!">
<img class="program-logo" src="" alt="Oh shit, thats fucking nothing!">

<h1>Направления подготовки</h1>

<ul>
    <li v-if="direction =='TCaA'" v-for="program in TCaA_list" :key="program.id">
        <router-link :to="httppage[a++]" append>
        <a> {{program.code}} {{program.name}} </a>
        </router-link>
    </li>
    
    <li v-if="direction =='DaFH'" v-for="program in DaFH_list" :key="program.id">
        <router-link :to="httppage[a++]" append>
        <a> {{program.code}} {{program.name}}</a>
        </router-link>
    </li>
</ul>
 <router-link :to="{ path: '/mainpage'}" >
    <button>
    <img src="" alt="Oh shit, thats fucking nothing!"> 
    </button>
 </router-link>

</div>

</template>

<script>
import TCaA_list from '../TCaA'
import DaFH_list from '../DaFH'
let a = 0;

export default{
    data() {
    return {
        TCaA_list: TCaA_list,
        DaFH_list: DaFH_list,
        a
    }
},
    props:['direction', 'httppage']
}
</script>

<style scoped>

</style>
