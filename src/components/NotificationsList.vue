<template>
<div>
    <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="white" v-if="storedNotifications.length == 0">mdi-bell-outline</v-icon>
            <v-icon color="yellow" v-else>mdi-bell-badge</v-icon>
          </v-btn>
        </template>

        <!-- List the notifications available-->
        <v-list dense v-if="storedNotifications.length > 0" class="mt-12">
          <template>
            <v-list-item v-for="(n, index) in storedNotifications" :key="n.data.NotificationID">
              <v-list-item-icon>
                <v-icon :color="n.data.ReadAt ? '#000' : '#3F51B5'"> {{notificationIcon(n)}} </v-icon>
              </v-list-item-icon>
              <v-list-item-content @click="$router.push('/notification/' + n.data.NotificationID)" style="cursor: pointer">
                <v-list-item-title class="unread">{{ n.notification.title }}</v-list-item-title>
                <v-list-item-subtitle> {{ n.data.CreatedAt }} </v-list-item-subtitle>
              </v-list-item-content>
               <v-list-item-action>
                    <v-btn icon @click="remove(n)">
                        <v-icon color="grey lighten-1">mdi-delete</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
          </template>
          <!-- ADD A FINAL ENTRY FOR SEE ALL NOTIFICATIONS -->
          <v-list-item :to="{ name: 'notifications' }">
            See all...
          </v-list-item>
        </v-list>

        <!-- No notifications -->
        <v-list dense v-else>
          <template>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-alert</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>You have no notifications</v-list-item-title>
                <v-list-item-subtitle>Check back later...</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
</div>
</template>

<style lang="scss">

</style>

<script>
export default {
  name: 'NotificationsList',
  data: () => ({
  }),
  methods: {
      remove($event) {
          this.$store.commit('clearNotification', $event);
      },
      notificationIcon(notification) {
          if(notification.data.Type == 'Message') return 'mdi-message-badge';
          else if(notification.data.Type == 'Grantees') return 'mdi-account-group';
          else if(notification.data.Type == 'Update') return 'mdi-update';
          else if(notification.data.Type == 'IRS') return 'mdi-currency-usd';
          else if(notification.data.Type == 'Reminder') return 'mdi-reminder';
          else if(notification.data.Type == 'Event') return 'mdi-calendar';
          else if(notification.data.Type == 'Feed') return 'mdi-rss';
          else if(notification.data.Type == 'System') return 'mdi-application-outline';
          else return 'mdi-help-circle'
      },
  },
  computed: {
    storedNotifications()
    {
      return this.$store.state.notifications;
    },
  },
  watch: {
      
  }
};
</script>