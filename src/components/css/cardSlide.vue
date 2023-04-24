<template>
  <div class="body">
    <template v-for="item in divArray" :key="item.id">
      <div class="container">
        <div class="card" :style="item.style_d">
          <div class="content">
            <div class="img">
              <el-image :src="item.src" class="img_content" />
            </div>
            <div class="detail">
              <span>{{ item.span_name }}</span>
              <p>{{ item.a_name }}</p>
            </div>
          </div>
          <a href="#" class="a">关注</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts" name="cardSlide">
import { ref, reactive } from "vue"
import getImageUrl from "../../utils/getImageByPath"
defineProps()
//拼接图片路径
const concatPath = (id: number) => {
  return getImageUrl("assets/rose/rose-" + id + ".jpg")
}

const divArray = reactive([
  {
    id: 1,
    src: concatPath(1),
    style_d: "--d:1",
    span_name: "花朵",
    a_name: "五颜六色玫瑰花"
  },
  {
    id: 2,
    src: concatPath(2),
    style_d: "--d:2",
    span_name: "花朵",
    a_name: "白色雏菊"
  },
  {
    id: 3,
    src: concatPath(3),
    style_d: "--d:3",
    span_name: "花朵",
    a_name: "蓝玫瑰"
  },
  {
    id: 4,
    src: concatPath(4),
    style_d: "--d:4",
    span_name: "花朵",
    a_name: "粉色雏菊"
  },
  {
    id: 5,
    src: concatPath(5),
    style_d: "--d:5",
    span_name: "花朵",
    a_name: "五叶草"
  }
])
</script>
<style lang="less" scoped>
.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(200deg, #b1f4cf, #9890e3);
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 500px;
  height: 300px;
}

.container:hover .card {
  animation-play-state: paused;
}
.card {
  //position: absolute;
  background-color: #fff;
  width: 430px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 100px 20px 20px 100px;
  opacity: 0;
  animation: animate 5s linear infinite;
  animation-delay: calc(1.1s * var(--d));
}
.content {
  display: flex;
  align-items: center;
}

.img {
  width: 90px;
  height: 90px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.detail {
  margin-left: 100px;
  span {
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
}

.img .img_content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 50%;
}
.a {
  font-size: 14px;
  text-decoration: none;
  background: linear-gradient(to bottom, #fbc5ed, #a6c1ee);
  padding: 7px 18px;
  color: #fff;
  border-radius: 25px;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(100%) scale(0.5);
  }
  5%,
  20% {
    opacity: 0.4;
    transform: translateY(100%) scale(0.7);
  }
  25%,
  40% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  45%,
  60% {
    opacity: 0.4;
    transform: translateY(-100%) scale(0.4);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%) scale(0.2);
  }
}
</style>
