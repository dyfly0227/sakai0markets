<template>
  <div class="market-container">
    <div class="e-button">Futures Markets</div>
    <div class="tables-container">
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
          </div>
        </div>
        <div class="col col-2">
          <span class="col-price text-green" v-if="randomColor(index)">{{
            config.p
          }}</span>
          <span class="col-price text-red" v-else>{{ config.p }}</span>
        </div>
        <div class="col col-3">
          <span style="color: rgb(236, 232, 227)">-</span>
        </div>
        <div class="col col-4">
          <span class="text-green" v-if="randomColor(index)">{{
            config.r
          }}</span>
          <span class="text-red" v-else>{{ config.r }}</span>
        </div>
        <div class="col col-5">
          <div>
            <div class="text-green">{{ config.p1 }}</div>
            <div class="text-red">{{ config.p2 }}</div>
          </div>
        </div>
        <div class="col col-6">
          <span style="color: rgb(236, 232, 227)">$0.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import marketConfig from "../../config/markets";
import { getAssetsFile } from "../../utils/index";
const route = useRoute();
const router = useRouter();
const randomColor = (index) => {
  return index + Math.random() > index + 0.5;
};
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
onMounted(() => {});
</script>
<style scoped>
.e-button {
  height: 38px;
  font-size: 13px;
  width: 140px;
  margin-top: 16px;
  margin-bottom: 16px;
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
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px 10px 0 0;
  height: 40px;
}

.btn-t1 {
  font-size: 12px;
  color: rgb(236, 232, 227);
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
  font-family: AkkuratMonoLLWeb-Regular;
}
.text-red {
  color: rgb(239, 104, 104);
}
.text-green {
  color: rgb(127, 212, 130);
}
.table-body {
  height: 52px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
}
.table-body:nth-child(2n),
.table-body:hover {
  background: rgba(255, 255, 255, 0.05);
}
</style>
