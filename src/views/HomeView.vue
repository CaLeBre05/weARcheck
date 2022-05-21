<template>
  <div>
    <div class="flex-container" id="flex-container">
      <div class="siegel-background" id="siegel">
        <div class="home-button" id="siegel-background-button">
          <router-link
            class="router"
            style="text-decoration: none; color: inherit"
            to="/Siegel"
            >Siegel</router-link
          >
        </div>
      </div>
      <div class="wsk-background" id="wsk">
        <div class="home-button" id="wsk-background-button">
          <router-link style="text-decoration: none; color: inherit" to="/WSK"
            >Wertschöpfungskette</router-link
          >
        </div>
      </div>
    </div>
    <div class="news">
      News
      <hr />
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
  box-shadow: 3px 3px 20px;
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
  bottom: -10px;
  text-align: center;
  font-size: 1.6em;
  font-weight: bolder;
  padding: 0.7em;
  display: inline-block;
  box-shadow: 3px 3px 20px;
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
