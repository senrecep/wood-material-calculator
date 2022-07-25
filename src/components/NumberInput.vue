<script setup lang="ts">
import { defineProps, ref, defineEmits } from "vue";
// var emit = defineEmits(["changeValue"]);
var emit = defineEmits<{ (e: "changeValue", value: number): void }>();

const props = defineProps({
  value: {
    type: Number,
    default: 0,
    required: true,
  },
  label: {
    type: String,
    default: "",
    required: true,
  },
  suffix: {
    type: String,
    default: "",
    required: false,
  },
});

console.log(props.label);

const value = ref(props.value);
const handleClear = () => {
  emit("changeValue", (value.value = 0));
};
const handleChange = () => {
  emit("changeValue", value.value);
};
</script>
<template>
  <v-text-field
    class="my-2"
    :hide-details="true"
    :label="label"
    :placeholder="label"
    v-model="value"
    @change="handleChange"
    @click:clear="handleClear"
    :suffix="suffix"
    type="number"
    single-line
    clearable
  ></v-text-field>
</template>
