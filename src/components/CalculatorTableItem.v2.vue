<script lang="ts" setup>
import { defineProps, computed, watch, defineEmits } from "vue";
// import NumberInput from "@/components/NumberInput.vue";
import { CalculationItem } from "types/CalculationItem";
import CalculatorModal from "@/components/CalculatorModal.vue";
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
      <div class="d-flex">
        <v-btn @click="handleDelete" class="mx-2" icon small>
          <v-icon> mdi-delete-outline </v-icon>
        </v-btn>

        <calculator-modal :param="item" />
      </div>
    </td>
    <td>
      <p class="text-md-body-1 py-3">
        <span class="text-no-wrap">
          {{ item.Thickness }}cm * {{ item.Width }}cm * {{ item.Height }}cm ={{
            item.SingleCubicMeter / 1000
          }}m<sup>3</sup>
        </span>
        <br />
        <span class="text-no-wrap">
          {{ item.Count }} adet * {{ item.SingleCubicMeter / 1000 }}m<sup
            >3</sup
          >
          ={{ item.TotalCubicMeter / 1000 }}m<sup>3</sup>
        </span>
        <br />
        <span class="text-no-wrap">
          {{ formatTry(item.UnitPrice) }} *
          {{ item.TotalCubicMeter / 1000 }}m<sup>3</sup> =
          {{ formatTry(item.TotalPrice) }}
        </span>
      </p>
    </td>
  </tr>
</template>
