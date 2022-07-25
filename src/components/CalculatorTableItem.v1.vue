<script lang="ts" setup>
import { defineProps, computed, watch, defineEmits } from "vue";
import NumberInput from "@/components/NumberInput.vue";
import { CalculationItem } from "types/CalculationItem";
import { formatTry } from "../utils/Formaters";

const emit = defineEmits<{
  (e: "deleteItem", value: string): void;
}>();

const props = defineProps<{
  param: CalculationItem;
}>();

const item = computed(() => props.param);
watch(item.value, () => {
  item.value.Calculate();
});

const handleDelete = () => {
  emit("deleteItem", item.value.Id);
};
</script>

<template>
  <tr>
    <td>
      <v-btn @click="handleDelete" class="mx-2" icon small>
        <v-icon> mdi-delete-outline </v-icon>
      </v-btn>
    </td>
    <td>
      <number-input
        label="Kalınlık"
        :value="item.Thickness"
        @change-value="item.Thickness = $event"
      />
    </td>
    <td>
      <number-input
        label="En"
        :value="item.Width"
        @change-value="item.Width = $event"
      />
    </td>
    <td>
      <number-input
        label="Boy"
        :value="item.Height"
        @change-value="item.Height = $event"
      />
    </td>
    <td>{{ item.SingleCubicMeter / 1000 }}</td>
    <td>
      <number-input
        label="Adet"
        :value="item.Count"
        @change-value="item.Count = $event"
      />
    </td>
    <td>{{ item.TotalCubicMeter / 1000 }}</td>
    <td>
      <number-input
        label="Fiyat"
        :value="item.UnitPrice"
        @change-value="item.UnitPrice = $event"
        suffix="₺"
      />
    </td>
    <td>{{ formatTry(item.TotalPrice) }}</td>
  </tr>
</template>
