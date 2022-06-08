<template>
  <div>
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <div
        class="carousel-cell shadow"
        id="Frauen"
        @click="navigate($event)"
        style="
          background-image: url('@/assets/img/fast_fashion.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        "
      >
        <div
          class="slideButton shadow"
          id="Frauen"
          style="background-color: #34a0a4; color: white"
        >
          Ausbeute trifft oft Frauen
        </div>
      </div>
      <div
        class="carousel-cell shadow"
        id="GiftigeInhaltsstoffe"
        @click="navigate($event)"
        style="
          background-image: url('@/assets/img/schadstoffe_kleidung.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        "
      >
        <div
          class="slideButton shadow"
          id="GiftigeInhaltsstoffe"
          style="background-color: #34a0a4; color: white"
        >
          Giftige Inhaltsstoffe
        </div>
      </div>
      <div
        class="carousel-cell shadow"
        id="FairFashion"
        @click="navigate($event)"
        style="
          background-image: url('@/assets/img/Second_Hand_Kleidung.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        "
      >
        <div
          class="slideButton shadow"
          id="FairFashion"
          style="background-color: #34a0a4; color: white"
        >
          Fair Fashion
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
  methods: {
    navigate(event) {
      var path = event.target.id;
      this.$router.push("/SlidingWindows/" + path);
    },
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
.carousel-cell.is-selected {
  -webkit-animation: moveUp 1s forwards;
  animation: moveUp 0.5s forwards;
}
@-webkit-keyframes moveUp {
  from {
    left: 0px;
    top: 0px;
  }

  to {
    left: 0px;
    top: -0.75em;
  }
}
</style>
