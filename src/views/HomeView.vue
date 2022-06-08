<template>
  <div>
    <div class="flex-container" id="flex-container">
      <div
        class="siegel-background shadow"
        id="siegel"
        @click="navigate($event)"
      >
        <div
          class="home-button shadow"
          id="siegel"
          style="background-color: #c1a285"
        >
          Siegel
        </div>
      </div>
      <div class="wsk-background shadow" id="wsk" @click="navigate($event)">
        <div
          class="home-button shadow"
          id="wsk"
          style="background-color: #d9ed92"
        >
          Wertschöpfungskette
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
  methods: {
    navigate(event) {
      var path = event.target.id;
      this.$router.push("/" + path);
    },
  },
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

.news {
  font-size: 2em;
}
</style>
