<template>
  <button type="submit" class="backButton" @click="goBack()">
    <img class="backButton" src="../assets/svg/back-arrow.svg" />
  </button>
</template>

<style scoped>
.backButton {
  z-index: 100;
  border-radius: 50px;
  border: none;
  background-color: rgba(211, 211, 211, 0.7);
  position: fixed;
  height: 3em;
  width: 3em;
  top: 3em;
  left: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backbutton{
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
