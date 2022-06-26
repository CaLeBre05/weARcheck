<template>
  <div>
    <iframe
      style="
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      "
      src="https://wear-check-unity.web.app/"
      title="weAR check"
      allowfullscreen
      scrolling="no"
    ></iframe>
    <div class="button-wrapper">
      <button class="shadow" @click="favoured = !favoured">
        <img
          :src="
            favoured
              ? require('../assets/img/heart_filled.png')
              : require('../assets/img/heart_outlined.png')
          "
          class="icon"
        />
        <div v-if="!favoured">merken</div>
        <div v-else>gemerkt</div>
      </button>
      <button class="shadow" @click="routeToScanView()">
        <img src="../assets/img/scan.png" class="icon" />
        <div>neuer Scan</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ARView",
  data: function () {
    var favoured = false;
    return {
      favoured: favoured,
    };
  },
  async unmounted() {},
  methods: {
    async routeToScanView() {
      this.$router.push("/scan");
    },
  },
};
</script>
<style scoped>
iframe {
  width: 100%;
  height: 100%;
}
.button-wrapper {
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
}
button {
  z-index: 1;
  padding: 6px 18px;
  border-radius: 8px;
  border: none;
  margin: 0.5em;
  font-family: "Nunito", sans-serif;
  background: white;
  font-size: 1.125em;
  display: flex;
  align-items: center;
}
.icon {
  height: 20px;
  padding-right: 5px;
}
</style>
