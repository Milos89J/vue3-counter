<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import country from "../data/country.json";

const route = useRoute();
const router = useRouter();

const countId = parseInt(route.params.id)

const count = country.find((c) => c.id === countId);

const showInformation = () => {
  if (countId === 4) return;
  return router.push(`/country/${countId}/information`)
}
</script>


<template>
  <div v-if="count">
    <h1>Country</h1>
    <p>{{ count.name }}</p>
    <p>{{ count.citizens }}</p>
    <p>{{ count.size }}</p>
    <button @click="showInformation">Click for information</button>
    <RouterView />
  </div>
  <div v-else>
    <h1>Information not found</h1>
  </div>
</template>

<style scoped>
</style>