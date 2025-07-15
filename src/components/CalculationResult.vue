<script setup lang="ts">
import { CalculationItem } from "../types/CalculationItem";
import { CalculationResult } from "../types/CalculationResult";
import { computed, defineProps, ref, watch, onMounted, onUnmounted } from "vue";
import { formatTry, formatDateTime } from "../utils/Formaters";
const props = defineProps<{
  param: CalculationItem[];
}>();
const items = computed(() => props.param);
const result = ref(new CalculationResult());
const currentTime = ref(new Date());
const dateTime = computed(() => formatDateTime(currentTime.value));

let intervalId: number | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentTime.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

const Calculate = () => {
  result.value.Calculate(items.value);
};

watch(items, () => {
  Calculate();
});

watch(items.value, () => {
  Calculate();
});
</script>
<template>
  <v-card class="my-2">
    <v-card-title class="text-center">{{ dateTime }}</v-card-title>
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card class="text-center">
            <v-card-title>M<sup>3</sup></v-card-title>
            <v-card-text class="text-h6">{{
              (result.CubicMeter / 1000).toFixed(2)
            }}</v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="text-center">
            <v-card-title>FIYAT</v-card-title>
            <v-card-text class="text-h6">{{
              formatTry(result.Price)
            }}</v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="text-center">
            <v-card-title>KDV (20%)</v-card-title>
            <v-card-text class="text-h6">{{
              formatTry(result.VAT)
            }}</v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="text-center">
            <v-card-title>FIYAT + KDV (20%)</v-card-title>
            <v-card-text class="text-h6">{{
              formatTry(result.TotalPrice)
            }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
