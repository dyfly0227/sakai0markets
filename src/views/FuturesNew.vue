<template>
  <HeaderView />
  <div class="flex-start flex-wrap">
    <div class="left-area flex-1">
      <div class="flex flex-wrap">
        <div
          class="chart-area flex-1"
          style="border: 1px solid rgba(132, 142, 156, 0.5)"
        >
          <!-- 表格上方 -->
          <div class="flex-middle">
            <div>
              <div class="drop-btn flex-middle" @click.stop="hideDrop = false">
                <!-- <img
                  :src="getAssetsFile(btnsConfig[cur].img)"
                  alt=""
                  width="31"
                  height="31"
                /> -->
                <div
                  class="flex-1"
                  style="margin-left: 10px; margin-right: 10px"
                >
                  <div
                    style="
                      font-family: AkkuratLLWeb-Regular;
                      font-size: 16px;
                      color: rgb(236, 232, 227);
                    "
                  >
                    {{ btnsConfig[cur].t1 }}USDT
                  </div>
                  <div
                    style="
                      font-family: AkkuratLLWeb-Regular;
                      font-size: 12.5px;
                      color: rgb(120, 120, 120);
                    "
                  >
                    Perpetual
                  </div>
                </div>
                <div>
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="#ECE8E3"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    class="sc-1f48b62-0 iCNzKN"
                  >
                    <path
                      d="M5.493 7.288a.6.6 0 0 1-.986 0L.457 1.442A.6.6 0 0 1 .948.5h8.102a.6.6 0 0 1 .493.942l-4.05 5.846Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div style="position: relative; z-index: 1000">
                <div class="drop-list" v-if="!hideDrop" @click.stop>
                  <input type="search" placeholder="search" />
                  <div class="flex condition">
                    <div
                      v-for="(c, index) of searchCondition"
                      :class="{ active: cIndex === index }"
                      @click="cIndex = index"
                    >
                      {{ c }}
                    </div>
                  </div>
                  <ul>
                    <li style="color: rgb(132, 142, 156); font-size: 10px">
                      <div class="col1">Symbols</div>
                      <div class="col2">Last Price</div>
                      <div class="col3">24%</div>
                      <!-- <div class="col4">Vol</div> -->
                    </li>
                    <li
                      v-for="(btn, index) of btnsConfig"
                      :key="btn.t1"
                      @click="selectThis(index)"
                    >
                      <div class="flex-middle col1">
                        <div
                          style="
                            font-family: AkkuratLLWeb-Regular;
                            font-size: 12px;
                            color: rgb(236, 232, 227);
                          "
                        >
                          {{ btn.t1 }}USDT
                          <span
                            style="color: rgb(132, 142, 156); font-size: 10px"
                            >Perpetual</span
                          >
                        </div>
                      </div>
                      <div
                        class="col2"
                        :class="Math.random() > 0.5 ? 'green' : 'red'"
                        style="
                          font-family: AkkuratLLWeb-Regular;
                          font-size: 10px;
                        "
                      >
                        {{ btn.p }}
                      </div>
                      <div
                        class="col3"
                        :class="Math.random() > 0.5 ? 'green' : 'red'"
                        style="
                          font-family: AkkuratLLWeb-Regular;
                          font-size: 10px;
                        "
                      >
                        0.00%
                      </div>
                      <!-- <div
                        class="col4"
                        style="
                          font-family: AkkuratLLWeb-Regular;
                          font-size: 12px;
                          color: rgb(236, 232, 227);
                        "
                      >
                        {{ btn.v }}
                      </div> -->
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              style="width: 140px; text-align: center; font-size: 24px"
              :class="dynamicClass"
            >
              {{ curPrice }}
            </div>
            <div class="flex-middle flex-wrap">
              <div class="chart-item">
                <div>Mark</div>
                <div>30,074.5</div>
              </div>
              <div class="chart-item">
                <div>Index</div>
                <div>30,074.5</div>
              </div>
              <div class="chart-item">
                <div>Funding / Countdown</div>
                <div>
                  <span style="color: rgb(215, 120, 67)">0.002% 04:21:22</span>
                </div>
              </div>
              <div class="chart-item">
                <div>24h Change</div>
                <div style="color: rgb(14, 203, 129)">94.5 +0.32%</div>
              </div>
              <div class="chart-item">
                <div>24h High</div>
                <div>30,480.0</div>
              </div>
              <div class="chart-item">
                <div>24h Low</div>
                <div>29,620.0</div>
              </div>
              <div class="chart-item">
                <div>24h Volume(BTC)</div>
                <div>526,270.515</div>
              </div>
            </div>
          </div>
          <!-- k线图 -->
          <div style="height: 640px">
            <FuturesChart :b="btnsConfig[cur].t1" />
          </div>
        </div>
        <div class="order-book">
          <div style="color: rgb(234, 236, 239); font-size: 14px">
            Order Book
          </div>
          <div class="order-cols" style="margin-top: 10px">
            <ul style="color: rgb(132, 142, 156)">
              <li>Price(USDT)</li>
              <li>Size(BTC)</li>
              <!-- <li>Sum(BTC)</li> -->
            </ul>
          </div>
          <div class="order-cols" v-for="item of datas.slice(0, 8)">
            <div
              class="back-red"
              :style="{ width: Math.random() * redWidth + '%' }"
            ></div>
            <ul>
              <li style="color: rgb(246, 70, 93)">
                {{ parseFloat(item[0]).toFixed(2) }}
              </li>
              <li style="color: rgb(183, 189, 198)">
                {{ parseFloat(item[1]).toFixed(3) }}
              </li>
            </ul>
          </div>
          <div
            class="current-color"
            :class="dynamicClass"
            style="font-size: 20px; line-height: 35px"
          >
            {{ curPrice }}
          </div>
          <div class="order-cols" v-for="item of datas.slice(8, 16)">
            <div
              class="back-green"
              :style="{ width: Math.random() * greenWidth + '%' }"
            ></div>
            <ul>
              <li style="color: rgb(14, 203, 129)">
                {{ parseFloat(item[0]).toFixed(2) }}
              </li>
              <li style="color: rgb(183, 189, 198)">
                {{ parseFloat(item[1]).toFixed(3) }}
              </li>
            </ul>
          </div>
          <div>
            <div
              style="
                color: rgb(234, 236, 239);
                font-size: 14px;
                border-top: 1px solid rgba(132, 142, 156, 0.5);
                padding-top: 10px;
                margin-top: 10px;
              "
            >
              Trades
            </div>
            <div class="order-cols" style="margin-top: 10px">
              <ul style="color: rgb(132, 142, 156)">
                <li>Price</li>
                <li>Amount</li>
                <!-- <li>Sum(BTC)</li> -->
              </ul>
            </div>
            <div class="order-cols" v-for="item of datas.slice(16, 22)">
              <ul>
                <li class="green" v-if="Math.random() > 0.5">
                  {{ parseFloat(item[0]).toFixed(2) }}
                </li>
                <li class="red" v-else>
                  {{ parseFloat(item[0]).toFixed(2) }}
                </li>
                <li style="color: rgb(183, 189, 198)">
                  {{ parseFloat(item[1]).toFixed(3) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="left-bottom"></div>
    </div>
    <div class="right-area">
      <FuturesRightNew></FuturesRightNew>
    </div>
  </div>
  <div class="switch-tabs">
    <div class="tabs-title" style="padding-left: 10px">
      <ul class="flex flex-wrap">
        <li
          v-for="(tab, index) of tabs"
          :key="tab"
          :class="{ active: tabIndex === index }"
          @click="tabIndex = index"
        >
          {{ tab }}
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <div style="padding: 10px 20px">
        <div
          style="
            font-size: 12px;
            color: rgb(234, 236, 239);
            background-color: rgb(71, 77, 87);
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-radius: 4px;
          "
        >
          Futures will be live on April 29, 2023.
        </div>
      </div>
      <NewTable :cols="tableCols[tabIndex]" :content="tabContents[tabIndex]" />
    </div>
    <div class="margin-ratio">
      <div style="color: rgb(234, 236, 239); font-size: 14px">Margin Ratio</div>
      <div
        style="
          font-size: 12px;
          color: rgb(234, 236, 239);
          background-color: rgb(71, 77, 87);
          height: 24px;
          text-align: center;
          line-height: 24px;
          margin: 20px 0;
        "
      >
        Single-Asset Mode
      </div>
      <div class="no-name">
        <ul>
          <li>
            <div>Margin Ratio</div>
            <span style="font-size: 18px; color: rgb(14, 203, 129)">0.00%</span>
          </li>
          <li>
            <div>Maintenance Margin</div>
            <span>0.0000 USDT</span>
          </li>
          <li>
            <div>Margin Balance</div>
            <span>0.0000 USDT</span>
          </li>
        </ul>
      </div>

      <div
        style="
          color: rgb(234, 236, 239);
          font-size: 14px;
          border-top: 1px solid rgba(132, 142, 156, 0.5);
          padding-top: 10px;
          margin-top: 10px;
        "
      >
        Assets
      </div>
      <ul class="assets-area">
        <li>Buy Crypto</li>
        <li>Convert</li>
        <li>Transfer</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getAssetsFile } from "../utils/index";
import HeaderView from "../components/HeaderView.vue";
import btnsConfig from "../config/home";
import FuturesChart from "./FuturesChart.vue";
import FuturesRightNew from "./FuturesRightNew.vue";
import NewTable from "../components/NewTable.vue";
import { tableCols, tabContents } from "../config/tableCols";
const cur = ref(2);
const route = useRoute();
const router = useRouter();
const hideDrop = ref(true);
const selectThis = (index) => {
  cur.value = index;
};

const searchCondition = [
  "All",
  "AI",
  "BUSD",
  "CEX",
  "DAO",
  "DeFi",
  "DEX",
  "Dragon",
];
const cIndex = ref(0);

// 底部表格
const tabs = [
  "Potitions(0)",
  "Order History",
  "Trade History",
  "Transaction History",
  "Positon Hisotry",
];
const tabIndex = ref(0);

const redWidth = ref(100);
const greenWidth = ref(100);

// 动态数据
let timer = null;
const datas = ref([]);
const dynamicClass = ref("white");
const curPrice = ref(0);
const getData = async () => {
  const symbol = btnsConfig[cur.value].t1 + "USDT";
  const response = await fetch(
    "https://api.binance.com/api/v3/depth?limit=50&symbol=" + symbol
  );
  const jsonData = await response.json();
  datas.value = jsonData.asks;
  const price = parseFloat(jsonData["asks"][10][0]).toFixed(2);
  if (curPrice.value !== 0) {
    dynamicClass.value =
      curPrice.value > price
        ? "green"
        : curPrice.value === price
        ? "white"
        : "red";
  }
  curPrice.value = price;
  redWidth.value = Math.floor(Math.random() * 100);
  greenWidth.value = Math.floor(Math.random() * 100);
};
onMounted(() => {
  document.addEventListener("click", () => {
    hideDrop.value = true;
  });
  const q = router.currentRoute.value.query;
  if (q["b"]) {
    cur.value = btnsConfig.findIndex((item) => item.t1 === q["b"]);
  }
  timer = setInterval(() => {
    getData();
  }, 500);
});
onUnmounted(() => {
  clearInterval(timer);
});
</script>
<style scoped>
.drop-btn {
  /* width: 120px; */
  box-sizing: border-box;
  /* padding-left: 8px; */
  padding-right: 15px;
  cursor: pointer;
  height: 53px;
  /* background: rgb(37, 37, 37); */
}
.drop-list {
  position: absolute;
  left: 0;
  top: 10px;
  width: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  background-color: rgb(18, 22, 28);
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
}
.drop-list::-webkit-scrollbar {
  display: none;
}
.drop-list input {
  border: none;
  outline: 0;
  background-color: rgb(43, 49, 57);
  display: block;
  width: 100%;
  height: 24px;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 0 5px;
  color: rgb(236, 232, 227);
  font-size: 10px;
}
.drop-list .condition {
  margin-bottom: 10px;
}
.drop-list .condition > div {
  font-size: 10px;
  color: rgb(132, 142, 156);
  cursor: pointer;
  margin: 0 4px;
}
.drop-list .condition > div.active,
.drop-list .condition > div:hover {
  color: rgb(240, 185, 11);
}
.drop-list ul li {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 24px;
  cursor: pointer;
  justify-content: space-between;
  padding: 0 5px;
}
.drop-list ul li:hover {
  background: rgb(43, 42, 42);
}
.drop-list ul li:first-child {
  border: none;
}
.drop-list ul li:first-child:hover {
  background: rgb(18, 22, 28);
}
.col1 {
  width: 170px;
}
.col2 {
  width: 70px;
}
.col3 {
  width: 80px;
  text-align: right;
}
.col4 {
  width: 70px;
}
.chart-item {
  padding: 5px;
}
.chart-item div {
  font-size: 12px;
  color: rgb(234, 236, 239);
}
.chart-item div:first-child {
  color: rgb(132, 142, 156);
  font-size: 10px;
  margin-bottom: 2px;
}
.order-book {
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid rgba(132, 142, 156, 0.5);
  border-left: none;
}
.order-cols {
  position: relative;
}
.order-cols ul {
  display: flex;
  align-items: center;
}
.order-cols ul li {
  width: 86px;
  flex: 1;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
}
.back-red {
  position: absolute;
  z-index: -1;
  width: 100%;
  right: 0;
  height: 100%;
  background-color: rgba(246, 70, 93, 0.1);
}
.back-green {
  position: absolute;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(14, 203, 129, 0.1);
}
.order-cols ul li:last-child {
  text-align: center;
}
.white {
  color: rgb(234, 236, 239);
}
.green {
  color: rgb(14, 203, 129);
}
.red {
  color: rgb(246, 70, 93);
}
.right-area {
  padding: 15px;
  background-color: #1e2329;
  box-sizing: border-box;
  height: 692px;
  width: 280px;
}

.tabs-title ul li {
  color: rgb(132, 142, 156);
  padding-right: 16px;
  font-size: 14px;
  cursor: pointer;
  line-height: 40px;
}
.tabs-title ul li.active,
.tabs-title ul li:hover {
  color: rgb(240, 185, 11);
}
.switch-tabs {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-right: 280px;
  border: 1px solid rgba(132, 142, 156, 0.5);
  transform: translateY(-1px);
}
.margin-ratio {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  box-sizing: border-box;
  padding: 15px;
  min-height: 500px;
  height: 100%;
  border-left: 1px solid rgba(132, 142, 156, 0.5);
}

.no-name ul li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.no-name ul li div {
  color: rgb(132, 142, 156);
  font-size: 10px;
}

.no-name ul li span {
  color: #eaecef;
  font-size: 12px;
}

.assets-area {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.assets-area li {
  margin: 0 5px;
  background-color: rgb(71, 77, 87);
  text-align: center;
  line-height: 24px;
  border-radius: 4px;
  color: rgb(234, 236, 239);
  cursor: pointer;
  font-size: 10px;
  flex: 1;
}
.assets-area li:hover {
  background-color: rgb(43, 49, 57);
}

@media (max-width: 600px) {
  .order-book {
    width: 100vw;
  }
  .switch-tabs {
    padding-right: 0;
  }
  .chart-area {
    width: 100vw;
  }
  .right-area {
    width: 100vw;
  }
  .drop-list {
    width: 100vw;
  }
  .margin-ratio {
    width: 100%;
    top: 100%;
  }
}
</style>
