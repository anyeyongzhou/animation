<template>
  <div class="body_class">
    <div class="container">
      <div class="card" ref="card1">
        <div class="content">
          <h2>01</h2>
          <h3>Crad One</h3>
          <p>
            Realistic glass hover effect,Realistic glass hover effect,Realistic
            glass hover effect glass hover effect,
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div class="card" ref="card2">
        <div class="content">
          <h2>02</h2>
          <h3>Crad Two</h3>
          <p>
            Realistic glass hover effect,Realistic glass hover effect,Realistic
            glass hover effect glass hover effect,
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div class="card" ref="card3">
        <div class="content">
          <h2>03</h2>
          <h3>Crad Three</h3>
          <p>
            Realistic glass hover effect,Realistic glass hover effect,Realistic
            glass hover effect glass hover effect,
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="primary">
import { ref } from 'vue';
import VanillaTilt from 'vanilla-tilt';
const card1 = ref();
const card2 = ref();
const card3 = ref();
onMounted(() => {
  VanillaTilt.init([card1.value, card2.value, card3.value], {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 1,
    scale: 1.1,
    //axis: 'x',
    //reset: false,
  });
});
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
.body_class {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161626;
}
.container {
  position: relative;
  display: flex;
  // border: 1px solid black;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
}
.card {
  position: relative;
  width: 280px;
  height: 400px;
  // border: 1px solid red;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  //margin: 30px;
  border-radius: 15px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
}
.content {
  padding: 20px;
  text-align: center;
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s;
}
.container .card:hover .content {
  transform: translateY(0);
  opacity: 1;
}
.container .card .content h2 {
  position: absolute;
  top: -80px;
  right: 25px;
  font-size: 128px;
  color: rgba(255, 255, 255, 0.05);
}
.container .card .content h3 {
  font-size: 28px;
  color: #fff;
}
.container .card .content p {
  font-weight: 300;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  margin: 10px 0 15px 0;
}
a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
