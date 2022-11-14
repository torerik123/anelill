<template>
	<v-app-bar color="white" elevate-on-scroll fixed  app>
      <v-toolbar-title class="pl-11 text-button font-weight-medium">Ane Lill Nerbøvik</v-toolbar-title>
      <v-spacer />
      <v-toolbar-title class="px-2" >
        <v-btn
          text
          nuxt-link 
          :to="'#about'"
        >
          About
        </v-btn>
      </v-toolbar-title>      
      <v-toolbar-title class="px-2" nuxt-link :to="'#gallery'">
        <v-btn
          text
          nuxt-link 
          :to="'#gallery'"
        >
          Gallery
        </v-btn>
      </v-toolbar-title>      
      <v-toolbar-title class="px-2" nuxt-link :to="'#contact'">
        <v-btn
          text
          nuxt-link 
          :to="'#contact'"
        >
          Contact
        </v-btn>
      </v-toolbar-title>      
    </v-app-bar>
</template>

<script>
	export default {
		name: "TheHeader",
	}
</script>