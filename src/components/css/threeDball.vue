<template>
  <div class="body_class">
    <div class="container">
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="primary"></script>
<style lang="less" scoped>
.body_class {
  background: #000;
  overflow: hidden;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate3d(-50%, -50%, 0) rotateY(0deg) rotateZ(0deg);
  transform-style: preserve-3d;
  perspective: 1000;
  -webkit-animation: fullrotate 10s linear infinite;
  animation: fullrotate 10s linear infinite;
}

.point {
  position: absolute;
  top: 95px;
  left: 49%;
  background: #000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.point:nth-child(1) {
  transform: rotateY(172deg) rotateX(204deg) translateZ(100px);
  background: rgba(129, 220, 131, 0.39);
  filter: blur(0px);
  -webkit-animation: expand1 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand1 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 2ms;
  animation-delay: 2ms;
}
@-webkit-keyframes expand1 {
  0% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(10px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(10px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand1 {
  0% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(10px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(10px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(172deg) rotateX(204deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(2) {
  transform: rotateY(322deg) rotateX(289deg) translateZ(100px);
  background: rgba(180, 86, 81, 0.34);
  filter: blur(0px);
  -webkit-animation: expand2 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand2 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 4ms;
  animation-delay: 4ms;
}
@-webkit-keyframes expand2 {
  0% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(20px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(20px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand2 {
  0% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(20px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(20px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(322deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(3) {
  transform: rotateY(152deg) rotateX(36deg) translateZ(100px);
  background: rgba(216, 28, 193, 0.93);
  filter: blur(0px);
  -webkit-animation: expand3 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand3 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 6ms;
  animation-delay: 6ms;
}
@-webkit-keyframes expand3 {
  0% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(30px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(30px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand3 {
  0% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(30px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(30px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(152deg) rotateX(36deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(4) {
  transform: rotateY(330deg) rotateX(277deg) translateZ(100px);
  background: rgba(96, 148, 90, 0.76);
  filter: blur(0px);
  -webkit-animation: expand4 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand4 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 8ms;
  animation-delay: 8ms;
}
@-webkit-keyframes expand4 {
  0% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(40px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(40px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand4 {
  0% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(40px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(40px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(330deg) rotateX(277deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(5) {
  transform: rotateY(117deg) rotateX(286deg) translateZ(100px);
  background: rgba(252, 253, 40, 0.2);
  filter: blur(0px);
  -webkit-animation: expand5 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand5 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 10ms;
  animation-delay: 10ms;
}
@-webkit-keyframes expand5 {
  0% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(50px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(50px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand5 {
  0% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(50px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(50px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(117deg) rotateX(286deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(6) {
  transform: rotateY(140deg) rotateX(298deg) translateZ(100px);
  background: rgba(225, 28, 98, 0.33);
  filter: blur(0px);
  -webkit-animation: expand6 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand6 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 12ms;
  animation-delay: 12ms;
}
@-webkit-keyframes expand6 {
  0% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(60px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(60px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand6 {
  0% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(60px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(60px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(140deg) rotateX(298deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(7) {
  transform: rotateY(247deg) rotateX(257deg) translateZ(100px);
  background: rgba(55, 111, 43, 0.14);
  filter: blur(0px);
  -webkit-animation: expand7 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand7 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 14ms;
  animation-delay: 14ms;
}
@-webkit-keyframes expand7 {
  0% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(70px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(70px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand7 {
  0% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(70px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(70px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(247deg) rotateX(257deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(8) {
  transform: rotateY(218deg) rotateX(289deg) translateZ(100px);
  background: rgba(190, 182, 72, 0.39);
  filter: blur(0px);
  -webkit-animation: expand8 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand8 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 16ms;
  animation-delay: 16ms;
}
@-webkit-keyframes expand8 {
  0% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(80px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(80px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand8 {
  0% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(80px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(80px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(218deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(9) {
  transform: rotateY(136deg) rotateX(342deg) translateZ(100px);
  background: rgba(223, 74, 142, 0.37);
  filter: blur(0px);
  -webkit-animation: expand9 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand9 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 18ms;
  animation-delay: 18ms;
}
@-webkit-keyframes expand9 {
  0% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(90px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(90px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand9 {
  0% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(90px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(90px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(136deg) rotateX(342deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(10) {
  transform: rotateY(158deg) rotateX(325deg) translateZ(100px);
  background: rgba(230, 229, 59, 0.07);
  filter: blur(0px);
  -webkit-animation: expand10 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand10 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 20ms;
  animation-delay: 20ms;
}
@-webkit-keyframes expand10 {
  0% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(100px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(100px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand10 {
  0% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(100px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(100px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(158deg) rotateX(325deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(11) {
  transform: rotateY(227deg) rotateX(279deg) translateZ(100px);
  background: rgba(72, 91, 34, 0.36);
  filter: blur(0px);
  -webkit-animation: expand11 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand11 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 22ms;
  animation-delay: 22ms;
}
@-webkit-keyframes expand11 {
  0% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(110px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(110px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand11 {
  0% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(110px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(110px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(227deg) rotateX(279deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(12) {
  transform: rotateY(289deg) rotateX(163deg) translateZ(100px);
  background: rgba(124, 161, 1, 0.99);
  filter: blur(0px);
  -webkit-animation: expand12 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand12 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 24ms;
  animation-delay: 24ms;
}
@-webkit-keyframes expand12 {
  0% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(120px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(120px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand12 {
  0% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(120px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(120px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(289deg) rotateX(163deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(13) {
  transform: rotateY(250deg) rotateX(229deg) translateZ(100px);
  background: rgba(155, 228, 132, 0.91);
  filter: blur(0px);
  -webkit-animation: expand13 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand13 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 26ms;
  animation-delay: 26ms;
}
@-webkit-keyframes expand13 {
  0% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(130px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(130px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand13 {
  0% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(130px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(130px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(250deg) rotateX(229deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(14) {
  transform: rotateY(255deg) rotateX(243deg) translateZ(100px);
  background: rgba(111, 211, 208, 0.39);
  filter: blur(0px);
  -webkit-animation: expand14 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand14 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 28ms;
  animation-delay: 28ms;
}
@-webkit-keyframes expand14 {
  0% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(140px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(140px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand14 {
  0% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(140px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(140px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(255deg) rotateX(243deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(15) {
  transform: rotateY(9deg) rotateX(74deg) translateZ(100px);
  background: rgba(95, 47, 52, 0.48);
  filter: blur(0px);
  -webkit-animation: expand15 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand15 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 30ms;
  animation-delay: 30ms;
}
@-webkit-keyframes expand15 {
  0% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(150px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(150px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand15 {
  0% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(150px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(150px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(9deg) rotateX(74deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(16) {
  transform: rotateY(12deg) rotateX(119deg) translateZ(100px);
  background: rgba(155, 8, 68, 0.26);
  filter: blur(0px);
  -webkit-animation: expand16 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand16 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 32ms;
  animation-delay: 32ms;
}
@-webkit-keyframes expand16 {
  0% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(160px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(160px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand16 {
  0% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(160px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(160px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(12deg) rotateX(119deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(17) {
  transform: rotateY(248deg) rotateX(214deg) translateZ(100px);
  background: rgba(51, 25, 99, 0.88);
  filter: blur(0px);
  -webkit-animation: expand17 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand17 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 34ms;
  animation-delay: 34ms;
}
@-webkit-keyframes expand17 {
  0% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(170px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(170px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand17 {
  0% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(170px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(170px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(248deg) rotateX(214deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(18) {
  transform: rotateY(40deg) rotateX(164deg) translateZ(100px);
  background: rgba(173, 135, 103, 0.53);
  filter: blur(0px);
  -webkit-animation: expand18 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand18 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 36ms;
  animation-delay: 36ms;
}
@-webkit-keyframes expand18 {
  0% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(180px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(180px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand18 {
  0% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(180px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(180px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(40deg) rotateX(164deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(19) {
  transform: rotateY(224deg) rotateX(100deg) translateZ(100px);
  background: rgba(157, 239, 63, 0.01);
  filter: blur(0px);
  -webkit-animation: expand19 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand19 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 38ms;
  animation-delay: 38ms;
}
@-webkit-keyframes expand19 {
  0% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(190px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(190px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand19 {
  0% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(190px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(190px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(224deg) rotateX(100deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(20) {
  transform: rotateY(345deg) rotateX(111deg) translateZ(100px);
  background: rgba(236, 197, 171, 0.1);
  filter: blur(0px);
  -webkit-animation: expand20 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand20 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 40ms;
  animation-delay: 40ms;
}
@-webkit-keyframes expand20 {
  0% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(200px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(200px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand20 {
  0% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(200px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(200px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(345deg) rotateX(111deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(21) {
  transform: rotateY(204deg) rotateX(228deg) translateZ(100px);
  background: rgba(133, 248, 76, 0.48);
  filter: blur(0px);
  -webkit-animation: expand21 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand21 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 42ms;
  animation-delay: 42ms;
}
@-webkit-keyframes expand21 {
  0% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(210px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(210px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand21 {
  0% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(210px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(210px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(204deg) rotateX(228deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(22) {
  transform: rotateY(354deg) rotateX(188deg) translateZ(100px);
  background: rgba(56, 18, 233, 0.05);
  filter: blur(0px);
  -webkit-animation: expand22 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand22 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 44ms;
  animation-delay: 44ms;
}
@-webkit-keyframes expand22 {
  0% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(220px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(220px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand22 {
  0% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(220px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(220px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(354deg) rotateX(188deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(23) {
  transform: rotateY(63deg) rotateX(134deg) translateZ(100px);
  background: rgba(5, 162, 72, 0.97);
  filter: blur(0px);
  -webkit-animation: expand23 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand23 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 46ms;
  animation-delay: 46ms;
}
@-webkit-keyframes expand23 {
  0% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(230px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(230px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand23 {
  0% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(230px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(230px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(63deg) rotateX(134deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(24) {
  transform: rotateY(177deg) rotateX(115deg) translateZ(100px);
  background: rgba(101, 234, 166, 0.02);
  filter: blur(0px);
  -webkit-animation: expand24 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand24 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 48ms;
  animation-delay: 48ms;
}
@-webkit-keyframes expand24 {
  0% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(240px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(240px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand24 {
  0% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(240px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(240px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(177deg) rotateX(115deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(25) {
  transform: rotateY(223deg) rotateX(313deg) translateZ(100px);
  background: rgba(218, 121, 84, 0.59);
  filter: blur(0px);
  -webkit-animation: expand25 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand25 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 50ms;
  animation-delay: 50ms;
}
@-webkit-keyframes expand25 {
  0% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(250px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(250px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand25 {
  0% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(250px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(250px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(223deg) rotateX(313deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(26) {
  transform: rotateY(146deg) rotateX(187deg) translateZ(100px);
  background: rgba(63, 162, 78, 0.29);
  filter: blur(0px);
  -webkit-animation: expand26 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand26 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 52ms;
  animation-delay: 52ms;
}
@-webkit-keyframes expand26 {
  0% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(260px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(260px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand26 {
  0% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(260px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(260px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(146deg) rotateX(187deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(27) {
  transform: rotateY(212deg) rotateX(246deg) translateZ(100px);
  background: rgba(174, 134, 185, 0.25);
  filter: blur(0px);
  -webkit-animation: expand27 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand27 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 54ms;
  animation-delay: 54ms;
}
@-webkit-keyframes expand27 {
  0% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(270px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(270px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand27 {
  0% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(270px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(270px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(212deg) rotateX(246deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(28) {
  transform: rotateY(63deg) rotateX(143deg) translateZ(100px);
  background: rgba(120, 88, 136, 0.05);
  filter: blur(0px);
  -webkit-animation: expand28 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand28 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 56ms;
  animation-delay: 56ms;
}
@-webkit-keyframes expand28 {
  0% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(280px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(280px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand28 {
  0% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(280px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(280px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(63deg) rotateX(143deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(29) {
  transform: rotateY(271deg) rotateX(338deg) translateZ(100px);
  background: #eeb902;
  filter: blur(0px);
  -webkit-animation: expand29 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand29 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 58ms;
  animation-delay: 58ms;
}
@-webkit-keyframes expand29 {
  0% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(290px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(290px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand29 {
  0% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(290px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(290px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(271deg) rotateX(338deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(30) {
  transform: rotateY(256deg) rotateX(47deg) translateZ(100px);
  background: rgba(151, 77, 25, 0.45);
  filter: blur(0px);
  -webkit-animation: expand30 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand30 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 60ms;
  animation-delay: 60ms;
}
@-webkit-keyframes expand30 {
  0% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(300px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(300px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand30 {
  0% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(300px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(300px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(256deg) rotateX(47deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(31) {
  transform: rotateY(213deg) rotateX(332deg) translateZ(100px);
  background: rgba(68, 133, 119, 0.56);
  filter: blur(0px);
  -webkit-animation: expand31 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand31 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 62ms;
  animation-delay: 62ms;
}
@-webkit-keyframes expand31 {
  0% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(310px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(310px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand31 {
  0% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(310px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(310px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(213deg) rotateX(332deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(32) {
  transform: rotateY(53deg) rotateX(332deg) translateZ(100px);
  background: rgba(112, 176, 213, 0.61);
  filter: blur(0px);
  -webkit-animation: expand32 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand32 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 64ms;
  animation-delay: 64ms;
}
@-webkit-keyframes expand32 {
  0% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(320px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(320px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand32 {
  0% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(320px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(320px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(53deg) rotateX(332deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(33) {
  transform: rotateY(63deg) rotateX(161deg) translateZ(100px);
  background: rgba(20, 2, 236, 0.76);
  filter: blur(0px);
  -webkit-animation: expand33 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand33 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 66ms;
  animation-delay: 66ms;
}
@-webkit-keyframes expand33 {
  0% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(330px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(330px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand33 {
  0% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(330px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(330px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(63deg) rotateX(161deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(34) {
  transform: rotateY(143deg) rotateX(228deg) translateZ(100px);
  background: rgba(234, 255, 248, 0.35);
  filter: blur(0px);
  -webkit-animation: expand34 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand34 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 68ms;
  animation-delay: 68ms;
}
@-webkit-keyframes expand34 {
  0% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(340px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(340px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand34 {
  0% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(340px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(340px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(143deg) rotateX(228deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(35) {
  transform: rotateY(143deg) rotateX(166deg) translateZ(100px);
  background: rgba(22, 163, 166, 0.2);
  filter: blur(0px);
  -webkit-animation: expand35 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand35 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 70ms;
  animation-delay: 70ms;
}
@-webkit-keyframes expand35 {
  0% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(350px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(350px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand35 {
  0% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(350px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(350px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(143deg) rotateX(166deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(36) {
  transform: rotateY(110deg) rotateX(106deg) translateZ(100px);
  background: rgba(15, 83, 114, 0.2);
  filter: blur(0px);
  -webkit-animation: expand36 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand36 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 72ms;
  animation-delay: 72ms;
}
@-webkit-keyframes expand36 {
  0% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(360px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(360px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand36 {
  0% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(360px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(360px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(110deg) rotateX(106deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(37) {
  transform: rotateY(234deg) rotateX(331deg) translateZ(100px);
  background: rgba(154, 113, 6, 0.82);
  filter: blur(0px);
  -webkit-animation: expand37 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand37 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 74ms;
  animation-delay: 74ms;
}
@-webkit-keyframes expand37 {
  0% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(370px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(370px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand37 {
  0% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(370px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(370px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(234deg) rotateX(331deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(38) {
  transform: rotateY(136deg) rotateX(41deg) translateZ(100px);
  background: rgba(181, 19, 21, 0.97);
  filter: blur(0px);
  -webkit-animation: expand38 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand38 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 76ms;
  animation-delay: 76ms;
}
@-webkit-keyframes expand38 {
  0% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(380px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(380px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand38 {
  0% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(380px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(380px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(136deg) rotateX(41deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(39) {
  transform: rotateY(359deg) rotateX(219deg) translateZ(100px);
  background: rgba(97, 39, 134, 0.96);
  filter: blur(0px);
  -webkit-animation: expand39 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand39 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 78ms;
  animation-delay: 78ms;
}
@-webkit-keyframes expand39 {
  0% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(390px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(390px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand39 {
  0% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(390px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(390px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(359deg) rotateX(219deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(40) {
  transform: rotateY(100deg) rotateX(86deg) translateZ(100px);
  background: rgba(255, 65, 224, 0.09);
  filter: blur(0px);
  -webkit-animation: expand40 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand40 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 80ms;
  animation-delay: 80ms;
}
@-webkit-keyframes expand40 {
  0% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(400px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(400px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand40 {
  0% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(400px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(400px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(100deg) rotateX(86deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(41) {
  transform: rotateY(123deg) rotateX(68deg) translateZ(100px);
  background: rgba(111, 9, 145, 0.4);
  filter: blur(0px);
  -webkit-animation: expand41 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand41 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 82ms;
  animation-delay: 82ms;
}
@-webkit-keyframes expand41 {
  0% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(410px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(410px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand41 {
  0% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(410px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(410px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(123deg) rotateX(68deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(42) {
  transform: rotateY(77deg) rotateX(312deg) translateZ(100px);
  background: rgba(70, 22, 89, 0.46);
  filter: blur(0px);
  -webkit-animation: expand42 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand42 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 84ms;
  animation-delay: 84ms;
}
@-webkit-keyframes expand42 {
  0% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(420px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(420px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand42 {
  0% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(420px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(420px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(77deg) rotateX(312deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(43) {
  transform: rotateY(237deg) rotateX(53deg) translateZ(100px);
  background: rgba(197, 219, 116, 0.58);
  filter: blur(0px);
  -webkit-animation: expand43 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand43 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 86ms;
  animation-delay: 86ms;
}
@-webkit-keyframes expand43 {
  0% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(430px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(430px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand43 {
  0% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(430px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(430px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(237deg) rotateX(53deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(44) {
  transform: rotateY(87deg) rotateX(267deg) translateZ(100px);
  background: rgba(49, 222, 65, 0.26);
  filter: blur(0px);
  -webkit-animation: expand44 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand44 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 88ms;
  animation-delay: 88ms;
}
@-webkit-keyframes expand44 {
  0% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(440px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(440px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand44 {
  0% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(440px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(440px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(87deg) rotateX(267deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(45) {
  transform: rotateY(195deg) rotateX(18deg) translateZ(100px);
  background: rgba(115, 7, 214, 0.61);
  filter: blur(0px);
  -webkit-animation: expand45 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand45 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 90ms;
  animation-delay: 90ms;
}
@-webkit-keyframes expand45 {
  0% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(450px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(450px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand45 {
  0% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(450px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(450px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(195deg) rotateX(18deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(46) {
  transform: rotateY(95deg) rotateX(331deg) translateZ(100px);
  background: rgba(115, 101, 107, 0.12);
  filter: blur(0px);
  -webkit-animation: expand46 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand46 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 92ms;
  animation-delay: 92ms;
}
@-webkit-keyframes expand46 {
  0% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(460px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(460px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand46 {
  0% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(460px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(460px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(95deg) rotateX(331deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(47) {
  transform: rotateY(145deg) rotateX(73deg) translateZ(100px);
  background: rgba(148, 40, 211, 0.83);
  filter: blur(0px);
  -webkit-animation: expand47 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand47 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 94ms;
  animation-delay: 94ms;
}
@-webkit-keyframes expand47 {
  0% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(470px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(470px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand47 {
  0% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(470px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(470px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(145deg) rotateX(73deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(48) {
  transform: rotateY(70deg) rotateX(81deg) translateZ(100px);
  background: rgba(19, 199, 20, 0.3);
  filter: blur(0px);
  -webkit-animation: expand48 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand48 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 96ms;
  animation-delay: 96ms;
}
@-webkit-keyframes expand48 {
  0% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(480px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(480px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand48 {
  0% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(480px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(480px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(70deg) rotateX(81deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(49) {
  transform: rotateY(87deg) rotateX(51deg) translateZ(100px);
  background: rgba(238, 108, 149, 0.06);
  filter: blur(0px);
  -webkit-animation: expand49 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand49 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 98ms;
  animation-delay: 98ms;
}
@-webkit-keyframes expand49 {
  0% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(490px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(490px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand49 {
  0% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(490px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(490px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(87deg) rotateX(51deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(50) {
  transform: rotateY(124deg) rotateX(265deg) translateZ(100px);
  background: rgba(236, 177, 179, 0.6);
  filter: blur(0px);
  -webkit-animation: expand50 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand50 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 100ms;
  animation-delay: 100ms;
}
@-webkit-keyframes expand50 {
  0% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(500px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(500px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand50 {
  0% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(500px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(500px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(124deg) rotateX(265deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(51) {
  transform: rotateY(10deg) rotateX(10deg) translateZ(100px);
  background: rgba(66, 137, 45, 0.71);
  filter: blur(0px);
  -webkit-animation: expand51 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand51 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 102ms;
  animation-delay: 102ms;
}
@-webkit-keyframes expand51 {
  0% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(510px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(510px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand51 {
  0% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(510px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(510px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(10deg) rotateX(10deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(52) {
  transform: rotateY(74deg) rotateX(106deg) translateZ(100px);
  background: rgba(245, 130, 241, 0.89);
  filter: blur(0px);
  -webkit-animation: expand52 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand52 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 104ms;
  animation-delay: 104ms;
}
@-webkit-keyframes expand52 {
  0% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(520px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(520px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand52 {
  0% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(520px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(520px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(74deg) rotateX(106deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(53) {
  transform: rotateY(100deg) rotateX(94deg) translateZ(100px);
  background: rgba(72, 108, 193, 0.31);
  filter: blur(0px);
  -webkit-animation: expand53 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand53 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 106ms;
  animation-delay: 106ms;
}
@-webkit-keyframes expand53 {
  0% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(530px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(530px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand53 {
  0% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(530px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(530px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(100deg) rotateX(94deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(54) {
  transform: rotateY(123deg) rotateX(315deg) translateZ(100px);
  background: rgba(228, 28, 195, 0.13);
  filter: blur(0px);
  -webkit-animation: expand54 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand54 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 108ms;
  animation-delay: 108ms;
}
@-webkit-keyframes expand54 {
  0% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(540px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(540px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand54 {
  0% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(540px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(540px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(123deg) rotateX(315deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(55) {
  transform: rotateY(352deg) rotateX(342deg) translateZ(100px);
  background: rgba(226, 42, 230, 0.84);
  filter: blur(0px);
  -webkit-animation: expand55 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand55 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 110ms;
  animation-delay: 110ms;
}
@-webkit-keyframes expand55 {
  0% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(550px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(550px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand55 {
  0% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(550px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(550px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(352deg) rotateX(342deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(56) {
  transform: rotateY(131deg) rotateX(40deg) translateZ(100px);
  background: rgba(76, 253, 156, 0.55);
  filter: blur(0px);
  -webkit-animation: expand56 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand56 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 112ms;
  animation-delay: 112ms;
}
@-webkit-keyframes expand56 {
  0% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(560px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(560px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand56 {
  0% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(560px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(560px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(131deg) rotateX(40deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(57) {
  transform: rotateY(87deg) rotateX(285deg) translateZ(100px);
  background: rgba(227, 202, 160, 0.54);
  filter: blur(0px);
  -webkit-animation: expand57 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand57 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 114ms;
  animation-delay: 114ms;
}
@-webkit-keyframes expand57 {
  0% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(570px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(570px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand57 {
  0% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(570px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(570px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(87deg) rotateX(285deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(58) {
  transform: rotateY(82deg) rotateX(289deg) translateZ(100px);
  background: rgba(227, 125, 111, 0.42);
  filter: blur(0px);
  -webkit-animation: expand58 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand58 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 116ms;
  animation-delay: 116ms;
}
@-webkit-keyframes expand58 {
  0% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(580px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(580px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand58 {
  0% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(580px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(580px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(82deg) rotateX(289deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(59) {
  transform: rotateY(142deg) rotateX(77deg) translateZ(100px);
  background: rgba(210, 32, 126, 0.7);
  filter: blur(0px);
  -webkit-animation: expand59 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand59 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 118ms;
  animation-delay: 118ms;
}
@-webkit-keyframes expand59 {
  0% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(590px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(590px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand59 {
  0% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(590px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(590px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(142deg) rotateX(77deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(60) {
  transform: rotateY(240deg) rotateX(297deg) translateZ(100px);
  background: rgba(144, 215, 236, 0.48);
  filter: blur(0px);
  -webkit-animation: expand60 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand60 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 120ms;
  animation-delay: 120ms;
}
@-webkit-keyframes expand60 {
  0% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(600px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(600px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand60 {
  0% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(600px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(600px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(240deg) rotateX(297deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(61) {
  transform: rotateY(307deg) rotateX(2deg) translateZ(100px);
  background: rgba(72, 45, 154, 0.61);
  filter: blur(0px);
  -webkit-animation: expand61 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand61 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 122ms;
  animation-delay: 122ms;
}
@-webkit-keyframes expand61 {
  0% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(610px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(610px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand61 {
  0% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(610px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(610px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(307deg) rotateX(2deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(62) {
  transform: rotateY(275deg) rotateX(71deg) translateZ(100px);
  background: rgba(48, 209, 134, 0.37);
  filter: blur(0px);
  -webkit-animation: expand62 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand62 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 124ms;
  animation-delay: 124ms;
}
@-webkit-keyframes expand62 {
  0% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(620px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(620px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand62 {
  0% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(620px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(620px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(275deg) rotateX(71deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(63) {
  transform: rotateY(356deg) rotateX(258deg) translateZ(100px);
  background: rgba(40, 182, 4, 0.44);
  filter: blur(0px);
  -webkit-animation: expand63 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand63 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 126ms;
  animation-delay: 126ms;
}
@-webkit-keyframes expand63 {
  0% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(630px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(630px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand63 {
  0% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(630px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(630px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(356deg) rotateX(258deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(64) {
  transform: rotateY(320deg) rotateX(76deg) translateZ(100px);
  background: rgba(5, 141, 14, 0.05);
  filter: blur(0px);
  -webkit-animation: expand64 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand64 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 128ms;
  animation-delay: 128ms;
}
@-webkit-keyframes expand64 {
  0% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(640px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(640px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand64 {
  0% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(640px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(640px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(320deg) rotateX(76deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(65) {
  transform: rotateY(172deg) rotateX(41deg) translateZ(100px);
  background: rgba(240, 165, 233, 0.17);
  filter: blur(0px);
  -webkit-animation: expand65 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand65 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 130ms;
  animation-delay: 130ms;
}
@-webkit-keyframes expand65 {
  0% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(650px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(650px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand65 {
  0% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(650px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(650px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(172deg) rotateX(41deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(66) {
  transform: rotateY(58deg) rotateX(3deg) translateZ(100px);
  background: rgba(61, 60, 176, 0.23);
  filter: blur(0px);
  -webkit-animation: expand66 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand66 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 132ms;
  animation-delay: 132ms;
}
@-webkit-keyframes expand66 {
  0% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(660px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(660px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand66 {
  0% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(660px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(660px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(58deg) rotateX(3deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(67) {
  transform: rotateY(213deg) rotateX(86deg) translateZ(100px);
  background: rgba(236, 32, 39, 0.62);
  filter: blur(0px);
  -webkit-animation: expand67 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand67 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 134ms;
  animation-delay: 134ms;
}
@-webkit-keyframes expand67 {
  0% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(670px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(670px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand67 {
  0% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(670px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(670px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(213deg) rotateX(86deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(68) {
  transform: rotateY(176deg) rotateX(161deg) translateZ(100px);
  background: rgba(139, 146, 220, 0.69);
  filter: blur(0px);
  -webkit-animation: expand68 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand68 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 136ms;
  animation-delay: 136ms;
}
@-webkit-keyframes expand68 {
  0% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(680px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(680px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand68 {
  0% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(680px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(680px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(176deg) rotateX(161deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(69) {
  transform: rotateY(198deg) rotateX(24deg) translateZ(100px);
  background: rgba(15, 66, 24, 0.05);
  filter: blur(0px);
  -webkit-animation: expand69 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand69 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 138ms;
  animation-delay: 138ms;
}
@-webkit-keyframes expand69 {
  0% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(690px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(690px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand69 {
  0% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(690px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(690px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(198deg) rotateX(24deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(70) {
  transform: rotateY(342deg) rotateX(59deg) translateZ(100px);
  background: rgba(230, 240, 118, 0.22);
  filter: blur(0px);
  -webkit-animation: expand70 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand70 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 140ms;
  animation-delay: 140ms;
}
@-webkit-keyframes expand70 {
  0% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(700px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(700px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand70 {
  0% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(700px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(700px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(342deg) rotateX(59deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(71) {
  transform: rotateY(228deg) rotateX(298deg) translateZ(100px);
  background: rgba(76, 23, 108, 0.79);
  filter: blur(0px);
  -webkit-animation: expand71 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand71 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 142ms;
  animation-delay: 142ms;
}
@-webkit-keyframes expand71 {
  0% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(710px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(710px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand71 {
  0% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(710px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(710px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(228deg) rotateX(298deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(72) {
  transform: rotateY(156deg) rotateX(299deg) translateZ(100px);
  background: rgba(186, 119, 120, 0.33);
  filter: blur(0px);
  -webkit-animation: expand72 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand72 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 144ms;
  animation-delay: 144ms;
}
@-webkit-keyframes expand72 {
  0% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(720px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(720px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand72 {
  0% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(720px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(720px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(156deg) rotateX(299deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(73) {
  transform: rotateY(127deg) rotateX(187deg) translateZ(100px);
  background: rgba(79, 104, 220, 0.84);
  filter: blur(0px);
  -webkit-animation: expand73 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand73 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 146ms;
  animation-delay: 146ms;
}
@-webkit-keyframes expand73 {
  0% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(730px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(730px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand73 {
  0% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(730px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(730px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(127deg) rotateX(187deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(74) {
  transform: rotateY(14deg) rotateX(240deg) translateZ(100px);
  background: rgba(255, 121, 4, 0.37);
  filter: blur(0px);
  -webkit-animation: expand74 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand74 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 148ms;
  animation-delay: 148ms;
}
@-webkit-keyframes expand74 {
  0% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(740px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(740px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand74 {
  0% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(740px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(740px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(14deg) rotateX(240deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(75) {
  transform: rotateY(347deg) rotateX(349deg) translateZ(100px);
  background: rgba(166, 228, 107, 0.5);
  filter: blur(0px);
  -webkit-animation: expand75 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand75 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 150ms;
  animation-delay: 150ms;
}
@-webkit-keyframes expand75 {
  0% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(750px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(750px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand75 {
  0% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(750px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(750px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(347deg) rotateX(349deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(76) {
  transform: rotateY(22deg) rotateX(272deg) translateZ(100px);
  background: rgba(113, 226, 95, 0.9);
  filter: blur(0px);
  -webkit-animation: expand76 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand76 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 152ms;
  animation-delay: 152ms;
}
@-webkit-keyframes expand76 {
  0% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(760px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(760px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand76 {
  0% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(760px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(760px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(22deg) rotateX(272deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(77) {
  transform: rotateY(51deg) rotateX(96deg) translateZ(100px);
  background: rgba(18, 4, 147, 0.9);
  filter: blur(0px);
  -webkit-animation: expand77 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand77 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 154ms;
  animation-delay: 154ms;
}
@-webkit-keyframes expand77 {
  0% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(770px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(770px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand77 {
  0% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(770px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(770px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(51deg) rotateX(96deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(78) {
  transform: rotateY(274deg) rotateX(67deg) translateZ(100px);
  background: rgba(40, 246, 169, 0.91);
  filter: blur(0px);
  -webkit-animation: expand78 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand78 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 156ms;
  animation-delay: 156ms;
}
@-webkit-keyframes expand78 {
  0% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(780px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(780px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand78 {
  0% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(780px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(780px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(274deg) rotateX(67deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(79) {
  transform: rotateY(157deg) rotateX(114deg) translateZ(100px);
  background: rgba(102, 107, 75, 0.34);
  filter: blur(0px);
  -webkit-animation: expand79 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand79 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 158ms;
  animation-delay: 158ms;
}
@-webkit-keyframes expand79 {
  0% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(790px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(790px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand79 {
  0% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(790px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(790px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(157deg) rotateX(114deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(80) {
  transform: rotateY(254deg) rotateX(100deg) translateZ(100px);
  background: rgba(65, 108, 234, 0.18);
  filter: blur(0px);
  -webkit-animation: expand80 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand80 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 160ms;
  animation-delay: 160ms;
}
@-webkit-keyframes expand80 {
  0% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(800px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(800px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand80 {
  0% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(800px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(800px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(254deg) rotateX(100deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(81) {
  transform: rotateY(70deg) rotateX(311deg) translateZ(100px);
  background: rgba(252, 174, 201, 0.98);
  filter: blur(0px);
  -webkit-animation: expand81 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand81 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 162ms;
  animation-delay: 162ms;
}
@-webkit-keyframes expand81 {
  0% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(810px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(810px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand81 {
  0% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(810px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(810px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(70deg) rotateX(311deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(82) {
  transform: rotateY(229deg) rotateX(333deg) translateZ(100px);
  background: rgba(180, 124, 21, 0.64);
  filter: blur(0px);
  -webkit-animation: expand82 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand82 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 164ms;
  animation-delay: 164ms;
}
@-webkit-keyframes expand82 {
  0% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(820px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(820px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand82 {
  0% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(820px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(820px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(229deg) rotateX(333deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(83) {
  transform: rotateY(45deg) rotateX(305deg) translateZ(100px);
  background: rgba(149, 114, 189, 0.88);
  filter: blur(0px);
  -webkit-animation: expand83 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand83 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 166ms;
  animation-delay: 166ms;
}
@-webkit-keyframes expand83 {
  0% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(830px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(830px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand83 {
  0% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(830px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(830px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(45deg) rotateX(305deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(84) {
  transform: rotateY(57deg) rotateX(52deg) translateZ(100px);
  background: rgba(34, 236, 211, 0.57);
  filter: blur(0px);
  -webkit-animation: expand84 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand84 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 168ms;
  animation-delay: 168ms;
}
@-webkit-keyframes expand84 {
  0% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(840px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(840px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand84 {
  0% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(840px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(840px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(57deg) rotateX(52deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(85) {
  transform: rotateY(222deg) rotateX(252deg) translateZ(100px);
  background: rgba(74, 49, 11, 0.76);
  filter: blur(0px);
  -webkit-animation: expand85 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand85 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 170ms;
  animation-delay: 170ms;
}
@-webkit-keyframes expand85 {
  0% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(850px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(850px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand85 {
  0% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(850px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(850px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(222deg) rotateX(252deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(86) {
  transform: rotateY(254deg) rotateX(213deg) translateZ(100px);
  background: rgba(182, 108, 67, 0.13);
  filter: blur(0px);
  -webkit-animation: expand86 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand86 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 172ms;
  animation-delay: 172ms;
}
@-webkit-keyframes expand86 {
  0% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(860px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(860px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand86 {
  0% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(860px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(860px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(254deg) rotateX(213deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(87) {
  transform: rotateY(203deg) rotateX(6deg) translateZ(100px);
  background: rgba(152, 185, 148, 0.62);
  filter: blur(0px);
  -webkit-animation: expand87 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand87 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 174ms;
  animation-delay: 174ms;
}
@-webkit-keyframes expand87 {
  0% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(870px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(870px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand87 {
  0% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(870px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(870px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(203deg) rotateX(6deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(88) {
  transform: rotateY(225deg) rotateX(302deg) translateZ(100px);
  background: rgba(200, 220, 36, 0.43);
  filter: blur(0px);
  -webkit-animation: expand88 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand88 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 176ms;
  animation-delay: 176ms;
}
@-webkit-keyframes expand88 {
  0% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(880px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(880px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand88 {
  0% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(880px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(880px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(225deg) rotateX(302deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(89) {
  transform: rotateY(179deg) rotateX(325deg) translateZ(100px);
  background: rgba(94, 240, 207, 0.84);
  filter: blur(0px);
  -webkit-animation: expand89 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand89 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 178ms;
  animation-delay: 178ms;
}
@-webkit-keyframes expand89 {
  0% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(890px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(890px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand89 {
  0% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(890px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(890px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(179deg) rotateX(325deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(90) {
  transform: rotateY(359deg) rotateX(351deg) translateZ(100px);
  background: rgba(67, 151, 146, 0.38);
  filter: blur(0px);
  -webkit-animation: expand90 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand90 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 180ms;
  animation-delay: 180ms;
}
@-webkit-keyframes expand90 {
  0% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(900px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(900px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand90 {
  0% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(900px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(900px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(359deg) rotateX(351deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(91) {
  transform: rotateY(305deg) rotateX(60deg) translateZ(100px);
  background: rgba(65, 67, 135, 0.61);
  filter: blur(0px);
  -webkit-animation: expand91 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand91 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 182ms;
  animation-delay: 182ms;
}
@-webkit-keyframes expand91 {
  0% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(910px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(910px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand91 {
  0% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(910px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(910px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(305deg) rotateX(60deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(92) {
  transform: rotateY(219deg) rotateX(216deg) translateZ(100px);
  background: rgba(204, 141, 130, 0.82);
  filter: blur(0px);
  -webkit-animation: expand92 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand92 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 184ms;
  animation-delay: 184ms;
}
@-webkit-keyframes expand92 {
  0% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(920px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(920px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand92 {
  0% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(920px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(920px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(219deg) rotateX(216deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(93) {
  transform: rotateY(150deg) rotateX(354deg) translateZ(100px);
  background: rgba(188, 150, 235, 0.62);
  filter: blur(0px);
  -webkit-animation: expand93 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand93 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 186ms;
  animation-delay: 186ms;
}
@-webkit-keyframes expand93 {
  0% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(930px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(930px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand93 {
  0% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(930px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(930px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(150deg) rotateX(354deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(94) {
  transform: rotateY(359deg) rotateX(48deg) translateZ(100px);
  background: rgba(121, 138, 120, 0.43);
  filter: blur(0px);
  -webkit-animation: expand94 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand94 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 188ms;
  animation-delay: 188ms;
}
@-webkit-keyframes expand94 {
  0% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(940px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(940px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand94 {
  0% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(940px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(940px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(359deg) rotateX(48deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(95) {
  transform: rotateY(324deg) rotateX(269deg) translateZ(100px);
  background: rgba(203, 76, 68, 0.03);
  filter: blur(0px);
  -webkit-animation: expand95 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand95 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 190ms;
  animation-delay: 190ms;
}
@-webkit-keyframes expand95 {
  0% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(950px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(950px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand95 {
  0% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(950px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(950px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(324deg) rotateX(269deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(96) {
  transform: rotateY(11deg) rotateX(74deg) translateZ(100px);
  background: rgba(193, 122, 27, 0.75);
  filter: blur(0px);
  -webkit-animation: expand96 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand96 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 192ms;
  animation-delay: 192ms;
}
@-webkit-keyframes expand96 {
  0% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(960px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(960px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand96 {
  0% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(960px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(960px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(11deg) rotateX(74deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(97) {
  transform: rotateY(301deg) rotateX(111deg) translateZ(100px);
  background: rgba(202, 239, 73, 0.78);
  filter: blur(0px);
  -webkit-animation: expand97 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand97 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 194ms;
  animation-delay: 194ms;
}
@-webkit-keyframes expand97 {
  0% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(970px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(970px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand97 {
  0% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(970px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(970px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(301deg) rotateX(111deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(98) {
  transform: rotateY(70deg) rotateX(154deg) translateZ(100px);
  background: rgba(78, 231, 181, 0.62);
  filter: blur(0px);
  -webkit-animation: expand98 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand98 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 196ms;
  animation-delay: 196ms;
}
@-webkit-keyframes expand98 {
  0% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(980px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(980px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand98 {
  0% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(980px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(980px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(70deg) rotateX(154deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(99) {
  transform: rotateY(292deg) rotateX(201deg) translateZ(100px);
  background: rgba(253, 138, 126, 0.93);
  filter: blur(0px);
  -webkit-animation: expand99 10s linear infinite, sparkle 0.25s linear infinite;
  animation: expand99 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 198ms;
  animation-delay: 198ms;
}
@-webkit-keyframes expand99 {
  0% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(990px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(990px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand99 {
  0% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(990px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(990px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(292deg) rotateX(201deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}
.point:nth-child(100) {
  transform: rotateY(88deg) rotateX(192deg) translateZ(100px);
  background: rgba(237, 56, 191, 0.3);
  filter: blur(0px);
  -webkit-animation: expand100 10s linear infinite,
    sparkle 0.25s linear infinite;
  animation: expand100 10s linear infinite, sparkle 0.25s linear infinite;
  -webkit-animation-delay: 200ms;
  animation-delay: 200ms;
}
@-webkit-keyframes expand100 {
  0% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(1000px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(1000px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@keyframes expand100 {
  0% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
  20%,
  40% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(1000px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  40%,
  60% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(400px);
    filter: blur(0px);
    width: 40px;
    height: 40px;
  }
  65%,
  80% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(1000px);
    filter: blur(10px);
    width: 20px;
    height: 20px;
  }
  85%,
  100% {
    transform: rotateY(88deg) rotateX(192deg) translateZ(100px);
    filter: blur(0px);
    width: 20px;
    height: 20px;
  }
}
@-webkit-keyframes sparkle {
  50% {
    background: lemonchiffon;
  }
}

@-webkit-keyframes fullrotate {
  to {
    transform: translate3d(-50%, -50%, 0) rotateY(360deg) rotateZ(360deg);
  }
}

@keyframes fullrotate {
  to {
    transform: translate3d(-50%, -50%, 0) rotateY(360deg) rotateZ(360deg);
  }
}
</style>
