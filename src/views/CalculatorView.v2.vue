<script setup lang="ts">
import { ref } from "vue";
import CalculatorTableItem from "@/components/CalculatorTableItem.v2.vue";
import CalculationResult from "@/components/CalculationResult.vue";
import { CalculationItem } from "../types/CalculationItem";
const calculationItems = ref<CalculationItem[]>([]);
calculationItems.value.push(new CalculationItem());
const handleDelete = (id: string) => {
  calculationItems.value = calculationItems.value.filter(
    (item) => item.Id !== id
  );
};
const addItem = () => {
  calculationItems.value.push(new CalculationItem());
};
</script>

<template>
  <v-container fluid>
    <div class="d-flex justify-center my-2">
      <v-btn @click="addItem" class="mx-2" icon color="indigo">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </div>

    <calculation-result key="result" :param="calculationItems" />

    <v-table fixed-header height="80vh">
      <thead>
        <tr>
          <th class="text-left"></th>
          <th class="text-left">Hesaplama</th>
        </tr>
      </thead>
      <tbody>
        <calculator-table-item
          v-for="item in calculationItems"
          :key="item.Id"
          :param="item"
          @deleteItem="handleDelete"
        />
      </tbody>
    </v-table>
  </v-container>
</template>

<style>
.v-text-field {
  min-width: 200px;
}
</style>
