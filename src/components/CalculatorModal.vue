<script setup lang="ts">
import { CalculationItem } from "types/CalculationItem";
import { ref, defineProps, computed } from "vue";
import NumberInput from "./NumberInput.vue";
const props = defineProps<{
  param: CalculationItem;
}>();

const item = computed(() => props.param);

const dialog = ref(false);

const handleClick = () => {
  console.log(item.value);
};
</script>
<template>
  <v-dialog v-model="dialog" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn class="mx-2" icon small v-bind="props" @click="handleClick">
        <v-icon> mdi-file-document-edit-outline </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Hesaplama</v-card-title>
      <v-divider></v-divider>
      <v-card-item>
        <p class="text-body-1">Kalınlık</p>
        <number-input
          label="Kalınlık"
          :value="item.Thickness"
          @change-value="item.Thickness = $event"
        />
        <p class="text-body-1">En</p>
        <number-input
          label="En"
          :value="item.Width"
          @change-value="item.Width = $event"
        />
        <p class="text-body-1">Boy</p>
        <number-input
          label="Boy"
          :value="item.Height"
          @change-value="item.Height = $event"
        />
        <p class="text-body-1">m<sup>3</sup></p>
        <v-text-field :value="item.SingleCubicMeter / 1000" readonly />

        <p class="text-body-1">Adet</p>
        <number-input
          label="Adet"
          :value="item.Count"
          @change-value="item.Count = $event"
        />

        <p class="text-body-1">m<sup>3</sup></p>
        <v-text-field :value="item.TotalCubicMeter / 1000" readonly />

        <p class="text-body-1">Fiyat</p>
        <number-input
          label="Fiyat"
          :value="item.UnitPrice"
          @change-value="item.UnitPrice = $event"
        />

        <p class="text-body-1">Toplam</p>
        <v-text-field v-model="item.TotalPrice" readonly />
      </v-card-item>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue-darken-1" text @click="dialog = false">
          Kapat
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
