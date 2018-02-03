import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/StartScreen.vue'
import AppNavigationPage from './components/NavigationPage.vue'
import AppContacts from './components/Contacts.vue'
import AppPage from './components/Page.vue'
import AppMainPage from './components/MainPage.vue'

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppNavigationPage', AppNavigationPage);
Vue.component('AppContacts', AppContacts);
Vue.component('AppPage', AppPage);
Vue.component('AppMainPage', AppMainPage);

new Vue({
  el: '#app',
  render: h => h(App)
})
