<template>
  <div class="market-container">
    <div class="e-button">Futures Markets</div>
    <div :style="{ width: tw }" style="overflow-x: auto" class="hide-scroll">
      <div class="tables-container" style="min-width: 820px">
        <div class="table-row table-header">
          <div
            class="col"
            v-for="(col, index) of cols"
            :key="'col' + index"
            :class="'col-' + (index + 1)"
          >
            {{ col.title }}
            <span v-if="col.sort"
              ><svg
                width="5"
                height="5"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                class="sc-352a9464-8 dMixWA"
              >
                <path
                  d="M13.5 12.5 8 7l-5.5 5.5L1 11l7-7 7 7-1.5 1.5Z"
                  fill="currentColor"
                ></path></svg
              ><svg
                width="5"
                height="5"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                class="sc-352a9464-7 djtXPH"
              >
                <path
                  d="M2.5 4 8 9.5 13.5 4 15 5.5l-7 7-7-7L2.5 4Z"
                  fill="currentColor"
                ></path></svg
            ></span>
          </div>
        </div>
        <div
          class="table-row table-body"
          v-for="(config, index) of marketConfig"
          @click="toFutures(config.t1)"
          :key="config.t1"
        >
          <div class="col col-1">
            <div class="flex-middle">
              <img
                :src="getAssetsFile(config.img)"
                alt=""
                width="30"
                height="30"
              />
              <div style="margin-left: 10px">
                <div class="btn-t1">{{ config.t1 }}</div>
                <div class="btn-t2">{{ config.t2 }}</div>
              </div>
              <div class="config-k">{{ config.k }}</div>
            </div>
          </div>
          <div class="col col-2">
            <span
              class="col-price"
              v-if="store.coins[config.k1] && store.coins[config.k1].p"
              >${{ getFullNum(store.coins[config.k1].p) }}</span
            >
            <span v-else class="col-price">-</span>
          </div>
          <div class="col col-3" style="color: rgb(236, 232, 227)">
            <span
              :class="
                store.coins[config.k1].timeZoneRate < 0
                  ? 'text-green'
                  : 'text-red'
              "
              v-if="store.coins[config.k1] && store.coins[config.k1].r"
              >{{ getFullNum(store.coins[config.k1].r) }}%</span
            >
            <span v-else>-</span>
          </div>
          <div class="col col-4">
            <span
              :class="
                store.coins[config.k1].timeZoneRate < 0
                  ? 'text-green'
                  : 'text-red'
              "
              v-if="
                store.coins[config.k1] && store.coins[config.k1].timeZoneRate
              "
              >{{ store.coins[config.k1].timeZoneRate }}%</span
            >
            <span v-else style="color: rgb(236, 232, 227)">0.0%</span>
          </div>
          <div class="col col-5">
            <div>
              <div class="text-green">-</div>
              <div class="text-red">-</div>
            </div>
          </div>
          <div class="col col-6" style="color: rgb(236, 232, 227)">
            <span v-if="store.coins[config.k1] && store.coins[config.k1].v">{{
              getFullNum(store.coins[config.k1].v)
            }}</span>
            <span v-else>0.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, onUnmounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import marketConfig from "../../config/markets";
import { getAssetsFile } from "../../utils/index";
import socket from "../../utils/socket";
import useTradeStore from "../../store/index";
const tradeStore = useTradeStore();

const store = useTradeStore();
const route = useRoute();
const router = useRouter();
const randomColor = (index) => {
  return index + Math.random() > index + 0.5;
};
const toFutures = (e) => {
  router.push("/futures/" + e.replace("-PERP", "USDT"));
};

function getFullNum(num) {
  //处理非数字
  if (isNaN(num)) {
    return num;
  }
  //处理不需要转换的数字
  var str = "" + num;
  if (!/e/i.test(str)) {
    return num;
  }
  return num.toFixed(18).replace(/\.?0+$/, "");
}
const cols = [
  {
    title: "Market",
    sort: false,
  },
  {
    title: "Market Price",
    sort: true,
  },
  {
    title: "24H Change",
    sort: true,
  },
  {
    title: "1H Funding Rate",
    sort: true,
  },
  {
    title: "Open Interest",
    sort: true,
  },
  {
    title: "24H Volume",
    sort: true,
  },
];
const tw = ref("auto");
const price = reactive({
  BTC: "",
  ETH: "",
  BNB: "",
  DOGE: "",
  OGGY: "",
});
const getData = async (s) => {
  const symbol = s + "USDT";
  const response = await fetch(
    "https://api.binance.com/api/v3/depth?limit=1&symbol=" + symbol
  );
  const jsonData = await response.json();
  const p = parseFloat(jsonData["asks"][0][0]).toFixed(2);
  price[s] = p;
};
let socketObj;
onMounted(() => {
  const sw = window.screen.width;
  if (sw < 600) {
    tw.value = sw - 50 + "px";
  }

  socket(
    "wss://wbs.mexc.com/ws",
    (res) => {
      if (res.c && res.c == "spot@public.zone.overview@UTC+8") {
        tradeStore.setCoins(res.d);
      }
    },
    (socket) => {
      socketObj = socket;
      socketObj.send(
        JSON.stringify({
          method: "SUBSCRIPTION",
          params: ["spot@public.zone.overview@UTC+8"],
          id: 2,
        })
      );
    }
  );
});
onBeforeUnmount(() => {
  socketObj.close();
});
</script>
<style scoped>
.e-button {
  height: 38px;
  font-size: 13px;
  width: 140px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.tables-container {
  border: 1px solid #2d2d3d;
  border-radius: 5px;
}
.table-row {
  width: 100%;
  display: flex;
  font-size: 12px;
  font-family: AkkuratMonoLLWeb-Regular;
}
.table-row .col {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 1;
}
.table-row .col-1 {
  padding-left: 18px;
  width: 190px;
}
.table-row .col-2 {
  width: 130px;
}
.table-row .col-3 {
  width: 105px;
}
.table-row .col-4 {
  width: 125px;
}
.table-row .col-5 {
  width: 125px;
}
.table-row .col-6 {
  width: 125px;
}
.table-row .col span {
  display: flex;
  margin-left: 5px;
  flex-direction: column;
}
.table-header {
  text-transform: capitalize;
  color: rgb(169, 168, 166);
  line-height: 1.4;
  margin: 0px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 10px 10px 0 0;
  height: 40px;
}

.btn-t1 {
  font-size: 14px;
  color: #f7f7f7;
  margin-bottom: -4px;
  font-family: AkkuratLLWeb-Bold;
}
.btn-t2 {
  color: rgb(120, 120, 120);
  font-size: 12px;
  font-family: AkkuratLLWeb-Regular;
}
.col-price {
  font-size: 13px;
  font-family: "Relative Pro";
  color: #f7f7f7;
}
.text-red {
  color: rgb(239, 104, 104);
}
.text-green {
  color: rgb(127, 212, 130);
}
.table-body {
  height: 52px;
  border-top: 1px solid #2d2d3d;
  cursor: pointer;
  background-color: #1c1c28;
}
.table-body:hover {
  background: #232334;
}
.config-k {
  font-family: Relative Pro;
  font-weight: 500;
  -webkit-font-feature-settings: "zero" 0;
  font-feature-settings: "zero" 0;
  -webkit-user-select: none;
  user-select: none;
  font-size: 10px;
  line-height: 16px;
  display: inline-flex;
  background-color: #303044;
  border-radius: 2px;
  color: #c3c2d4;
  padding: 1px 4px 1px 5px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-left: 4px;
}
</style>
