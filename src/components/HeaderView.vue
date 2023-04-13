<template>
  <div class="flex-middle header mobile-wrap">
    <div class="flex-middle">
      <!-- <img src="../assets/logo_icon.png" alt="alpha" width="20" height="20" />
      <span
        style="font-size: 18px; color: rgb(153, 153, 153); margin-left: 10px"
        >Alpha</span
      > -->

      <RouterLink to="/">
        <img src="../assets/logo.png" alt="" height="40" />
      </RouterLink>
    </div>

    <div class="flex-1 flex mobile-wrap" style="margin-left: 35px">
      <div
        class="d-button"
        v-for="menu of menus"
        :key="menu.title"
        :class="{ active: isActive(menu.title.toLocaleLowerCase()) }"
      >
        <RouterLink :to="menu.url">{{ menu.title }}</RouterLink>
      </div>
    </div>

    <div class="connect" id="connectwallet" @click="connect">
      <span></span>
      Connect Wallet
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const menus = [
  {
    title: "Markets",
    url: "/dashboard/markets",
  },
  {
    title: "Futures",
    url: "/futures",
  },
  {
    title: "Exchange",
    url: "",
  },
  {
    title: "History",
    url: "/history",
  },
];
const isActive = (keyword) => {
  return router.currentRoute.value.path.includes(keyword);
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
</script>
<style scoped>
.d-button {
  margin-right: 2px;
}
.header {
  display: flex;
  min-height: 41px;
  padding-bottom: 20px;
}
.connect {
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
  font-family: AkkuratMonoLLWeb-Regular;
  height: 41px;
  min-width: 157px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.connect:hover {
  background: rgb(43, 42, 42);
}
.connect span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: rgb(239, 104, 104);
  margin-right: 6px;
}
</style>
