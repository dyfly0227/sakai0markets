<template>
  <div class="flex-middle">
    <div class="btn-1">Cross</div>
    <div class="btn-1">50x</div>
    <div class="control-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        data-testid="orderform-preference-button"
        class="css-1wp7bnt"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 6h-7.79a4.001 4.001 0 00-7.42 0H3v3h2.79a4.001 4.001 0 007.42 0H21V6zm-10.21 9H3v3h7.79a4.001 4.001 0 007.42 0H21v-3h-2.79a4.001 4.001 0 00-7.42 0z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
  <div class="flex-middle flex-space" style="margin-top: 30px">
    <div class="flex-middle">
      <div
        class="btn-2"
        :class="{ active: se1Index === 0 }"
        @click="se1Index = 0"
      >
        Limit
      </div>
      <div
        class="btn-2"
        :class="{ active: se1Index === 1 }"
        @click="se1Index = 1"
      >
        Market
      </div>
      <e-select
        :options="[
          'Stop Limit',
          'Stop Market',
          'Trailing Stop',
          'Stop Only',
          'TWAP',
        ]"
        @fn="selectFn1"
      >
        <div
          class="btn-2 flex-middle"
          :class="{ active: se1Index === 2 }"
          @click="se1Index = 2"
        >
          <span> {{ se1 }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="t.third"
            data-testid="moreStopMode"
            class="css-fr1clq"
          >
            <path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path>
          </svg>
        </div>
      </e-select>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      class="css-6q0t5v"
      style="color: rgb(132, 142, 156); width: 16px; height: 16px"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
  <div class="flex-middle flex-space" style="margin-top: 20px">
    <div class="flex-middle">
      <div style="font-size: 12px; color: rgb(132, 142, 156)">Avbl</div>
      <div style="font-size: 12px; color: rgb(234, 236, 239); margin: 0 5px">
        0.00 USDT
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        data-testid="orderform-transfer-button"
        cursor="pointer"
        class="css-dj78kz"
        style="color: rgb(240, 185, 11); width: 16px; height: 16px"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 9V6h13.5V2.5l5 5-5 5V9H3zm18 9v-3H7v-3.5l-5 5 5 5V18h14z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      class="css-3lekaf"
      style="color: rgb(132, 142, 156); width: 16px; height: 16px"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.5 3h-14v18h14V3zM8 5.5h9v3.908H8V5.5zm6 6h3v7h-3v-7zm-6 0h4V14H8v-2.5zM8 16h4v2.5H8V16z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
  <div class="input-area">
    <span>Price</span>
    <input type="text" />
    <div style="color: rgb(240, 185, 11); margin-right: 8px; cursor: pointer">
      Last
    </div>
    <em>USDT</em>
  </div>

  <div class="input-area">
    <span>Size</span>
    <input type="text" />
    <e-select :options="['USDT', 'BTC']" @fn="selectFn2">
      <div class="flex-middle">
        <em>{{ se2 }}</em>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="t.third"
          data-testid="moreStopMode"
          class="css-fr1clq"
          style="color: rgb(132, 142, 156); width: 16px; height: 16px"
        >
          <path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path>
        </svg>
      </div>
    </e-select>
  </div>
  <div class="flex-space flex-middle relative" style="margin: 20px 0">
    <div class="big-rect"></div>
    <div class="small-rect"></div>
    <div class="small-rect"></div>
    <div class="small-rect"></div>
    <div class="small-rect"></div>
    <div
      class="absolute"
      style="height: 4px; background-color: rgb(71, 77, 87); width: 100%"
    ></div>
  </div>
  <div class="flex-middle flex-space">
    <div class="flex-middle">
      <div style="font-size: 12px; color: rgb(132, 142, 156)">Buy</div>
      <div style="font-size: 12px; color: rgb(234, 236, 239); margin: 0 5px">
        0.00 USDT
      </div>
    </div>
    <div class="flex-middle">
      <div style="font-size: 12px; color: rgb(132, 142, 156)">Sell</div>
      <div style="font-size: 12px; color: rgb(234, 236, 239); margin: 0 5px">
        0.00 USDT
      </div>
    </div>
  </div>
  <div class="divide"></div>
  <div class="flex-middle">
    <div
      class="select-icon"
      :class="{ active: select1 }"
      @click="select1 = !select1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        data-indeterminate="false"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <div style="font-size: 12px; color: rgb(234, 236, 239); margin: 0 5px">
      TP/SL
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      class="css-6q0t5v"
      style="color: rgb(132, 142, 156); width: 16px; height: 16px"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
  <div v-if="select1">
    <div class="input-area">
      <span>Take Profit</span>
      <input type="text" />
      <div class="flex-middle">
        <em>Mark</em>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="t.third"
          data-testid="moreStopMode"
          class="css-fr1clq"
          style="color: rgb(132, 142, 156); width: 16px; height: 16px"
        >
          <path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <div class="input-area">
      <span>Stop Loss</span>
      <input type="text" />
      <div class="flex-middle">
        <em>Mark</em>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="t.third"
          data-testid="moreStopMode"
          class="css-fr1clq"
          style="color: rgb(132, 142, 156); width: 16px; height: 16px"
        >
          <path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  </div>
  <div class="flex-middle flex-space" style="margin-top: 15px">
    <div class="flex-middle">
      <div
        class="select-icon"
        :class="{ active: select2 }"
        @click="select2 = !select2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          data-indeterminate="false"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div style="font-size: 12px; color: rgb(234, 236, 239); margin: 0 5px">
        Reduce-Only
      </div>
    </div>
    <div class="flex-middle">
      <div style="color: rgb(132, 142, 156); font-size: 12px">TIF</div>

      <e-select :options="['GTC', 'IOC', 'FOK']" @fn="selectFn3">
        <div class="flex-middle">
          <div
            style="font-size: 12px; color: rgb(234, 236, 239); margin: 0 5px"
          >
            {{ se3 }}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="t.third"
            data-testid="moreStopMode"
            class="css-fr1clq"
            style="color: rgb(132, 142, 156); width: 16px; height: 16px"
          >
            <path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path>
          </svg>
        </div>
      </e-select>
    </div>
  </div>

  <div class="divide"></div>
  <div class="flex-middle">
    <div class="btn-3">Buy/Long</div>
    <div class="btn-3 red">Sell/Short</div>
  </div>
  <div
    class="flex-middle flex-space"
    style="font-size: 12px; margin: 8px 0 8px 0"
  >
    <div class="flex-middle">
      <span style="color: rgb(132, 142, 156)">Cost</span>
      <span style="color: rgb(234, 236, 239); margin-left: 2px">0.00 USDT</span>
    </div>
    <div class="flex-middle">
      <span style="color: rgb(132, 142, 156)">Cost</span>
      <span style="color: rgb(234, 236, 239); margin-left: 2px">0.00 USDT</span>
    </div>
  </div>
  <div class="flex-middle flex-space" style="font-size: 12px">
    <div class="flex-middle">
      <span style="color: rgb(132, 142, 156)">Max</span>
      <span style="color: rgb(234, 236, 239); margin-left: 2px">0.00 USDT</span>
    </div>
    <div class="flex-middle">
      <span style="color: rgb(132, 142, 156)">Max</span>
      <span style="color: rgb(234, 236, 239); margin-left: 2px">0.00 USDT</span>
    </div>
  </div>
  <div class="flex-space" style="font-size: 12px; margin-top: 8px">
    <div></div>
    <div class="flex-middle">
      <span
        style="
          background-color: rgb(240, 185, 11);
          color: rgb(24, 26, 32);
          border-radius: 3px;
          padding-left: 4px;
          padding-right: 4px;
          margin-right: 4px;
        "
        >Hot</span
      >
      <span
        style="
          cursor: pointer;
          color: rgb(183, 189, 198);
          text-decoration: underline;
        "
        >Fee level</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ESelect from "../components/ESelect.vue";
const route = useRoute();
const router = useRouter();
const select1 = ref(false);
const select2 = ref(false);
const se1Index = ref(0);
const se1 = ref("Stop Limit");
const selectFn1 = (e) => {
  se1.value = e;
};
const se2 = ref("USDT");
const selectFn2 = (e) => {
  se2.value = e;
};
const se3 = ref("GTC");
const selectFn3 = (e) => {
  se3.value = e;
};
onMounted(() => {});
</script>
<style scoped>
.btn-1 {
  box-sizing: border-box;
  margin: 0px 5px 0px 0px;
  min-width: 0px;
  flex: 1 1 0%;
  font-size: 12px;
  line-height: 24px;
  color: rgb(234, 236, 239);
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  border-radius: 2px;
  background-color: rgb(71, 77, 87);
  text-decoration: none;
  width: 64px;
  height: 24px;
  padding: 0px 4px;
  display: inline-block;
}
.btn-1:hover {
  background-color: rgb(43, 49, 57);
  border-color: rgb(43, 49, 57);
}
.control-svg {
  width: 20px;
  height: 20px;
  color: rgb(61, 70, 83);
  cursor: pointer;
}
.control-svg:hover {
  color: rgb(132, 142, 156);
}
.btn-2 {
  font-size: 14px;
  color: rgb(132, 142, 156);
  margin-right: 16px;
  cursor: pointer;
  white-space: nowrap;
}
.btn-2.active,
.btn-2:hover {
  color: rgb(240, 185, 11);
}
.btn-2 svg {
  color: rgb(132, 142, 156);
  width: 16px;
  height: 16px;
}
.input-area {
  display: flex;
  align-items: center;
  border: 1px solid rgba(43, 47, 54, 0.8);
  border-radius: 4px;
  background-color: rgb(43, 49, 57);
  font-size: 14px;
  margin-top: 10px;
  height: 40px;
  padding: 0 5px;
}
.input-area input {
  flex: 1;
  background-color: transparent;
  border: none;
  height: 40px;
  display: block;
  outline: none;
  text-align: right;
  color: rgb(234, 236, 239);
  font-size: 14px;
  margin: 0 8px;
  width: 0;
}
.input-area span {
  color: rgb(132, 142, 156);
}
.input-area em {
  color: rgb(234, 236, 239);
  font-style: normal;
  display: block;
}
.input-area:hover,
.input-area:active {
  border-color: rgb(240, 185, 11);
}

.big-rect {
  width: 8px;
  height: 8px;
  border: 4px solid rgb(234, 236, 239);
  border-radius: 4px;
  background: #1e2329;
  transform: rotateZ(45deg);
  position: relative;
  z-index: 2;
  cursor: grab;
}
.small-rect {
  width: 6px;
  height: 6px;
  border: 2px solid rgb(71, 77, 87);
  border-radius: 2px;
  background: #1e2329;
  transform: rotateZ(45deg);
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.small-rect:hover {
  border-color: #1e2329;
  background-color: rgb(71, 77, 87);
}
.divide {
  margin: 16px 0px;
  height: 1px;
  background-color: rgb(37, 41, 48);
}
.select-icon {
  height: 16px;
  width: 16px;
  border: 1px solid rgb(94, 102, 115);
  border-radius: 2px;
  color: transparent;
  cursor: pointer;
  margin-right: 8px;
}
.select-icon.active {
  background-color: rgb(240, 185, 11);
  color: rgb(24, 26, 32);
  border-color: rgb(240, 185, 11);
}
.select-icon svg {
  height: 100%;
}

.btn-3 {
  margin: 8px 8px 0px 0px;
  appearance: none;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 14px;
  font-family: inherit;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  outline: none;
  padding: 10px 16px;
  line-height: 20px;
  min-width: 60px;
  word-break: keep-all;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  min-height: 24px;
  border: none;
  background-color: rgb(14, 203, 129);
  flex: 1 1 0%;
  width: 100%;
}
.btn-3:hover {
  box-shadow: none;
  background-color: rgb(50, 217, 147);
}
.btn-3.red {
  background-color: rgb(246, 70, 93);
}
.btn-3.red:hover {
  background-color: rgb(255, 112, 126);
}
</style>
