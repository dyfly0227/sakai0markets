<template>
  <div>
    <div class="header flex-middle">
      <div class="flex-middle">
        <img src="../assets/logo_icon.png" alt="alpha" width="20" height="20" />
        <span
          style="font-size: 16px; color: rgb(153, 153, 153); margin-left: 10px"
          >Alpha</span
        >
      </div>
      <div class="flex-1 flex-center">
        <div class="top-btn">
          <RouterLink to="/dashboard/markets">Markets</RouterLink>
        </div>
        <div class="top-btn">
          Socials
          <svg
            style="margin-left: 5px"
            width="10"
            height="7"
            viewBox="0 -1 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <path
              d="m1 1 4 4 4-4"
              stroke="#C3C0BA"
              stroke-linecap="square"
            ></path>
          </svg>
          <div class="drop-wrap">
            <div class="droplist">
              <div class="drop-item">
                <svg
                  style="margin: 0 10px"
                  width="15"
                  height="15"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <path
                    d="M8.725 10.488c-.717 0-1.283.625-1.283 1.387s.579 1.387 1.283 1.387c.716 0 1.282-.625 1.282-1.387.013-.762-.566-1.387-1.282-1.387Zm4.588 0c-.716 0-1.282.625-1.282 1.387s.578 1.387 1.282 1.387c.717 0 1.282-.625 1.282-1.387s-.565-1.387-1.282-1.387Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19.423 0H2.577A2.576 2.576 0 0 0 0 2.575v16.9a2.576 2.576 0 0 0 2.577 2.575h14.256l-.666-2.313 1.609 1.488 1.521 1.4L22 25V2.575A2.576 2.576 0 0 0 19.423 0ZM14.57 16.325s-.452-.537-.83-1.012c1.647-.463 2.276-1.488 2.276-1.488a7.209 7.209 0 0 1-1.446.738 8.31 8.31 0 0 1-1.823.537 8.856 8.856 0 0 1-3.256-.012 10.599 10.599 0 0 1-1.848-.538 7.387 7.387 0 0 1-.917-.425c-.038-.025-.076-.037-.113-.063-.026-.012-.038-.024-.05-.037-.227-.125-.353-.213-.353-.213s.604 1 2.2 1.476c-.377.474-.842 1.037-.842 1.037-2.778-.087-3.834-1.9-3.834-1.9 0-4.025 1.81-7.288 1.81-7.288 1.81-1.35 3.533-1.312 3.533-1.312l.125.15c-2.263.65-3.306 1.638-3.306 1.638s.277-.15.742-.363c1.345-.588 2.413-.75 2.853-.787.076-.013.139-.026.214-.026a10.29 10.29 0 0 1 6.323 1.175s-.993-.937-3.13-1.587l.176-.2s1.723-.038 3.533 1.313c0 0 1.81 3.262 1.81 7.287 0 0-1.068 1.813-3.847 1.9Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Discord
              </div>
              <div class="drop-item">
                <svg
                  style="margin: 0 10px"
                  width="15"
                  height="15"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <path
                    d="M5.44 13.428c6.038 0 9.341-5.167 9.341-9.641 0-.146 0-.291-.006-.437a6.812 6.812 0 0 0 1.64-1.757 6.493 6.493 0 0 1-1.89.535A3.392 3.392 0 0 0 15.972.25a6.408 6.408 0 0 1-2.087.82A3.23 3.23 0 0 0 11.491 0C9.679 0 8.206 1.52 8.206 3.39c0 .264.032.522.083.773C5.562 4.025 3.142 2.67 1.522.621a3.473 3.473 0 0 0-.442 1.705c0 1.176.583 2.214 1.46 2.822a3.242 3.242 0 0 1-1.486-.423v.046c0 1.64 1.134 3.014 2.632 3.324-.276.08-.564.12-.865.12a3.13 3.13 0 0 1-.614-.06c.416 1.348 1.632 2.326 3.067 2.352a6.456 6.456 0 0 1-4.86 1.408 9.128 9.128 0 0 0 5.026 1.513Z"
                    fill="currentColor"
                  ></path></svg
                >Twitter
              </div>
            </div>
          </div>
        </div>
        <div class="top-btn">
          Learn more
          <svg
            style="margin-left: 5px"
            width="16"
            height="17"
            viewBox="0 -1 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <path
              d="M4.667 11.333 11 5M4.667 4.667h6.666v6.666"
              stroke="#C3C0BA"
              stroke-linecap="square"
            ></path>
          </svg>
        </div>
      </div>
      <div class="top-trade">Start Trading</div>
    </div>
    <div class="body flex-middle flex-col">
      <div
        style="
          max-width: 636px;
          font-size: 80px;
          line-height: 85%;
          font-family: AkkuratMonoLLWeb-Bold;
          text-align: center;
          text-transform: uppercase;
          color: rgb(74, 176, 129);
        "
      >
        PERPETUAL EXCHANGE
      </div>
      <div
        style="
          max-width: 530px;
          font-size: 24px;
          line-height: 120%;
          text-align: center;
          color: rgb(189, 189, 189);
          padding-top: 16px;
        "
      >
        Trade up to 25x leverage on the world's first decentralized perpetual
        exchange with infinite liquidity
      </div>
      <div class="trade-now">Trade now</div>
      <div
        style="
          font-family: AkkuratLLWeb-Bold;
          font-size: 14px;
          line-height: 100%;
          color: rgb(74, 176, 129);
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 10px;
          cursor: default;
        "
      >
        UNIQUE MARKETS
      </div>
      <div
        style="
          font-family: AkkuratLLWeb-Bold;
          font-size: 42px;
          line-height: 100%;
          color: rgb(236, 232, 227);
          font-variant: all-small-caps;
          text-transform: uppercase;
          text-align: center;
          cursor: default;
        "
      >
        MARKET OVERVIEW
      </div>
    </div>
    <div class="btns">
      <div class="btn-item" v-for="btn of btnsConfig" :key="btn.t1">
        <div class="flex-middle">
          <img :src="getAssetsFile(btn.img)" alt="" width="40" height="40" />
          <div style="margin-left: 10px">
            <div class="btn-t1">{{ btn.t1 }}</div>
            <div class="btn-t2">{{ btn.t2 }}</div>
          </div>
        </div>
        <div class="btn-price">{{ btn.p }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { getAssetsFile } from "../utils/index";
import btnsConfig from "../config/home";
const route = useRoute();
const router = useRouter();
onMounted(() => {});
</script>
<style scoped>
.header {
  display: flex;
  height: 41px;
}
.top-btn {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 15px;
  line-height: 15px;
  font-family: AkkuratLLWeb-Bold;
  color: rgb(153, 153, 153);
  cursor: pointer;
  padding: 8px 13px;
  border-radius: 100px;
  margin: 0px 20px;
  position: relative;
}
.top-btn:hover,
.top-btn.active {
  background: rgb(37, 37, 37);
  color: rgb(236, 232, 227);
}
.top-btn:hover .drop-wrap {
  display: block;
}
.drop-wrap {
  padding-top: 2px;
  position: absolute;
  top: 33px;
  left: 50%;
  display: none;
  z-index: 10;
  transform: translateX(-50%);
}
.droplist {
  background: rgb(30, 29, 29);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  max-width: 150px;
  padding: 10px 15px;
  align-items: center;
}
.droplist .drop-item {
  font-family: AkkuratLLWeb-Bold;
  cursor: pointer;
  width: 100%;
  font-size: 15px;
  height: 30px;
  color: rgb(81, 81, 81);
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
}
.droplist .drop-item:hover {
  color: rgb(236, 232, 227);
}
.top-trade {
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  padding: 0px 14px;
  box-sizing: border-box;
  text-transform: capitalize;
  outline: none;
  white-space: nowrap;
  color: rgb(236, 232, 227);
  transition: all 0.1s ease-in-out 0s;
  background: rgb(37, 37, 37);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: none;
  font-family: AkkuratLLWeb-Bold;
  height: 41px;
  line-height: 41px;
  text-align: center;
  min-width: 157px;
  font-size: 15px;
}
.top-trade:hover {
  background: rgb(43, 42, 42);
}
.body {
  margin-top: 100px;
}
.trade-now {
  margin-top: 50px;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  padding: 0px 14px;
  box-sizing: border-box;
  text-transform: capitalize;
  outline: none;
  white-space: nowrap;
  font-size: 17px;
  color: rgb(74, 176, 129);
  transition: all 0.1s ease-in-out 0s;
  background: rgb(37, 37, 37);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: none;
  font-family: AkkuratLLWeb-Bold;
  height: 50px;
  line-height: 50px;
  text-align: center;
  min-width: 200px;
}
.trade-now:hover {
  background: rgb(43, 42, 42);
}
.btns {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.btn-item {
  height: auto;
  position: relative;
  box-sizing: border-box;
  text-transform: capitalize;
  outline: none;
  white-space: nowrap;
  font-size: 17px;
  color: rgb(236, 232, 227);
  gap: 1rem;
  text-align: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  width: 275px;
  font-family: AkkuratLLWeb-Regular;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid rgb(57, 57, 57);
  box-shadow: none;
  transition: all 0.2s ease-in-out 0s;
  background: rgb(26, 26, 26);
  margin: 10px;
}
.btn-t1 {
  font-size: 18px;
  color: rgb(236, 232, 227);
  text-align: left;
}
.btn-t2 {
  font-size: 11px;
  color: rgb(81, 81, 81);
  text-align: left;
}
.btn-item:hover {
  background: rgb(32, 32, 32);
  transform: translateY(-2px);
}
.btn-price {
  font-size: 20px;
  font-family: AkkuratMonoLLWeb-Regular;
  color: rgb(236, 232, 227);
}
</style>
