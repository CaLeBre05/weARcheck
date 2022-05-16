<template>
  <div>
    <div id="app">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import UnityWebgl from "unity-webgl";

export default {
  name: "Unity",
  components: { UnityWebgl },
  mounted() {
    var Unity = new UnityWebgl("#canvas", {
      loaderUrl: "/Build/Build/unityLoader.js",
    });

    Unity.on("progress", (percent) => console.log("Unity Loaded: ", percent))
      .on("created", () => console.log("Unity Instance: created."))
      .on("destroyed", () => console.log("Unity Instance: Destroyed."));
  },
  methods: {},
};
</script>
<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
