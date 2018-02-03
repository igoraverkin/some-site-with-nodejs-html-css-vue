<template>
<div class="main_class">

    <button @click="$emit('backToStartScreen')">Back</button>

    <div> <em>Кафедра</em><br> </div>
    <button @click="$emit('toNavigationPage')">
    <div class="theology_culture_and_art" ><strong>ТЕОЛОГИЯ КУЛЬТУРА И ИСКУССТВО</strong> <br></div>
    </button>
            
    <div> <em>Кафедра</em><br> </div>
    <div class="domestic_and_foreign_history" ><strong>ОТЕЧЕСТВЕННАЯ И ЗАРУБЕЖНАЯ ИСТОРИЯ</strong> <br></div>

</div>
</template>
<script>
export default {
  
}
</script>

<style scoped>

</style>

