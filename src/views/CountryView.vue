<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import country from "../data/country.json";

const route = useRoute();
const router = useRouter();

const countId = parseInt(route.params.id)

const count = country.find((c) => c.id === countId);
</script>


<template>
  <div>
    <h1>Country</h1>
    <p>{{ count.name }}</p>
    <p>{{ count.citizens }}</p>
    <p>{{ count.size }}</p>
    <button @click="router.push(`/country/${countId}/information`)">Click for information</button>
    <RouterView />
  </div>
</template>

<style scoped>
</style>