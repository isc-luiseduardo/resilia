<template>
   <v-app>
    <v-app-bar elevation="4" color="indigo darken-4">
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/home')" class="header-title">
        Resilia
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <NotificationsList></NotificationsList>

      <v-btn icon color="white" to='/about'>
        <v-icon>mdi-help</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main id="content">
      <router-view/>
    </v-main>
   
    <v-footer app bottom fixed padless class="pa-0 ma-0">
      <v-card flat tile width="100%" class="text-center">
        <v-card-text class="indigo--text" width="100%">
            <strong>Resilia</strong>. All rights reserved. {{new Date().getFullYear()}} Ⓒ
          </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style lang="css">
html, body{
  overflow: hidden;
}

#content{
  height: calc(100vh - 56px);
  overflow-y: auto;
}

.header-title
{
  color: white;
  font-weight: 800;
  text-transform: capitalize;
}


</style>

<script>
import NotificationsList from './components/NotificationsList'

export default {
  name: 'App',
  data: () => ({
  
  }),
  components: {
    NotificationsList
},
  methods: {
  },
  computed: {

  },
  async created() {
    
  }
};
</script>
