<template>
  <div class="body">
    <div class="container">
      <div class="card" style="--d: 1">
        <div class="content">
          <div class="img">
            <img src="../../assets/rose/rose-1.jpg" alt="" />
          </div>
          <div class="detail">
            <span>花朵</span>
            <p>五颜六色玫瑰花</p>
          </div>
        </div>
        <a href="#" class="a">关注</a>
      </div>
      <div class="card" style="--d: 2">
        <div class="content">
          <div class="img">
            <img src="../../assets/rose/rose-2.jpg" alt="" />
          </div>
          <div class="detail">
            <span>花朵</span>
            <p>白色雏菊</p>
          </div>
        </div>
        <a href="#" class="a">关注</a>
      </div>
      <div class="card" style="--d: 3">
        <div class="content">
          <div class="img">
            <img src="../../assets/rose/rose-3.jpg" alt="" />
          </div>
          <div class="detail">
            <span>花朵</span>
            <p>蓝玫瑰</p>
          </div>
        </div>
        <a href="#" class="a">关注</a>
      </div>
      <div class="card" style="--d: 4">
        <div class="content">
          <div class="img">
            <img src="../../assets/rose/rose-4.jpg" alt="" />
          </div>
          <div class="detail">
            <span>花朵</span>
            <p>粉色雏菊</p>
          </div>
        </div>
        <a href="#" class="a">关注</a>
      </div>
      <div class="card" style="--d: 5">
        <div class="content">
          <div class="img">
            <img src="../../assets/rose/rose-5.jpg" alt="" />
          </div>
          <div class="detail">
            <span>花朵</span>
            <p>五叶草</p>
          </div>
        </div>
        <a href="#" class="a">关注</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="cardSlide">
import { ref, reactive } from "vue"
defineProps()
const divArray = reactive([
  {
    id: 1,
    src: "../../assets/rose/rose-1.jpg",
    style_d: 1,
    span_name: "花朵",
    a_name: "五颜六色玫瑰花"
  },
  {
    id: 2,
    src: "../../assets/rose/rose-2.jpg",
    style_d: 2,
    span_name: "花朵",
    a_name: "白色雏菊"
  },
  {
    id: 3,
    src: "../../assets/rose/rose-3.jpg",
    style_d: 3,
    span_name: "花朵",
    a_name: "蓝玫瑰"
  },
  {
    id: 4,
    src: "../../assets/rose/rose-4.jpg",
    style_d: 4,
    span_name: "花朵",
    a_name: "粉色雏菊"
  },
  {
    id: 5,
    src: "../../assets/rose/rose-5.jpg",
    style_d: 5,
    span_name: "花朵",
    a_name: "五叶草"
  }
])
</script>
<style lang="less" scoped>
// div {
//   width: 750px;
//   height: 500px;
//   // border: 1px solid black;
//   background-image: url(../../assets/rose/flower-1.png);
//   background-size: 100%;
//   background-repeat: no-repeat;
// }
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
  width: 500px;
  height: 300px;
}

.container:hover .card {
  animation-play-state: paused;
}
.card {
  position: absolute;
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

  .content {
    display: flex;
    align-items: center;

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
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: 50%;
      }
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
  }

  .a {
    font-size: 14px;
    text-decoration: none;
    background: linear-gradient(to bottom, #fbc5ed, #a6c1ee);
    padding: 7px 18px;
    color: #fff;
    border-radius: 25px;
  }
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
    transform: translateY(-100%) scale(0.7);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%) scale(0.5);
  }
}
</style>
