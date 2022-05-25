<template>
  <div class="image" :style="backgroundImageLink">
    <div
      class="headline"
      :style="{
        'background-color': color,
      }"
    >
      {{ headline }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    color: String,
    headline: String,
    image: String,
  },
  data() {
    return {
      backgroundImageLink: {
        backgroundImage: `url(${require("@/assets/img/" + this.image)})`,
      },
    };
  },
  computed: {},
  methods: {
    getImgUrl() {
      return "'@/assets/img/" + this.image + "'";
    },
  },
};
</script>


<style scoped>
.image {
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  position: relative;
  height: 14em;
  box-shadow: 3px 3px 10px gray;
}
.headline {
  text-align: center;
  font-size: 1.2em;
  padding: 0.7em;
  display: inline-block;
  box-shadow: 3px 3px 10px gray;
  position: absolute;
  bottom: -0.6em;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
}
</style>
