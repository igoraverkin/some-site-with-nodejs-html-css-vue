import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import AppStartScreen from './components/StartScreen.vue'
import AppNavigationPage from './components/NavigationPage.vue'
import AppContacts from './components/Contacts.vue'
import AppPage from './components/Page.vue'
import AppMainPage from './components/MainPage.vue'

Vue.use(VueRouter);

var  router = new VueRouter({
  routes: [
    { path: '/mainpage/domestic-and-foreign-history/page/history', component: AppPage, props: { direction: 'history'}},
    { path: '/mainpage/domestic-and-foreign-history/page/mag/history', component: AppPage, props: { direction: 'mag/history'}},
    { path: '/mainpage/domestic-and-foreign-history/page/ru_history', component: AppPage, props: { direction: 'ru_history' }},
    { path: '/', component: AppStartScreen},
    { path: '/mainpage/theology-culture-and-art', component: AppNavigationPage, props: { direction: 'TCaA', httppage: ['/mainpage/theology-culture-and-art/page/theology', '/mainpage/theology-culture-and-art/page/art', '/mainpage/theology-culture-and-art/page/mag/art', '/mainpage/theology-culture-and-art/page/decor_art'] }},
    { path: '/mainpage/domestic-and-foreign-history', component: AppNavigationPage, props: { direction: 'DaFH', httppage: ['/mainpage/domestic-and-foreign-history/history', '/mainpage/domestic-and-foreign-history/page/mag/history', '/mainpage/domestic-and-foreign-history/page/ru_history']}},
    { path: '/contacts', component: AppContacts},
    { path: '/mainpage', component: AppMainPage}
  ]
})

new Vue({ 
  el: '#app',
  router: router,
  render: h => h(App)
})
