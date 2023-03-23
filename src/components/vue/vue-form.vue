<template>
  <form>
    <label htmlFor="name">Enter Name</label>
    <input type="text" name="name" v-model="name" id="name" />
    <react-button :handleclick="handleClick" type="button">Submit</react-button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");

function handleClick(_event: React.MouseEvent<HTMLButtonElement>) {
  alert(`
    name: ${name.value}
  `);
}
</script>

<style scoped></style>
