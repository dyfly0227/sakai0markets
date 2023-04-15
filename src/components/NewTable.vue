<template>
  <div class="table-container">
    <ul v-if="cols.length > 0">
      <li v-for="col of cols">{{ col }}</li>
    </ul>
    <div
      style="
        height: 450px;
        line-height: 450px;
        font-size: 12px;
        color: rgb(183, 189, 198);
        text-align: center;
      "
    >
      {{ content }}
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
  content: String,
});
onMounted(() => {});
</script>
<style scoped>
.table-container {
  min-width: 100%;
  overflow-x: auto;
}
.table-container ul {
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid rgba(132, 142, 156, 0.5);
  justify-content: space-around;
}
.table-container ul li {
  color: rgb(132, 142, 156);
  font-size: 12px;
  padding: 0 20px;
  line-height: 32px;
  white-space: nowrap;
}
</style>
