<template>
  <div>
    <div class="image" :style="backgroundProps">
      <div class="spacer"></div>
      <div
        v-if="headline"
        class="headline"
        :style="[
          color
            ? { 'background-color': color }
            : { 'background-color': 'white' },
          textColor ? { color: textColor } : { color: 'black' },
        ]"
      >
        {{ headline }}
      </div>
    </div>
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    backgroundSize: String,
    color: String,
    headline: String,
    image: String,
    textColor: String,
    backgroundColor: String,
  },
  data() {
    let type = this.image.slice(-3) === "svg" ? "svg" : "img";
    let bColor = this.backgroundColor ? this.backgroundColor : "#ffffff";
    let bSize = this.backgroundSize ? this.backgroundSize : "cover";
    return {
      backgroundProps: {
        backgroundImage: `url(${require("@/assets/" +
          type +
          "/" +
          this.image)})`,
        backgroundColor: bColor,
        backgroundSize: bSize,
      },
    };
  },
};
</script>

<style scoped>
.image {
  z-index: 1;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-size: auto;
  position: sticky;
  top: -140px;
  height: 14em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
}
.cover {
  background-size: cover;
}
.spacer {
  height: 11.2em;
}
.headline {
  text-align: center;
  font-size: 1.625em;
  padding: 0.5em;
  display: inline-block;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}
.content {
  height: 100%;
  padding: 30px 0 70px 0;
  margin: 0 5%;
}
</style>
