<template>
  <HeaderView />
  <div class="container">
    <div class="flex-middle">
      <div
        class="e-button trans bold"
        :class="{ active: cur === 0 }"
        @click="cur = 0"
      >
        Top
      </div>
      <div
        class="e-button trans bold"
        :class="{ active: cur === 1 }"
        @click="cur = 1"
      >
        Bottom
      </div>
      <div class="search-area">
        <input type="search" placeholder="Search..." />
        <span>+</span>
      </div>
    </div>
    <div class="border" style="margin-top: 10px">
      <div class="t-1">Top Traders</div>
      <div class="flex-middle flex-space t-2">
        <div class="items" v-for="col of cols" :key="col">{{ col }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import HeaderView from "../components/HeaderView.vue";
const cur = ref(0);
const cols = [
  "Rank",
  "Trader",
  "Total Trades",
  "Liquidations",
  "Total Volume",
  "P&L",
];
const route = useRoute();
const router = useRouter();
onMounted(() => {});
</script>
<style scoped>
.container {
  margin: 20px auto;
  max-width: 1032px;
}
.search-area {
  flex: 1;
  height: 35px;
}
.e-button {
  height: 35px;
  font-size: 12px;
  margin-right: 5px;
}
.search-area input {
  width: 100%;
  min-width: 0px;
  font-family: AkkuratLLWeb-Regular;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgb(11, 11, 11);
  font-size: 18px;
  color: rgb(236, 232, 227);
  outline: none;
  position: relative;
  height: 100%;
  text-indent: 16px;
  border-radius: 8px;
  padding: 10px 15px;
}

.t-1 {
  padding: 0 18px;
  line-height: 40px;
  color: rgb(169, 168, 166);
  font-family: AkkuratLLWeb-Regular;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 12px;
  height: 40px;
}
.t-2 {
  padding: 0 18px;
  text-transform: capitalize;
  color: rgb(169, 168, 166);
  font-size: 13px;
  height: 40px;
  line-height: 40px;
}
</style>
