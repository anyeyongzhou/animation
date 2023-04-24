<template>
  <div class="box"></div>
</template>

<script setup lang="ts" name="roatte-ball"></script>
<style lang="less" scoped>
.box {
  width: 100px;
  height: 100px;
  background: transparent;
  border: 10px solid #00d9ff;
  border-radius: 50%;
  position: relative;
  animation: round 3s infinite;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 30px;
    height: 30px;
    background-color: rgb(255, 132, 0);
    border-radius: 50%;
  }
}

@keyframes round {
  0% {
    rotate: 0deg;
  }

  100% {
    rotate: 360deg;
  }
}
</style>
