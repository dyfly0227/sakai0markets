<template>
  <div class="border">
    <div style="border-bottom: 1px solid rgba(255, 255, 255, 0.12)">
      <ul class="flex-middle flex-around mobile-wrap">
        <li v-for="col of cols" :key="col.t" class="li-item">
          {{ col.t }}
          <span class="flex-col" v-if="col.s" style="margin-left: 5px"
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
              ></path>
            </svg>
          </span>
        </li>
      </ul>
    </div>
    <div
      style="
        padding: 50px 40px;
        text-align: center;
        color: rgb(236, 232, 227);
        font-size: 16px;
        font-family: AkkuratLLWeb-Bold;
      "
    >
      <div>Perpetual futures are available on Optimism L2</div>
      <div
        style="
          text-decoration: underline;
          cursor: pointer;
          font-size: 16px;
          font-family: AkkuratLLWeb-Regular;
        "
      >
        Switch to L2
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const props = defineProps({
  cols: Array,
});
onMounted(() => {});
</script>
<style scoped>
.li-item {
  color: rgb(169, 168, 166);
  font-family: AkkuratLLWeb-Regular;
  font-size: 13px;
  flex-shrink: 0;
  line-height: 40px;
  height: 40px;
  display: flex;
  align-items: center;
}
</style>
