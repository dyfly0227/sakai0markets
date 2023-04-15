<template>
  <HeaderView />
  <div class="flex-middle">
    <div class="e-button" style="margin-right: 14px">Futures History</div>
    <div class="e-button bak-trans">Spot History</div>
  </div>
  <div class="tables-container">
    <div
      class="flex-middle"
      style="
        padding-left: 18px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      "
    >
      <div class="table-col" v-for="col of cols" :key="col">{{ col }}</div>
    </div>
    <div
      class="flex-col flex-middle flex-center"
      style="
        height: 150px;
        color: rgb(236, 232, 227);
        font-size: 16px;
        font-family: AkkuratLLWeb-Bold;
      "
    >
      <span>Perpetual futures are available on Optimism L2</span>
      <span style="cursor: pointer; text-decoration: underline"
        >Switch to L2</span
      >
    </div>
  </div>
</template>

<script setup>
import HeaderView from "../../components/HeaderView.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const cols = [
  "Date/Time",
  "Market",
  "Side",
  "Size",
  "Price",
  "P&L",
  "Fees",
  "Type",
];
onMounted(() => {});
</script>
<style scoped>
.e-button {
  height: 38px;
}
.bak-trans {
  background-color: transparent;
}
.bak-trans:hover {
  background: rgb(43, 42, 42);
}
.tables-container {
  margin-top: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
}
.table-col {
  line-height: 40px;
  color: rgb(169, 168, 166);
  font-family: AkkuratLLWeb-Regular;
  flex: 1;
  font-size: 12px;
}
</style>
