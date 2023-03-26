<template>
  <div class="connect-btn" id="connectwallet2" @click="connect">
    Connect Wallet
  </div>
  <div class="right-two border">
    <ul>
      <li>Available Margin: <span>$0.00</span></li>
      <li>Buying Power: <span>$0.00</span></li>
      <li>Margin Usage: <span>$0.00</span></li>
    </ul>
  </div>
  <div class="flex-middle flex-space" style="margin: 8px 0 16px">
    <div class="tab-btn" :class="{ active: cur === 0 }" @click="cur = 0">
      Long
    </div>
    <div class="tab-btn" :class="{ active: cur === 1 }" @click="cur = 1">
      Short
    </div>
  </div>
  <div
    class="flex-middle flex-space"
    style="color: rgb(169, 168, 166); font-size: 13px"
  >
    <div>
      <span>Amount —</span>
      <span style="color: rgb(120, 120, 120)"> Set order size</span>
    </div>
    <div
      style="
        color: rgb(120, 120, 120);
        text-decoration: underline;
        font-variant: small-caps;
        text-transform: lowercase;
      "
    >
      max
    </div>
  </div>

  <div
    class="flex-middle flex-space border"
    style="height: 46px; padding: 0 10px; margin: 8px 0 16px"
  >
    <span
      style="
        font-family: AkkuratMonoLLWeb-Regular;
        font-size: 18px;
        color: rgb(120, 120, 120);
      "
      >0.00</span
    >
    <div
      class="flex-middle"
      style="color: rgb(169, 168, 166); font-size: 16px; cursor: pointer"
    >
      sUSD
      <span style="margin-left: 5px"
        ><svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M2.672.65c.157-.2.5-.2.656 0l2.603 3.317c.178.227-.01.533-.328.533H.397c-.318 0-.506-.306-.328-.533L2.672.65ZM3.328 10.35c-.157.2-.5.2-.656 0L.069 7.033C-.11 6.806.079 6.5.397 6.5h5.206c.318 0 .506.306.328.533L3.328 10.35Z"
            fill="#787878"
          ></path></svg
      ></span>
    </div>
  </div>

  <div
    class="flex-middle flex-space"
    style="color: rgb(169, 168, 166); font-size: 13px"
  >
    <div>
      <span>leverage —</span>
      <span style="color: rgb(120, 120, 120)"> Up to 25.00 x</span>
    </div>
    <div style="color: rgb(120, 120, 120); text-decoration: underline">
      Slider
    </div>
  </div>

  <div class="flex-middle flex-space" style="margin: 8px 0 16px">
    <div
      class="border"
      style="
        width: 104px;
        padding-left: 12px;
        font-family: AkkuratMonoLLWeb-Regular;
        line-height: 46px;
        font-size: 18px;
        color: rgb(236, 232, 227);
      "
    >
      {{ val }}
    </div>
    <div class="e-button num-button" @click="val = 5">5x</div>
    <div class="e-button num-button" @click="val = 10">10x</div>
    <div class="e-button num-button" @click="val = 25">25x</div>
  </div>

  <div
    class="flex-middle flex-space"
    style="color: rgb(169, 168, 166); font-size: 13px"
  >
    <div>
      <span>Manage —</span>
      <span style="color: rgb(120, 120, 120)"> Adjust your position</span>
    </div>
  </div>

  <div
    class="border"
    style="
      font-size: 16px;
      height: 55px;
      font-family: AkkuratLLWeb-Bold;
      color: rgb(85, 85, 85);
      cursor: not-allowed;
      text-align: center;
      line-height: 55px;
      margin: 8px 0 16px;
    "
  >
    Place Order
  </div>

  <div class="border" style="padding: 14px">
    <div class="flex-middle flex-space">
      <div
        style="color: rgb(169, 168, 166); font-size: 13px; cursor: pointer"
        @click="rotate = !rotate"
      >
        Total Fees:
        <span style="margin-left: 5px"
          ><svg
            :class="{ 'rotate-180': rotate }"
            width="11"
            height="12"
            viewBox="0 -5 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            class="sc-423e01db-4 sc-423e01db-5 eAhvZl"
          >
            <path
              d="m1 1.05 4.063 4.062L9.125 1.05"
              stroke="#787878"
              stroke-width="2"
              stroke-linecap="round"
            ></path></svg
        ></span>
      </div>
      <span
        style="
          color: rgb(236, 232, 227);
          font-family: AkkuratMonoLLWeb-Regular;
          font-size: 13px;
        "
        >$2.00</span
      >
    </div>
    <div
      v-if="rotate"
      style="
        padding-left: 10px;
        border-left: 2px solid rgba(255, 255, 255, 0.12);
        margin-top: 5px;
      "
    >
      <div class="flex-middle flex-space" style="padding-block: 6px">
        <div
          class="flex-middle flex-space"
          style="color: rgb(169, 168, 166); font-size: 13px"
        >
          Execution Fee:
          <div style="margin-left: 5px">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="#787878"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              class="sc-df1a6a83-1 bRnZkY"
            >
              <path
                d="M5.4 9.6h1.2V8.4H5.4v1.2ZM6 0C2.688 0 0 2.688 0 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6Zm0 10.8A4.806 4.806 0 0 1 1.2 6c0-2.646 2.154-4.8 4.8-4.8s4.8 2.154 4.8 4.8-2.154 4.8-4.8 4.8Zm0-8.4a2.4 2.4 0 0 0-2.4 2.4h1.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 1.2-1.8 1.05-1.8 3h1.2c0-1.35 1.8-1.5 1.8-3A2.4 2.4 0 0 0 6 2.4Z"
              ></path>
            </svg>
          </div>
        </div>
        <span
          style="
            color: rgb(169, 168, 166);
            font-family: AkkuratMonoLLWeb-Regular;
            font-size: 13px;
          "
          >$2.00</span
        >
      </div>
      <div class="flex-middle flex-space" style="padding-block: 6px">
        <div
          class="flex-middle flex-space"
          style="color: rgb(169, 168, 166); font-size: 13px"
        >
          Est. Trade Fee (0.05% / 0.10%):
          <div style="margin-left: 5px">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="#787878"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              class="sc-df1a6a83-1 bRnZkY"
            >
              <path
                d="M5.4 9.6h1.2V8.4H5.4v1.2ZM6 0C2.688 0 0 2.688 0 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6Zm0 10.8A4.806 4.806 0 0 1 1.2 6c0-2.646 2.154-4.8 4.8-4.8s4.8 2.154 4.8 4.8-2.154 4.8-4.8 4.8Zm0-8.4a2.4 2.4 0 0 0-2.4 2.4h1.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 1.2-1.8 1.05-1.8 3h1.2c0-1.35 1.8-1.5 1.8-3A2.4 2.4 0 0 0 6 2.4Z"
              ></path>
            </svg>
          </div>
        </div>
        <span
          style="
            color: rgb(169, 168, 166);
            font-family: AkkuratMonoLLWeb-Regular;
            font-size: 13px;
          "
          >$0.0000</span
        >
      </div>
    </div>
    <div
      @click="jumpToStaking"
      style="
        margin-top: 10px;
        padding-left: 16px;
        border-left: 3px solid rgb(239, 104, 104);
        cursor: pointer;
      "
    >
      <div class="flex-middle flex-space" style="padding-bottom: 6px">
        <span style="color: rgb(236, 232, 227); font-size: 13px"
          >Trading Reward:</span
        >
        <div
          style="
            font-family: AkkuratLLWeb-Black;
            padding: 0px 6px;
            border-radius: 100px;
            font-variant: all-small-caps;
            color: black;
            background: rgb(239, 104, 104);
            min-width: 100px;
            font-size: 13px;
            text-align: center;
          "
        >
          Not Eligible <span style="font-size: 5px">x</span>
        </div>
      </div>
      <div class="flex-middle flex-space">
        <div style="color: rgb(169, 168, 166); font-size: 13px">
          Stake <span style="color: rgb(236, 232, 227)">$SAKAI</span> to start
          earning rewards
        </div>
        <span>
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="rgb(169, 168, 166)"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            class="sc-df1a6a83-2 kdwGgv"
          >
            <path
              d="M4.862 1.768.407 6.212l.77.77L5.61 2.527V5.64h1.067V.701H1.815v1.067h3.047Z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const cur = ref(0);
const val = ref(0);
const rotate = ref(false);
const jumpToStaking = () => {
  router.push("/dashboard/staking");
};

const connect = () => {
  let account;
  ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
    account = accounts[0];
    let showaddress = account.substring(0, 5) + "..." + account.substring(38);
    document.getElementById("connectwallet").innerText = showaddress;
    if (window.connetWalletStaking) {
      window.connetWalletStaking.innerText = "Start at 5th, April.";
    }
  });
};
onMounted(() => {
  window.connetWalletStaking = document.querySelector("#connectwallet2");
});
</script>
<style scoped>
.connect-btn {
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  padding: 0px 14px;
  box-sizing: border-box;
  text-transform: capitalize;
  outline: none;
  white-space: nowrap;
  font-size: 17px;
  color: rgb(236, 232, 227);
  transition: all 0.1s ease-in-out 0s;
  border: none;
  background: rgb(74, 176, 129);
  box-shadow: none;
  font-family: AkkuratLLWeb-Bold;
  height: 55px;
  width: 100%;
  margin-bottom: 16px;
  text-align: center;
  line-height: 55px;
}
.connect-btn:hover {
  background: linear-gradient(
    rgb(56, 56, 56) 0%,
    rgb(56, 56, 56) 0.01%,
    rgb(30, 30, 30) 100%
  );
}
.right-two {
  padding: 14px;
}
.right-two ul li {
  display: flex;
  justify-content: space-between;
  color: rgb(169, 168, 166);
  font-size: 13px;
  line-height: 1.4;
  padding-bottom: 6px;
}
.right-two ul li span {
  color: rgb(236, 232, 227);
  font-family: AkkuratMonoLLWeb-Regular;
}
.tab-btn {
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  padding: 0px 14px;
  box-sizing: border-box;
  text-transform: capitalize;
  outline: none;
  white-space: nowrap;
  transition: all 0.1s ease-in-out 0s;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 2px,
    rgba(255, 255, 255, 0.1) 0px 1px 0px inset,
    rgba(255, 255, 255, 0.03) 0px 0px 20px inset;
  background: linear-gradient(rgb(40, 39, 39) 0%, rgb(25, 24, 24) 100%);
  border: none;
  font-family: AkkuratLLWeb-Bold;
  width: 140px;
  font-size: 14px;
  height: 40px;
  color: rgb(127, 212, 130);
  text-align: center;
  line-height: 40px;
}
.tab-btn::before {
  content: "";
  position: absolute;
  inset: 0px;
  border-radius: 8px;
  padding: 1px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-mask-composite: xor;
  -webkit-mask: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)
      content-box content-box,
    linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
}
.tab-btn:hover {
  background: linear-gradient(
    rgb(56, 56, 56) 0%,
    rgb(56, 56, 56) 0.01%,
    rgb(30, 30, 30) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 2px,
    rgba(255, 255, 255, 0.1) 0px 1px 0px inset,
    rgba(255, 255, 255, 0.03) 0px 0px 20px inset;
}
.tab-btn.active {
  color: rgb(239, 104, 104);
  border: 1px solid rgba(239, 104, 104, 0.7);
  border-radius: 8px;
  background: linear-gradient(
    rgba(239, 104, 104, 0.15) 0%,
    rgba(116, 56, 56, 0.05) 100%
  );
  box-shadow: rgba(239, 104, 104, 0.5) 0px 0px 3px;
}
.num-button {
  width: 43px;
  height: 46px;
}
.rotate-180 {
  transform: rotateZ(180deg) translateY(-4px);
}
</style>
