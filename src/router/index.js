import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "../views/HomeView.vue";
import Notifications from "../views/NotificationsView.vue";
import Loading from "../views/LoadingView.vue";
import About from "../views/AboutView.vue";
import Notification from '../views/Notification.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "loading",
    component: Loading,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/notifications/all",
    name: "notifications",
    component: Notifications,
  },
  {
    path: "/notification/:id",
    name: "notification",
    component: Notification,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
]

const router = new VueRouter({
  routes
})

export default router
