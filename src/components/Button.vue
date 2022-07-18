<template>
  <button v-on:click="onClickButton()" type="button" class="button shadow">
    <span
      v-if="button__image"
      class="button__image"
      :style="backgroundImage"
    ></span>
    <span class="button__text">
      <slot></slot>
    </span>
    <span
      class="button__icon"
      :style="{
        'background-color': color,
      }"
    >
      <img src="../assets/svg/forward.svg" class="icon" />
    </span>
  </button>
</template>

<script>
export default {
  name: "Icon",
  props: {
    color: String,
    button__image: String,
  },
  data() {
    return {
      backgroundImage: {
        backgroundImage: this.button__image
          ? `url(${require("@/assets/img/" + this.button__image)})`
          : {},
      },
    };
  },
  methods: {
    onClickButton() {
      this.$emit("clicked");
    },
    getImgUrl() {
      return "'@/assets/img/" + this.image + "'";
    },
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
.button {
  position: relative;
  display: inline-block;
  height: 48px;
  padding: 0;
  background: white;
  border: none;
  outline: none;
  border-radius: 1px;
  overflow: hidden;
  text-align: left;
  width: 100%;
  padding-left: 10px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 24px;
  font-family: "Nunito", sans-serif;
}
.button:hover {
  background: #e7e7e5;
}
.button:active {
  background: #e7e7e5;
}
.button__text,
.button__icon,
.button__image {
  display: inline-flex;
  align-items: center;
  color: rgb(0, 0, 0);
  height: 100%;
}
.button__text {
  max-width: calc(96% - 45px);
  margin-left: 2%;
  margin-right: 2%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 26px;
}
.button__icon {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
  background: rgba(0, 0, 0, 0.08);
  box-shadow: 10px 20px 15px silver;
}
.button__image {
  position: relative;
  float: left;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 35px;
  background-position: center;
  text-align: center;
}
.icon {
  margin: auto;
  width: 50%;
  height: 50%;
}
</style>