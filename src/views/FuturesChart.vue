<template>
  <div class="tradingview-widget-container">
    <div id="tradingview_f18df"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const props = defineProps({
  b: String,
});
const init = (val) => {
  new TradingView.widget({
    width: "100%",
    height: "100%",
    autosize: true,
    symbol: `BINANCE:${val}USDT`,
    interval: "D",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: true,
    container_id: "tradingview_f18df",
  });
};

watch(
  () => props.b,
  (val) => {
    setTimeout(() => {
      init(val);
    }, 0);
  },
  {
    immediate: true,
  }
);
onMounted(() => {});
</script>
<style scoped></style>
