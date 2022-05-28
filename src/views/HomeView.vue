<template>
  <div>
    <div class="flex-container" id="flex-container">
      <div class="siegel-background shadow" id="siegel">
        <div class="home-button shadow" id="siegel-background-button">
          <router-link
            class="router"
            style="text-decoration: none; color: black"
            to="/Siegel"
            >Siegel</router-link
          >
        </div>
      </div>
      <div class="wsk-background shadow" id="wsk">
        <div class="home-button shadow" id="wsk-background-button">
          <router-link style="text-decoration: none; color: black" to="/WSK"
            >Wertschöpfungskette</router-link
          >
        </div>
      </div>
    </div>
    <div class="news">
      <span>News</span>
    </div>
    <Carousel />
  </div>
</template>

<script>
import Carousel from "@/components/carousel.vue";
export default {
  name: "HomeView",
  components: { Carousel },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

hr {
  border-top: 1px solid black;
}
.news {
  width: 100%;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 1em 0 0.25em;
  padding-left: 8%;
}

.news span {
  background: #fff;
  padding: 0 10px;
  font-size: 26px;
}
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;
}

.wsk-background,
.siegel-background {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  margin: 1em;
}

.wsk-background {
  background-image: url("@/assets/img/plane.jpg");
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.siegel-background {
  background-image: url("@/assets/img/siegel_aufmacher.jpg");
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.home-button {
  position: absolute;
  bottom: -12px;
  text-align: center;
  font-size: 1.625em;
  padding: 0.5em;
  display: inline-block;
}

#siegel-background-button {
  background-color: #c1a285;
}

#wsk-background-button {
  background-color: #d9ed92;
}

.news {
  font-size: 2em;
}
</style>
