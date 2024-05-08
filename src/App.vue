<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Ahşap Malzeme Hesaplayıcı</v-toolbar-title>
    </v-app-bar>

    <NavigationDrawer  />

    <v-main class="grey lighten-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import NavigationDrawer from "./components/NavigationDrawer.vue";
import { useStore } from 'vuex'
const store = useStore()

const toggleDrawer = () => {
  store.commit('toggleDrawer')
}
</script>
