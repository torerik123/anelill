<template>
  <v-app dark>
    <TheHeader></TheHeader>
    <v-main>
      <v-container fluid class="px-15 py-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer color="white" absolute app class="px-15">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';

export default {
  name: 'DefaultLayout',
  components: {TheHeader},

  data() {
    return {
    }
  },
}
</script>
