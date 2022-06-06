<template>
    <v-container>
      <v-row class="text-center">
        <v-col cols="6">
      
          <h2>
              Thank you!
          </h2>

          <v-img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
          aspect-ratio="1" class="my-3" contain  height="350"/>
        </v-col>

        <v-col cols="6">
          <v-card class="mx-auto my-12" max-width="344">
          <v-img src="../../public/profile.jpg" height="200px"></v-img>

          <v-card-title>
            Luis Eduardo González Téllez
          </v-card-title>

          <v-card-subtitle>
            Fullstack Web Developer 
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                <p>isc.luiseduardo.gontel@gmail.com</p>
                <p><a href="https://www.linkedin.com/in/luis-eduardo-gonz%C3%A1lez-t%C3%A9llez-700412130/">
                  Linkedin
                </a></p>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>

        </v-col>
      </v-row>
  </v-container>
</template>

<script>

  export default ({
    name: 'About',
    data: () => ({
      show: false,
    }),
  });
</script>