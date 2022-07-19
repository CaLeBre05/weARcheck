<template>
  <div class="wrapper">
    <button type="submit" class="backButton" @click="goBack()">
      <img class="svg" src="../assets/svg/back-arrow.svg" />
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  z-index: 1000;
  top: 2.3em;
}
.backButton {
  margin-left: 2em;
  border-radius: 50px;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  height: 3em;
  width: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13.3333px;
}

.svg {
  font-size: 13.3333px;
}
</style>

<script>
export default {
  name: "backButton",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
