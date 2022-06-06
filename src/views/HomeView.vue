<template>
   <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img src="https://images.squarespace-cdn.com/content/v1/5e45fd7b05ae4e3f2f2ed60f/1581645908407-OU71JDZN3L0QV38JKDGQ/Resilia_Final_FullColor.jpg?format=1500w"
        aspect-ratio="1" class="my-3" contain  height="100"/>

        <h2>
            Welcome To Resilia!
        </h2>
        <h4> We are happy to see you again.</h4>

         <v-img src="https://media.istockphoto.com/photos/glad-to-work-with-you-picture-id951514270?k=20&m=951514270&s=612x612&w=0&h=YuXPRgNuF-CIPpQEcJHVn8TFlzU-1z8g7YY7F6i0qOk="
        aspect-ratio="1" class="my-3" contain  height="350"/>
      
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from '../router';

  export default {
    name: 'Home',
    props: ['notifications'],
    methods: {
      
    },
    mounted() {
     
    }
  }
</script>
