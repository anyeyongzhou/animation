<template>
  <div>
    <p>Welcome</p>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-button
        v-for="(button, index) in buttons"
        :key="index"
        :id="button.id"
        :type="button.type"
        @click="button.click"
        class="btn"
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
const click0 = (e: any) => {
  btnAddClass(e);
  router.push({
    name: "primary",
  });
};
//垂直卡片滑动动画点击事件
const click1 = (e: any) => {
  btnAddClass(e);
  router.push({
    name: "cardslide",
  });
};
const click2 = (e: any) => {
  btnAddClass(e);
  router.push({
    name: "gressSlideHover",
  });
};
const click3 = (e: any) => {
  btnAddClass(e);
  router.push({
    name: "threeDball",
  });
};
const click4 = (e: any) => {
  btnAddClass(e);
  router.push({
    name: "rotateball",
  });
};
const click5 = (e: any) => {
  btnAddClass(e);
  router.push({
    name: "strangeheadportrait",
  });
};

//ToDo有后端后变为从后端中曲数据填充
let buttons: any = ref([
  { id: "10", type: "success", text: "primary", click: click0 },
  { id: "11", type: "success", text: "垂直卡片滑动动画", click: click1 },
  { id: "12", type: "success", text: "玻璃卡片悬停", click: click2 },
  { id: "13", type: "success", text: "3D球", click: click3 },
  { id: "14", type: "success", text: "旋转小球", click: click4 },
  { id: "15", type: "success", text: "奇妙的头像", click: click5 },
]);

//存储上次被点击的按钮id
let preTimeSelected: string = "";
//为所有被点击的按钮添加样式
const btnAddClass = (e: any) => {
  // //方案一：将所有按钮的点击样式去除，再给被点击的按钮添加样式
  // for(let i=0;i<buttons.value.length;i++){
  //   const btnElement = document.getElementById(buttons.value[i].id)
  //   btnElement?.classList.remove("active")
  // }
  // const selectBtnId = e.target.__vueParentComponent.attrs.id
  // const btnElement = document.getElementById(selectBtnId)
  // btnElement?.classList.add("active")

  //方案二：每次保留上一次被点击按钮的id，再次进来只清除一个，添加一个
  if (preTimeSelected != "") {
    //清除上一次样式
    const prebtnElement = document.getElementById(preTimeSelected);
    prebtnElement?.classList.remove("active");
  }
  //添加这一次样式
  const selectBtnId = e.target.__vueParentComponent.attrs.id;
  const selectBtnElement = document.getElementById(selectBtnId);
  selectBtnElement?.classList.add("active");
  //更新存储id的变量值
  preTimeSelected = selectBtnId;
};
</script>

<style lang="less" scoped>
.css-page {
  background-color: #fff;
  height: 100%;
  padding: 0;
}
.btn {
  background-color: bisque;
  color: black;
}
.btn:active {
  color: aqua;
  background-color: rgb(13, 230, 78);
}
.btn.active {
  background-color: pink;
}
.btn:hover {
  cursor: pointer;
}
</style>
