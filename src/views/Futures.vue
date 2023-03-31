<template>
  <HeaderView />
  <div class="flex-start flex-wrap">
    <div class="left-area" style="margin: 0 10px">
      <div class="drop-btn flex-middle border" @click.stop="hideDrop = false">
        <img
          :src="getAssetsFile(btnsConfig[cur].img)"
          alt=""
          width="31"
          height="31"
        />
        <div class="flex-1" style="margin-left: 10px">
          <div
            style="
              font-family: AkkuratLLWeb-Regular;
              font-size: 16px;
              color: rgb(236, 232, 227);
            "
          >
            {{ btnsConfig[cur].t1 }}-PERP
          </div>
          <div
            style="
              font-family: AkkuratLLWeb-Regular;
              font-size: 12.5px;
              color: rgb(120, 120, 120);
            "
          >
            {{ btnsConfig[cur].t2 }} Perpetual
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
      <div style="position: relative">
        <div class="drop-list border" v-if="!hideDrop">
          <ul>
            <li
              v-for="(btn, index) of btnsConfig"
              :key="btn.t1"
              @click="selectThis(index)"
            >
              <img
                :src="getAssetsFile(btn.img)"
                alt=""
                width="25"
                height="25"
              />
              <div
                style="
                  font-family: AkkuratLLWeb-Regular;
                  font-size: 14px;
                  color: rgb(236, 232, 227);
                  margin-left: 5px;
                  width: 100px;
                  flex: 1;
                "
              >
                {{ btn.t1 }}-PERP
              </div>
              <div
                style="
                  font-family: AkkuratLLWeb-Regular;
                  font-size: 14px;
                  color: rgb(127, 212, 130);
                  width: 90px;
                  flex: 1;
                "
              >
                {{ btn.p }}
              </div>
              <div
                style="
                  font-family: AkkuratLLWeb-Regular;
                  font-size: 14px;
                  color: rgb(127, 212, 130);
                "
              >
                0.00%
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border" style="margin: 16px 0; padding: 10px">
        <div
          class="flex-middle"
          style="
            color: rgb(236, 232, 227);
            font-size: 13px;
            font-family: AkkuratMonoLLWeb-Regular;
          "
        >
          <span>51%</span>
          <div
            class="flex-1"
            style="color: rgb(120, 120, 120); text-align: center"
          >
            Skew
          </div>
          <span>49%</span>
        </div>
        <div class="flex-middle" style="margin-top: 5px">
          <div
            style="
              width: 51%;
              height: 9px;
              background-color: rgb(239, 104, 104);
            "
          ></div>
          <div
            style="
              width: 49%;
              height: 9px;
              background-color: rgb(127, 212, 130);
            "
          ></div>
        </div>
      </div>

      <div class="border" style="margin-bottom: 10px">
        <div
          style="
            font-size: 13px;
            color: rgb(236, 232, 227);
            padding: 20px 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          "
        >
          Trade History
        </div>
        <div
          class="flex-middle flex-around"
          style="
            font-size: 13px;
            color: rgb(169, 168, 166);
            height: 40px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          "
        >
          <span>Amount</span>
          <span>Price</span>
          <span>Time</span>
        </div>
        <div style="height: 600px"></div>
      </div>
    </div>
    <div class="flex-1" style="margin: 0 10px">
      <div class="border">
        <ul
          class="flex-middle flex-space mobile-wrap"
          style="min-height: 55px; padding: 0 15px"
        >
          <li>
            <div class="c-gray">Market Price</div>
            <div class="c-red">$0.9678</div>
          </li>
          <li>
            <div class="c-gray">Index Price</div>
            <div class="c-white">$0.9690</div>
          </li>
          <li>
            <div class="c-gray">24H Change</div>
            <div class="c-white">-</div>
          </li>
          <li>
            <div class="c-gray">1H Funding Rate</div>
            <div class="c-green">0.005533%</div>
          </li>
          <li>
            <div class="c-gray">Open Interest (L)</div>
            <div class="c-white">$14K / $48K</div>
          </li>
          <li>
            <div class="c-gray">Open Interest (S)</div>
            <div class="c-white">$10K / $48K</div>
          </li>
        </ul>
      </div>
      <!-- k线图 -->
      <div style="height: 500px; margin-top: 15px">
        <FuturesChart :b="btnsConfig[cur].t1" />
      </div>

      <div class="flex-space btns-area flex-wrap">
        <div class="flex-middle flex-wrap">
          <div
            class="e-button trans"
            :class="{ active: btnIndex === 0 }"
            @click="btnIndex = 0"
            style="margin-left: 0"
          >
            <div>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5.5A.5.5 0 0 1 2 1v9a.5.5 0 0 1-1 0V1a.5.5 0 0 1 .5-.5Z"
                  fill="#787878"
                ></path>
                <path
                  d="M0 3.4c0-.22.18-.4.4-.4h2.2c.22 0 .4.18.4.4v4.2a.4.4 0 0 1-.4.4H.4a.4.4 0 0 1-.4-.4V3.4Z"
                  fill="#787878"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 4v3h1V4H1ZM.4 3a.4.4 0 0 0-.4.4v4.2c0 .22.18.4.4.4h2.2a.4.4 0 0 0 .4-.4V3.4a.4.4 0 0 0-.4-.4H.4ZM5.5.5A.5.5 0 0 1 6 1v9a.5.5 0 0 1-1 0V1a.5.5 0 0 1 .5-.5Z"
                  fill="#787878"
                ></path>
                <path
                  d="M4 2.4c0-.22.18-.4.4-.4h2.2c.22 0 .4.18.4.4v2.2a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4V2.4Z"
                  fill="#787878"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 3v1h1V3H5Zm-.6-1a.4.4 0 0 0-.4.4v2.2c0 .22.18.4.4.4h2.2a.4.4 0 0 0 .4-.4V2.4a.4.4 0 0 0-.4-.4H4.4ZM9.5.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V1a.5.5 0 0 1 .5-.5Z"
                  fill="#787878"
                ></path>
                <path
                  d="M8 4.4c0-.22.18-.4.4-.4h2.2c.22 0 .4.18.4.4v4.2a.4.4 0 0 1-.4.4H8.4a.4.4 0 0 1-.4-.4V4.4Z"
                  fill="#787878"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 5v3h1V5H9Zm-.6-1a.4.4 0 0 0-.4.4v4.2c0 .22.18.4.4.4h2.2a.4.4 0 0 0 .4-.4V4.4a.4.4 0 0 0-.4-.4H8.4Z"
                  fill="#787878"
                ></path>
              </svg>
            </div>
            Position
          </div>
          <div
            class="e-button trans"
            :class="{ active: btnIndex === 1 }"
            @click="btnIndex = 1"
          >
            <div>
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5.75h-6A1.5 1.5 0 0 0 0 2.25v7a1.5 1.5 0 0 0 1.5 1.5h6A1.5 1.5 0 0 0 9 9.25v-7A1.5 1.5 0 0 0 7.5.75ZM1 2.25a.5.5 0 0 1 .5-.5H3v-.4a.1.1 0 0 1 .1-.1h2.8a.1.1 0 0 1 .1.1v.4h1.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-7Z"
                  fill="#787878"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.1.25h2.8A1.1 1.1 0 0 1 7 1.35v.8a1.1 1.1 0 0 1-1.1 1.1H3.1A1.1 1.1 0 0 1 2 2.15v-.8A1.1 1.1 0 0 1 3.1.25Zm0 1a.1.1 0 0 0-.1.1v.8a.1.1 0 0 0 .1.1h2.8a.1.1 0 0 0 .1-.1v-.8a.1.1 0 0 0-.1-.1H3.1Z"
                  fill="#787878"
                ></path>
              </svg>
            </div>
            Order
          </div>
          <div
            class="e-button trans"
            :class="{ active: btnIndex === 2 }"
            @click="btnIndex = 2"
          >
            <div>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  d="M5.5 1.376A4.125 4.125 0 1 1 1.375 5.5.687.687 0 0 0 0 5.5a5.5 5.5 0 1 0 2.292-4.468V.688a.688.688 0 0 0-1.375 0V2.98c0 .38.308.687.687.687H2.98a.688.688 0 1 0 0-1.375h-.072A4.107 4.107 0 0 1 5.5 1.376Zm.458 2.062a.687.687 0 0 0-1.375 0V5.73c0 .38.308.687.688.687h1.375a.687.687 0 0 0 0-1.375h-.688V3.438Z"
                  fill="#787878"
                ></path>
              </svg>
            </div>
            Trade
          </div>
          <div
            class="e-button trans"
            :class="{ active: btnIndex === 3 }"
            @click="btnIndex = 3"
          >
            <div>
              <svg
                width="11"
                height="11"
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  d="M9.389 7.5v-3H.722V3H9.39V0L13 3.75 9.389 7.5ZM3.61 15 0 11.25 3.611 7.5v3h8.667V12H3.61v3Z"
                ></path>
              </svg>
            </div>
            Transfers
          </div>
        </div>
        <div class="flex">
          <div class="e-button trans">
            <div>
              <svg
                fill="none"
                height="14"
                viewBox="0 0 14 14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  d="M12.444 0H1.556C.7 0 0 .7 0 1.556v10.888C0 13.3.7 14 1.556 14h10.888C13.3 14 14 13.3 14 12.444V1.556C14 .7 13.3 0 12.444 0zM7.778 3.189l.855-.856 1.09 1.09 1.088-1.09.856.856-1.09 1.089 1.09 1.089-.856.855-1.089-1.089-1.089 1.09-.855-.856 1.089-1.09zm-5.29.467h3.89v1.166h-3.89zm4.123 6.455H5.056v1.556H3.889V10.11H2.333V8.944H3.89V7.39h1.167v1.555H6.61zm5.056.933h-3.89V9.878h3.89zm0-1.866h-3.89V8.01h3.89z"
                  fill="#454545"
                ></path>
              </svg>
            </div>
            Calculator
          </div>
          <div class="e-button disabled">
            <div>
              <svg
                width="10"
                height="13"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  d="M4.566 1.12a.613.613 0 0 1 .442-.19c.165 0 .324.069.442.19l1.875 1.95a.664.664 0 0 1-.008.912.613.613 0 0 1-.437.19.612.612 0 0 1-.44-.182l-.807-.84-.008 5.77a.663.663 0 0 1-.183.46.613.613 0 0 1-.442.19.613.613 0 0 1-.442-.19.663.663 0 0 1-.183-.46l.008-5.77-.808.84a.612.612 0 0 1-.44.182.613.613 0 0 1-.437-.19.664.664 0 0 1-.008-.911l1.876-1.95ZM0 6.57c0-.345.132-.676.366-.92.235-.244.552-.38.884-.38H2.5c.166 0 .325.068.442.19a.663.663 0 0 1 .183.46.663.663 0 0 1-.183.46.613.613 0 0 1-.442.19H1.25v4.2h7.5v-4.2H7.5a.613.613 0 0 1-.442-.19.663.663 0 0 1-.183-.46c0-.173.066-.338.183-.46a.613.613 0 0 1 .442-.19h1.25c.332 0 .65.136.884.38.234.244.366.575.366.92v4.2c0 .344-.132.675-.366.919-.235.243-.552.38-.884.38h-7.5c-.332 0-.65-.137-.884-.38a1.327 1.327 0 0 1-.366-.92v-4.2Z"
                  fill="#787878"
                ></path>
              </svg>
            </div>
            Share
          </div>
        </div>
      </div>

      <div v-if="btnIndex === 0">
        <div
          class="border flex-middle three-wrap mobile-wrap child-100p"
          style="padding: 15px 15px 5px"
        >
          <div class="flex-1">
            <ul>
              <li class="flex-space">
                FLOW-PERP
                <span style="color: rgb(127, 212, 130)">$0.9592</span>
              </li>
              <li>
                Side
                <span>-</span>
              </li>
              <li>
                Size
                <span>-</span>
              </li>
            </ul>
          </div>
          <div class="divide"></div>
          <div class="flex-1">
            <ul>
              <li class="flex-space">
                Net Funding
                <span>-</span>
              </li>
              <li>
                Unrealized P&L
                <span>-</span>
              </li>
              <li>
                Realized P&L
                <span>-</span>
              </li>
            </ul>
          </div>
          <div class="divide"></div>
          <div class="flex-1">
            <ul>
              <li class="flex-space">
                Leverage
                <span>-</span>
              </li>
              <li>
                Liq Price
                <span>-</span>
              </li>
              <li>
                Avg Entry
                <span>-</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="e-button"
          style="margin: 15px 0; width: 100%; padding: 0; text-align: center"
        >
          Futures will be live on April 1,2023.
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="#ECE8E3"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            class="sc-1b0f3b65-1 bCWgOt"
          >
            <path
              d="M4.862 1.768.407 6.212l.77.77L5.61 2.527V5.64h1.067V.701H1.815v1.067h3.047Z"
            ></path>
          </svg>
        </div>

        <TableView :cols="tableCols1" />
      </div>

      <div v-if="btnIndex === 1">
        <TableView :cols="tableCols2" />
      </div>

      <div v-if="btnIndex === 2">
        <TableView :cols="tableCols3" />
      </div>

      <div v-if="btnIndex === 3">
        <TableView :cols="tableCols4" />
      </div>
    </div>
    <div class="right-area" style="margin: 0 10px">
      <FuturesRight />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import HeaderView from "../components/HeaderView.vue";
import FuturesRight from "./FuturesRight.vue";
import { getAssetsFile } from "../utils/index";
import btnsConfig from "../config/home";
import TableView from "../components/TableView.vue";
import FuturesChart from "./FuturesChart.vue";
const cur = ref(10);
const hideDrop = ref(true);
const route = useRoute();
const router = useRouter();
const selectThis = (index) => {
  cur.value = index;
};
const btnIndex = ref(0);
const tableCols1 = [
  {
    t: "Market",
    s: false,
  },
  {
    t: "Side",
    s: false,
  },
  {
    t: "Size",
    s: false,
  },
  {
    t: "Leverage",
    s: false,
  },
  {
    t: "Unrealized P&L",
    s: false,
  },
  {
    t: "Avg. Entry Price",
    s: false,
  },
  {
    t: "Liq. Price",
    s: false,
  },
];
const tableCols2 = [
  {
    t: "Market/Type",
    s: true,
  },
  {
    t: "Side",
    s: true,
  },
  {
    t: "Size",
    s: true,
  },
  {
    t: "Status",
    s: true,
  },
  {
    t: "Actions",
    s: false,
  },
];
const tableCols3 = [
  {
    t: "Date",
    s: true,
  },
  {
    t: "Side",
    s: true,
  },
  {
    t: "Price",
    s: true,
  },
  {
    t: "Trade Size",
    s: true,
  },
  {
    t: "Fees",
    s: true,
  },
  {
    t: "Order Type",
    s: false,
  },
];
const tableCols4 = [
  {
    t: "Action",
    s: false,
  },
  {
    t: "Amount",
    s: true,
  },
  {
    t: "Date",
    s: false,
  },
  {
    t: "transaction",
    s: false,
  },
];
onMounted(() => {
  document.addEventListener("click", () => {
    hideDrop.value = true;
  });
  const q = router.currentRoute.value.query;
  if (q["b"]) {
    cur.value = btnsConfig.findIndex((item) => item.t1 === q["b"]);
  }
});
</script>
<style scoped>
.left-area {
  min-width: 280px;
}
.right-area {
  min-width: 300px;
}
.drop-btn {
  width: 100%;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 15px;
  cursor: pointer;
  height: 53px;
  background: rgb(37, 37, 37);
}
.drop-list {
  position: absolute;
  left: 0;
  top: 10px;
  width: 100%;
  overflow-x: hidden;
  height: 500px;
  overflow-y: auto;
  scrollbar-width: none;
}
.drop-list::-webkit-scrollbar {
  display: none;
}
.drop-list ul li {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 6px;
  height: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  background: rgb(37, 37, 37);
}
.drop-list ul li:hover {
  background: rgb(43, 42, 42);
}
.drop-list ul li:first-child {
  border: none;
}
.c-gray {
  font-size: 13px;
  color: rgb(169, 168, 166);
}
.c-white {
  font-family: AkkuratMonoLLWeb-Regular;
  font-size: 13px;
  color: rgb(236, 232, 227);
}
.c-green {
  font-family: AkkuratMonoLLWeb-Regular;
  font-size: 13px;
  color: rgb(127, 212, 130);
}
.c-red {
  font-family: AkkuratMonoLLWeb-Regular;
  font-size: 13px;
  color: rgb(239, 104, 104);
}
.btns-area {
  margin-bottom: 16px;
  margin-top: 6px;
}
.btns-area .e-button {
  margin-left: 10px;
  margin-top: 10px;
}
.btns-area .e-button:first {
  margin-left: 0;
}
.three-wrap ul li {
  line-height: 16px;
  padding-bottom: 10px;
  font-size: 13px;
  color: rgb(169, 168, 166);
  display: flex;
  justify-content: space-between;
}
.three-wrap ul li span {
  color: rgb(236, 232, 227);
  font-family: AkkuratMonoLLWeb-Regular;
}
.three-wrap .divide {
  width: 1px;
  height: 68px;
  background-color: rgb(43, 42, 42);
  margin: 0px 15px;
  margin-top: -8px;
}

@media (max-width: 600px) {
  .left-area {
    flex: 1;
  }
  .right-area {
    flex: 1;
  }
}
</style>
