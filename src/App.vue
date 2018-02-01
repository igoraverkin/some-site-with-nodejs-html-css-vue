<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Форум</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
        <div class="main_class">
            <div> <em>Кафедра</em><br> </div>
            <div class="theology_culture_and_art"><strong>ТЕОЛОГИЯ КУЛЬТУРА И ИСКУССТВО</strong> <br></div>
            
            <div> <em>Кафедра</em><br> </div>
            <div class="domestic_and_foreign_history" ><strong>ОТЕЧЕСТВЕННАЯ И ЗАРУБЕЖНАЯ ИСТОРИЯ</strong> <br></div>

            <div class="bachelory">
                <ul class ="bachelory_ul">
                <li>Бакалавриат <br><em>46.03.01 "История"</em> <br></li>
                <li>Бакалавриат <br> <em>48.03.01 "Теология"</em> <br></li>
                <li>Бакалавриат <br><em>50.03.01 "История искусств"</em><br></li>
                </ul>
            </div>
            <div class ="magistracy">
              <ul>
                <li>Магистратура <br><em>46.04.01 "История"</em> <br> </li>
                <li>Магистратура <br><em>50.04.01 "История искусств"</em> <br> </li></ul>
            </div>
            <div class="postgraduate">
                <li>Аспирантура <br><em>50.04.01 "История искусств"</em> <br></li>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
