<template>
  <div class="section-1">
    <div style="color: rgb(120, 120, 120); font-size: 16px">
      Portfolio Value
    </div>
    <div
      style="
        color: rgb(236, 232, 227);
        font-family: AkkuratMonoLLWeb-Bold;
        font-size: 27px;
        margin-top: 10px;
      "
    >
      $0.00
    </div>
  </div>
  <div class="flex-middle" style="margin: 16px 0">
    <div
      class="tab-item"
      style="margin-right: 16px"
      :class="{ active: cur === 0 }"
      @click="cur = 0"
    >
      <div class="flex-middle">
        <span class="circle"></span>
        Isolated Margin
      </div>
      <span>$0.00</span>
    </div>
    <div class="tab-item" :class="{ active: cur === 1 }" @click="cur = 1">
      <div class="flex-middle">Spot Balances</div>
      <span>$0.00</span>
    </div>
  </div>
  <div v-if="cur === 0" class="e-button">
    Futures will be live on April 1,2023.
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
  <MarketsView></MarketsView>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import MarketsView from "./MarketsView.vue";
const route = useRoute();
const router = useRouter();
const cur = ref(0);
const cols = [
  "Market",
  "Side",
  "Size",
  "Leverage",
  "Unrealized P&L",
  "Avg. Entry Price",
  "Liq. Price",
];
onMounted(() => {});
</script>
<style scoped>
.section-1 {
  padding: 26px;
  box-sizing: border-box;
  height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  font-family: AkkuratLLWeb-Bold;
}
.tab-item {
  padding: 10px 14px;
  font-size: 17px;
  color: rgb(236, 232, 227);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
}
.tab-item > div .circle {
  width: 8px;
  height: 8px;
  border: 1px solid rgb(120, 120, 120);
  border-radius: 50%;
  margin-right: 7px;
}
.tab-item.active,
.tab-item:hover {
  background: rgb(37, 37, 37);
}
.tab-item.active > div,
.tab-item:hover > div {
  color: rgb(236, 232, 227);
}
.tab-item.active > span,
.tab-item:hover > span {
  color: rgb(74, 176, 129);
}
.tab-item > div {
  font-size: 13px;
  color: rgb(120, 120, 120);
}
.tab-item > span {
  color: rgb(120, 120, 120);
  margin-top: 4px;
  font-size: 18px;
  font-family: AkkuratMonoLLWeb-Bold;
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
