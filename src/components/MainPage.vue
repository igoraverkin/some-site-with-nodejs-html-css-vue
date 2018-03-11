<template>
<form>
    <router-link :to="{ path: '/'}" >
    <button >Back</button>
    </router-link>

    <router-link :to="{ path: '/contacts'}" class="contact-router" >
      <a class="btn btn-success" >CONTACTS
      </a><br>
    </router-link>

    <router-link :to="{ path: 'theology-culture-and-art'}" append>
    <button>
    <div class="theology-culture-and-art">ТЕОЛОГИЯ КУЛЬТУРА И ИСКУССТВО</div>
    </button><br>
    </router-link>

    <router-link :to="{ path: 'domestic-and-foreign-history'}" append>
    <button>
    <div class="domestic-and-foreign-history" >ОТЕЧЕСТВЕННАЯ И ЗАРУБЕЖНАЯ ИСТОРИЯ</div>
    </button>
    </router-link>  

</form>
</template>

<script>
export default {

}
</script>

<style scoped>
form  {
    background: url(../assets/nya.jpg) no-repeat;
    background-position: center;
}
button {
    color:purple;
}

</style>

