<template>
  <HeaderView />
  <div style="border: 1px solid rgba(132, 142, 156, 0.5); border-radius: 8px">
    <NewTable
      :cols="[
        'Txn Hash',
        'Method',
        'Block',
        'Age',
        'Form',
        'To',
        'Value',
        '[Txn Fee]',
      ]"
      content="History will be live on April 29, 2023"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import HeaderView from "../components/HeaderView.vue";
import NewTable from "../components/NewTable.vue";
const route = useRoute();
const router = useRouter();
onMounted(() => {});
</script>
<style scoped></style>
