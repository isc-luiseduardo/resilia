<template>
  <v-container>
    <div>
        <v-card
        v-if="item"
        class="mx-auto mb-5"
        max-width="90vw"
        >
            <v-img
            :src="item.notification.image"
            height="200px"
            ></v-img>

            <v-card-title>
            {{ item.notification.title }}
            </v-card-title>

            <v-card-subtitle>
            {{ item.data.Type }} - {{ item.data.CreatedAt }}
            </v-card-subtitle>

            <v-expand-transition>
            <div>
                <v-divider></v-divider>
                <div v-if="item.data.Type ==='Message'">
                    <strong class="pa-2">From {{item.data.FullName}}</strong>
                </div>
                <v-card-text>
                {{ item.notification.body }}
                </v-card-text>
            </div>  
            </v-expand-transition>
        </v-card>
        
        <!--- If the UID is not valid, show an error message. -->
        <v-card v-else text-center>
            <v-card-title> Oops! It seems like the item does not exist. </v-card-title>
            <v-card-subtitle> Please try with another id from the notifications panel. </v-card-subtitle>

            <v-img src="../../public/img/notfound.gif"></v-img>    
        </v-card>
    </div>
  </v-container>
</template>

<script>
import { find } from 'lodash';

export default({
  name: 'Notification',
  data: () => ({
     item: null
  }),
  computed: {
       
  },
  methods: {
      markAsRead(id){
          this.$store.commit('setNotificationAsRead', id);
      }
  },
  watch: {
      '$route.params.id': {
        handler(newValue) {
            const notificationId = newValue
            this.item = find(this.$store.state.notifications, function(i) {return i.data.NotificationID == notificationId});
        },
        immediate: true,
    }
  },
  async mounted() {
    if(this.$route.params.id) {
        let notificationId = this.$route.params.id;
        this.item = find(this.$store.state.notifications, function(i) {return i.data.NotificationID == notificationId});
        //Mark as read the notification once is open
        this.markAsRead(this.item)
    }
  }
});
</script>
