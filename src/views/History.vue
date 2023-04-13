<template>
  <HeaderView />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import HeaderView from "../components/HeaderView.vue";
const route = useRoute();
const router = useRouter();
onMounted(() => {});
</script>
<style scoped></style>
