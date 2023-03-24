<template>
  <div class="layout-container">
    <Header></Header>
    <div class="flex-start" style="margin-top: 10px">
      <LeftMenu></LeftMenu>
      <div class="flex-1" style="margin-left: 10px; max-width: 1300px">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { RouterView } from "vue-router";
import Header from "./HeaderView.vue";
import LeftMenu from "./LeftMenu.vue";
const route = useRoute();
const router = useRouter();
onMounted(() => {});
</script>
<style scoped>
.layout-container {
  padding: 25px;
  background-color: rgb(17, 17, 19);
  box-sizing: border-box;
  min-height: 100vh;
}
</style>
