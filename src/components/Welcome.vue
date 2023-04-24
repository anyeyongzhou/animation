<template>
  <div>
    <p>Welcome</p>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-button
        v-for="(button, index) in buttons"
        :key="index"
        :id="button.id"
        :type="button.type"
        @click="e => clickHandler(e, button)"
        :class="{ btn: true, active: button.id === selectedId }"
        >{{ button.text }}</el-button
      >
    </div>
    <div class="css-page">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const buttons = ref([
  { id: "10", type: "success", text: "primary", click: clickHandler },
  { id: "11", type: "success", text: "垂直卡片滑动动画", click: clickHandler },
  { id: "12", type: "success", text: "玻璃卡片悬停", click: clickHandler },
  { id: "13", type: "success", text: "3D球", click: clickHandler },
  { id: "14", type: "success", text: "旋转小球", click: clickHandler },
  { id: "15", type: "success", text: "奇妙的头像", click: clickHandler },
]);
let selectedId = "";
function clickHandler(e: any, button: any) {
  console.log(button);
  selectedId = button.id;
  router.push({
    name: button.name,
  });
}
</script>
<style lang="less" scoped>
.btn {
  background-color: bisque;
  color: black;
  &:active {
    color: aqua;
    background-color: rgb(13, 230, 78);
  }
  &:hover {
    cursor: pointer;
  }
}
.active {
  background-color: pink;
}
</style>
