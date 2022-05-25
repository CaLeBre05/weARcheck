<template>
  <button v-on:click="onClickButton(event)" type="button" class="button">
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
        backgroundImage: `url(${require("@/assets/img/" +
          this.button__image)})`,
      },
    };
  },
  methods: {
    onClickButton(event) {
      this.$emit("clicked");
      console.log("Hello world!");
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
  display: inline-block;
  height: 45px;
  padding: 0;
  background: #f8f8f6;
  border: 1px solid rgb(170, 167, 167);
  outline: none;
  border-radius: 1px;
  overflow: hidden;
  text-align: left;
  padding-left: 10px;
  font-size: 18px;
  font-weight: 500;
  width: 90%;
  margin-left: 5%;
  font-family: "Nunito", sans-serif;
  box-shadow: 5px 5px 5px silver;
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
 max-width: calc(96% - 90px);
  margin-left: 2%;
  margin-right: 2%;
  overflow: hidden;
  white-space: nowrap;
}

.button__icon {
  float: right;
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
  
