<template>
  <div @click.stop="showList = true" style="cursor: pointer">
    <slot></slot>
    <div class="relative">
      <div class="select-list" @click.stop v-if="showList">
        <ul>
          <li v-for="item of options" @click="handleClick(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const props = defineProps({
  options: Array,
});
const handleClick = (item) => {
  emits("fn", item);
  showList.value = false;
};
const emits = defineEmits(["fn"]);
const showList = ref(false);
onMounted(() => {
  document.addEventListener("click", () => {
    showList.value = false;
  });
});
</script>
<style scoped>
.select-list {
  position: absolute;
  left: 0;
  top: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: rgb(35, 40, 45);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 3px 6px,
    rgba(94, 102, 115, 0.9) 0px 0px 1px inset;
  border-radius: 4px;
  z-index: 9999;
}
.select-list ul li {
  padding: 4px 16px;
  font-size: 12px;
  color: rgb(234, 236, 239);
  cursor: pointer;
  white-space: nowrap;
}
.select-list ul li:hover {
  color: rgb(240, 185, 11);
  background-color: rgb(71, 77, 87);
}
</style>
