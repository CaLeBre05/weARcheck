<template>
  <div>
    <div class="image" :style="backgroundImageLink">
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
    color: String,
    headline: String,
    image: String,
    textColor: String,
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
  background-size: cover;
  position: sticky;
  top: -140px;
  height: 14em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
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
  padding: 20px 0 50px 0;
}
</style>
