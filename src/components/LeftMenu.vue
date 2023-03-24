<template>
  <div class="menu-container">
    <div class="menu-title">TRADING</div>
    <div
      class="d-button"
      v-for="menu of menus1"
      :key="menu.title"
      :class="{ active: isActive(menu.title.toLocaleLowerCase()) }"
    >
      <RouterLink :to="menu.url">{{ menu.title }}</RouterLink>
    </div>
    <div class="menu-title" style="margin-top: 65px">COMMUNITY</div>
    <div
      class="d-button"
      v-for="menu of menus2"
      :key="menu.title"
      :class="{ active: isActive(menu.title.toLocaleLowerCase()) }"
    >
      <RouterLink :to="menu.url">{{ menu.title }}</RouterLink>
    </div>

    <div class="other-links">
      <a href="https://twitter.com/sakaivault" target="_blank" rel="noreferrer"
        ><svg
          width="16"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M21.362 3.002a8.775 8.775 0 0 1-2.516.69 4.394 4.394 0 0 0 1.927-2.426 8.75 8.75 0 0 1-2.783 1.063 4.384 4.384 0 0 0-7.469 3.998 12.446 12.446 0 0 1-9.034-4.58A4.384 4.384 0 0 0 2.844 7.6 4.372 4.372 0 0 1 .86 7.051v.056a4.384 4.384 0 0 0 3.516 4.298c-.646.175-1.323.2-1.98.075a4.385 4.385 0 0 0 4.095 3.043A8.794 8.794 0 0 1 1.046 16.4c-.35 0-.699-.02-1.046-.061a12.395 12.395 0 0 0 6.718 1.969c8.062 0 12.47-6.678 12.47-12.47 0-.188-.005-.378-.013-.566a8.91 8.91 0 0 0 2.186-2.268l.001-.002Z"
            fill="#787878"
          ></path></svg></a
      ><a href="https://discord.gg/HHq9uEXvr9" target="_blank" rel="noreferrer"
        ><svg
          width="17"
          height="18"
          viewBox="0 0 23 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M19.115 2.345A18.814 18.814 0 0 0 14.52.943a.07.07 0 0 0-.074.034c-.198.347-.418.8-.572 1.158a17.468 17.468 0 0 0-5.162 0A11.628 11.628 0 0 0 8.13.977a.072.072 0 0 0-.075-.035A18.799 18.799 0 0 0 3.46 2.344a.066.066 0 0 0-.03.026C.502 6.674-.3 10.872.094 15.017a.075.075 0 0 0 .029.052 18.844 18.844 0 0 0 5.638 2.804.073.073 0 0 0 .08-.025c.434-.583.821-1.2 1.153-1.847a.07.07 0 0 0-.039-.097 12.42 12.42 0 0 1-1.761-.826.07.07 0 0 1-.008-.118c.119-.088.237-.179.35-.27a.071.071 0 0 1 .074-.01c3.694 1.66 7.696 1.66 11.347 0a.07.07 0 0 1 .074.009c.113.092.23.183.35.27a.07.07 0 0 1-.005.119c-.563.323-1.148.597-1.763.825a.07.07 0 0 0-.041.04.072.072 0 0 0 .003.058 14.75 14.75 0 0 0 1.152 1.846.072.072 0 0 0 .08.027 18.782 18.782 0 0 0 5.646-2.805.07.07 0 0 0 .03-.05c.47-4.793-.788-8.957-3.339-12.647a.056.056 0 0 0-.029-.027ZM7.545 12.493c-1.111 0-2.028-1.006-2.028-2.24 0-1.233.899-2.238 2.029-2.238 1.138 0 2.047 1.013 2.03 2.239 0 1.234-.9 2.24-2.03 2.24Zm7.504 0c-1.113 0-2.03-1.006-2.03-2.24 0-1.233.9-2.238 2.03-2.238 1.138 0 2.047 1.013 2.03 2.239 0 1.234-.89 2.24-2.03 2.24Z"
            fill="#787878"
          ></path></svg></a
      ><a href="https://docs.sakaivault.io" target="_blank" rel="noreferrer"
        ><svg
          width="18"
          height="19"
          viewBox="0 0 25 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M11.01 15.843a.708.708 0 0 1 .506.214.729.729 0 0 1 .154.792.725.725 0 0 1-.388.393.709.709 0 0 1-.78-.159.732.732 0 0 1 0-1.028.711.711 0 0 1 .507-.212Zm11.236-4.493a.708.708 0 0 1-.507-.214.73.73 0 0 1-.155-.792.728.728 0 0 1 .389-.393.707.707 0 0 1 .78.158.732.732 0 0 1 0 1.028.712.712 0 0 1-.507.213Zm0-2.974c-.588 0-1.151.238-1.566.66a2.265 2.265 0 0 0-.533 2.302l-7.32 3.952a2.218 2.218 0 0 0-.79-.712 2.181 2.181 0 0 0-1.028-.256c-.844 0-1.614.49-1.987 1.257l-6.575-3.517c-.695-.37-1.215-1.53-1.16-2.587.028-.55.216-.979.502-1.144.182-.103.4-.095.632.028l.043.024c1.743.93 7.445 3.977 7.685 4.09.37.174.576.244 1.208-.06l11.787-6.217c.173-.066.375-.234.375-.49 0-.353-.361-.493-.362-.493-.67-.326-1.701-.815-2.706-1.292-2.149-1.02-4.584-2.176-5.653-2.745-.923-.49-1.666-.076-1.799.006l-.257.13C7.93 3.725 1.488 6.962 1.121 7.188.465 7.593.059 8.4.006 9.402c-.082 1.589.716 3.246 1.859 3.853l6.953 3.636c.077.535.34 1.023.743 1.377.402.353.916.548 1.448.548a2.203 2.203 0 0 0 1.554-.647c.414-.413.651-.975.661-1.565l7.659-4.21c.387.308.87.476 1.363.476.587 0 1.15-.237 1.566-.659a2.265 2.265 0 0 0 0-3.177 2.202 2.202 0 0 0-1.566-.659"
            fill="#787878"
          ></path></svg
      ></a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
const route = useRoute();
const router = useRouter();
const menus1 = [
  {
    title: "Overview",
    url: "/dashboard/overview",
  },
  {
    title: "History",
    url: "/dashboard/history",
  },
  {
    title: "Markets",
    url: "/dashboard/markets",
  },
];
const menus2 = [
  {
    title: "Staking",
    url: "/dashboard/staking",
  },
  {
    title: "Governance",
    url: "",
  },
];
const isActive = (keyword) => {
  return router.currentRoute.value.path.includes(keyword);
};
onMounted(() => {});
</script>
<style scoped>
.menu-container {
  width: 112px;
  display: flex;
  flex-wrap: wrap;
}
.d-button {
  margin: 8px 0px;
  padding: 10px 14px;
}
.d-button.active {
  background: rgb(37, 37, 37);
}
.menu-title {
  margin-bottom: 10px;
  margin-left: 14px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: AkkuratLLWeb-Black;
  color: rgb(74, 176, 129);
}
.other-links {
  width: 80px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 100px;
  margin-left: 15px;
}
</style>
