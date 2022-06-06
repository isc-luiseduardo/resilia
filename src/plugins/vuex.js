import Vue from 'vue';
import Vuex from 'vuex'
//Setup VueX for state management
Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  state: {
    notifications: [],
    User: {}
  },
  mutations: {
    /**
    * Sets the current user in the application
    */
    setUser(state, user) {
      state.User = user;
    },
    /**
    * Insert a new notification within the array
    */
    addNotification(state, notification) {
      state.notifications.push(notification);
    },
    /**
    * Mark an open notification as read by adding the readAt property with current date and time.
    */
    setNotificationAsRead(state, notification) {
      const nIndex = state.notifications.map(item => item).indexOf(notification);
      if(nIndex > 0 && !state.notifications[nIndex].data.ReadAt) state.notifications[nIndex].data.ReadAt = Date.now;
    },
    /**
    * Remove a notification from Vuex
    */
    clearNotification(state, notification) {
      const nIndex = state.notifications.map(item => item).indexOf(notification); //Holds the index of the notification within the array
      state.notifications.splice(nIndex, 1);
    },
  }
});


export default store;