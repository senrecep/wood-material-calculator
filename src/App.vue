<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Ahşap Malzeme Hesaplayıcı</v-toolbar-title>
    </v-app-bar>

    <NavigationDrawer :drawer="drawer" />

    <v-main class="grey lighten-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
const drawer = ref(false);
</script>
