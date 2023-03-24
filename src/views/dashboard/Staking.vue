<template>
  <div class="flex-space">
    <span class="title">STAKING DASHBOARD</span>
    <div class="e-button top-btn">Staking Docs</div>
  </div>
  <div class="section-wrap">
    <div class="section-item">
      <div>
        <span>Liquid</span>
        <h4>0.00</h4>
      </div>
      <div>
        <span>Escrow</span>
        <h4>0.00</h4>
      </div>
    </div>
    <div class="section-item">
      <div>
        <span>Staked</span>
        <h4>0.00</h4>
      </div>
      <div>
        <span>Staked Escrow</span>
        <h4>0.00</h4>
      </div>
    </div>

    <div class="section-item">
      <div>
        <span>Claimable</span>
        <h4>0.00</h4>
      </div>
      <div>
        <span>Vestable</span>
        <h4>0.00</h4>
      </div>
    </div>
  </div>
  <div class="flex-middle" style="margin-top: 100px">
    <div class="e-button" :class="{ active: cur === 0 }" @click="cur = 0">
      Staking
    </div>
    <div class="e-button" :class="{ active: cur === 1 }" @click="cur = 1">
      Escrow
    </div>
    <div class="e-button" :class="{ active: cur === 2 }" @click="cur = 2">
      Trading Rewards
    </div>
    <div class="e-button" :class="{ active: cur === 3 }" @click="cur = 3">
      Redemption
    </div>
  </div>
  <div class="switch-wrap">
    <div class="switch-item" v-if="cur === 0">
      <div class="color-gray">Claimable Rewards</div>
      <div class="color-green" style="margin-bottom: 20px">0.0000</div>
      <div class="color-gray">Annual Percentage Rate</div>
      <div class="color-green" style="margin-bottom: 20px">0.00%</div>
      <div class="e-button claim-btn">Claim</div>
    </div>
    <div class="switch-two" v-if="cur === 1">
      <div class="tables-header">
        <div style="padding-left: 20px">Date</div>
        <div>Time Until Vestable</div>
        <div>Immediately Vestable</div>
        <div>Amount</div>
        <div>Early Vest Fee</div>
        <div>Status</div>
      </div>
      <div class="tables-body flex-middle">
        <div>
          <span>Total</span>
          <h4>0.0000 SAKAI</h4>
        </div>
        <div>
          <span>Fee</span>
          <h4>0.0000 SAKAI</h4>
        </div>
        <div class="vest-btn">VEST</div>
      </div>
    </div>
    <div class="switch-item" v-if="cur === 2">
      <div class="color-gray">Claimable Trading Rewards</div>
      <div class="color-green" style="margin-bottom: 20px">0.0000</div>
      <div class="color-gray">Time until next epoch</div>
      <div class="color-green" style="margin-bottom: 20px">Pending...</div>
      <div class="e-button claim-btn">Claim</div>
    </div>
    <div class="switch-item" v-if="cur === 2">
      <div class="flex-middle flex-space">
        <div>
          <div class="color-gray">Futures Fees Paid: Ep. 0</div>
          <div class="color-green" style="margin-bottom: 20px">$0.00</div>
          <div class="color-gray">Total Fees in Pool: Ep. 0</div>
          <div class="color-green" style="margin-bottom: 20px">$0.00</div>
        </div>
        <div>
          <div class="color-gray">Estimated Reward*</div>
          <div class="color-green" style="margin-bottom: 20px">0.0000</div>
          <div class="color-gray">Estimated Reward Share*</div>
          <div class="color-green" style="margin-bottom: 20px">0.00%</div>
        </div>
      </div>
      <div style="color: rgb(120, 120, 120); font-size: 13px">
        * Estimated values do not reflect the final reward value and are subject
        to change as a result of future fees paid and staked amounts by other
        participants.
      </div>
    </div>
    <div class="switch-item" v-if="cur === 3">
      <div
        class="flex-middle flex-space"
        style="color: rgb(177, 177, 177); font-size: 14px"
      >
        <span>veSakai Vault</span>
        <div>
          <span>Balance:</span>
          <span
            style="
              color: rgb(236, 232, 227);
              font-family: AkkuratMonoLLWeb-Regular;
            "
          >
            0.0000</span
          >
        </div>
      </div>
      <div class="e-button claim-btn" style="margin-top: 20px">Redeem</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const cur = ref(0);
onMounted(() => {});
</script>
<style scoped>
.title {
  font-family: AkkuratLLWeb-Bold;
  font-size: 21px;
  text-transform: uppercase;
  font-variant: all-small-caps;
  color: rgb(74, 176, 129);
  line-height: 1.4;
  letter-spacing: 0.2px;
}
.e-button.top-btn {
  border-radius: 100px;
  font-size: 12px;
  height: 36px;
  font-family: AkkuratLLWeb-Bold;
  color: rgb(236, 232, 227);
}
.section-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(334px, 1fr));
  gap: 15px;
  margin-top: 10px;
}
.section-item {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  display: flex;
  background: rgb(24, 24, 24);
}
.section-item > div {
  flex: 1;
  padding: 30px 0px 30px 30px;
  display: flex;
  flex-direction: column;
}
.section-item > div:first-child {
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}
.section-item > div > span {
  font-size: 15px;
  color: rgb(177, 177, 177);
}
.section-item > div > h4 {
  font-family: AkkuratMonoLLWeb-Bold;
  font-size: 26px;
  color: rgb(74, 176, 129);
  margin-top: 10px;
}
.e-button {
  background-color: transparent;
  font-size: 12px;
  height: 38px;
  margin-right: 8px;
  font-family: AkkuratLLWeb-Bold;
  color: rgb(120, 120, 120);
}
.e-button.active,
.e-button:hover {
  background: rgb(43, 42, 42);
  color: rgb(236, 232, 227);
}
.switch-wrap {
  display: grid;
  gap: 15px;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr;
}
.switch-item {
  background: rgb(24, 24, 24);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.color-gray {
  color: rgb(177, 177, 177);
}
.color-green {
  font-size: 26px;
  font-family: AkkuratMonoLLWeb-Bold;
  color: rgb(74, 176, 129);
}
.claim-btn {
  color: rgb(85, 85, 85);
  background: transparent;
  box-shadow: none;
  text-shadow: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: not-allowed;
  margin: 0;
}
.claim-btn:hover {
  background: transparent;
  color: rgb(85, 85, 85);
}
.switch-two {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
}
.tables-header {
  display: flex;
  color: rgb(169, 168, 166);
  font-family: AkkuratLLWeb-Regular;
  font-size: 12px;
  flex-wrap: nowrap;
  height: 40px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.tables-header > div {
  flex: 1;
}
.tables-body {
  height: 70px;
  justify-content: flex-end;
}
.tables-body > div {
  margin-right: 15px;
}
.tables-body > div > span {
  font-size: 10px;
  color: rgb(169, 168, 166);
}
.tables-body > div > h4 {
  font-size: 11px;
  font-family: AkkuratMonoLLWeb-Regular;
  color: rgb(236, 232, 227);
  margin-top: 4px;
}
.tables-body .vest-btn {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(120, 120, 120);
  height: 24px;
  line-height: 24px;
  box-sizing: border-box;
  border-radius: 14px;
  cursor: not-allowed;
  background-color: transparent;
  color: rgb(120, 120, 120);
  font-family: AkkuratLLWeb-Bold;
  font-size: 12px;
  padding-left: 12px;
  padding-right: 12px;
  text-transform: uppercase;
}
</style>
