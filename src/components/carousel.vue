<template>
  <div>
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell shadow" id="first">
        <div class="slideButton shadow" id="firstSlide">
          <router-link
            style="text-decoration: none; color: inherit"
            to="/SlidingWindows/Frauen"
            >Ausbeute trifft oft Frauen</router-link
          >
        </div>
      </div>
      <div class="carousel-cell shadow" id="second">
        <div class="slideButton shadow" id="secondSlide">
          <router-link
            style="text-decoration: none; color: inherit"
            to="/SlidingWindows/GiftigeInhaltsstoffe"
            >Giftige Inhaltsstoffe</router-link
          >
        </div>
      </div>
      <div class="carousel-cell shadow" id="third">
        <div class="slideButton shadow" id="thirdSlide">
          <router-link
            style="text-decoration: none; color: inherit"
            to="/SlidingWindows/FairFashion"
            >Fair Fashion</router-link
          >
        </div>
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "carousel",
  components: {
    Flickity,
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        freeScroll: false,
        autoPlay: 4000,

        // any options from Flickity can be used
      },
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#first {
  background-image: url("@/assets/img/fast_fashion.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#second {
  background-image: url("@/assets/img/schadstoffe_kleidung.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#third {
  background-image: url("@/assets/img/Second_Hand_Kleidung.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#firstSlide,
#secondSlide,
#thirdSlide {
  background-color: #34a0a4;
  color: white;
}

.slideButton {
  position: absolute;
  bottom: 10px;
  text-align: center;
  font-size: 1.2em;
  padding: 0.7em;
  display: inline-block;
}

.carousel-cell {
  display: flex;
  width: 80%;
  height: 250px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  margin: 2em 0.5em 3.5em 0.5em;
}
</style>
