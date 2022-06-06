import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './plugins/vuex'
import firebaseMessaging from './firebase'

Vue.config.productionTip = false
Vue.prototype.$messaging = firebaseMessaging

//Process messages received within push notifications
firebaseMessaging.onMessage(function(payload) {
  store.commit('addNotification', payload);
});

 new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')

