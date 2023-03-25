<template>
  <HeaderView />
  <div class="flex-start">
    <div class="left-area">
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
    </div>
    <div class="flex-1"></div>
    <div class="right-area">
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
const cur = ref(10);
const hideDrop = ref(true);
const route = useRoute();
const router = useRouter();
const selectThis = (index) => {
  cur.value = index;
};
onMounted(() => {
  document.addEventListener("click", () => {
    hideDrop.value = true;
  });
});
</script>
<style scoped>
.right-area {
  width: 300px;
}
.drop-btn {
  width: 280px;
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
  width: 280px;
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
</style>
