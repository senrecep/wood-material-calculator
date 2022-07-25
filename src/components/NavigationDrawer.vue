<template>
  <v-navigation-drawer v-model="drawer" fixed temporary>
    <v-list-item>
      <v-list-item-header>
        <v-list-item-title class="text-h6"> Sayfalar </v-list-item-title>
      </v-list-item-header>
    </v-list-item>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item :to="item.path" v-for="item in items" :key="item.title" link>
        <v-list-item-avatar>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-header>{{ item.title }}</v-list-item-header>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, defineProps, computed } from "vue";
import {} from "vuex";
const props = defineProps({
  drawer: {
    type: Boolean,
    required: true,
  },
});

const drawer = computed(() => props.drawer);

const items = ref([
  { title: "Ana sayfa", icon: "mdi-home-variant-outline", path: "/" },
  {
    title: "Hesaplayıcı V1",
    icon: "mdi-calculator-variant-outline",
    path: "/calculator-v1",
  },
  {
    title: "Hesaplayıcı V2",
    icon: "mdi-calculator-variant-outline",
    path: "/calculator-v2",
  },
]);
</script>
