<template>
  <div id="app">
    <app-start-screen v-if="state == 'start'" @toMainPage="state='main'">
      
    </app-start-screen>   
    <app-main-page v-else-if="state == 'main'"  @backToStartScreen="state='start'" @toNavigationPage="state='navigation'"></app-main-page>
    <app-navigation-page v-else-if="state == 'navigation'"></app-navigation-page>   
    <app-page v-else-if="state == 'page'"></app-page> 
    <app-contacts v-else-if="state == 'contacts'"> </app-contacts>   
    <div v-else> Unknown state</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
