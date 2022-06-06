<template>
  <v-container>
    <template v-for="(n, i) in items"   >
        <v-card class="mx-auto mb-5" max-width="90vw">
            
            <v-img :src="n.notification.image" height="100px"></v-img>

            <v-card-title>
            {{ n.notification.title }}
            </v-card-title>

            <v-card-subtitle>
            {{ n.data.Type }} - {{ n.data.CreatedAt }}
            </v-card-subtitle>

            <v-expand-transition>
            <div>
                <v-divider></v-divider>
                <div v-if="n.data.Type==='Message'">
                    <strong  class="pa-2">From {{n.data.FullName}}</strong>
                </div>
                <v-card-text>
                {{ n.notification.body }}
                <br />
                <v-btn @click="$router.push('/notification/' + n.data.NotificationID)" class="mt-2"> See more...</v-btn>
                </v-card-text>
            </div>  
            </v-expand-transition>
        </v-card>
    </template>

  </v-container>
    
</template>

<script>

export default({
  name: 'Notifications',
  data: () => ({
      show: [],
  }),
  computed: {
      items() {
          return this.$store.state.notifications;
      }
  },
});
</script>
