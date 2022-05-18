<template>
  <button v-on:click="onClickButton(event)" type="button" class="button">
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
  },
  methods: {
    onClickButton(event) {
      this.$emit("clicked");
      console.log("Hello world!");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

.button {
  display: inline-block;
  height: 60px;
  padding: 0;
  background: #f8f8f6;
  border: 1px solid rgb(170, 167, 167);
  outline: none;
  border-radius: 1px;
  overflow: hidden;
  text-align: left;
  padding-left: 5px;
  font-size: 24px;
  font-weight: 500;
  width: 100%;
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
.button__icon {
  display: inline-flex;
  align-items: center;
  color: rgb(0, 0, 0);
  height: 100%;
}

.button__icon {
  float: right;
  width: 25%;
  background: rgba(0, 0, 0, 0.08);
  box-shadow: 10px 20px 15px silver;
}

.icon {
  margin: auto;
  width: 50%;
  height: 50%;
}
</style>
