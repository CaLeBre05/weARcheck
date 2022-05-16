<template>
  <body>
    <div id="info">
      <a href="http://threedlibrary.googlecode.com" target="_blank">tdl.js</a> -
      imagesphere
    </div>
    <div id="fpsContainer">
      <div class="fps">fps: <span id="fps"></span></div>
      <div id="status"></div>
    </div>
    <div id="uiContainer">
      <div id="ui"></div>
    </div>
    <div id="viewContainer">
      <canvas
        id="canvas"
        width="1024"
        height="1024"
        style="width: 100%; height: 100%"
      ></canvas>
    </div>
  </body>
</template>

<script>
export default {
  name: "TestARComponent",
  components: {},
  mounted() {
    this.runWebGL();
  },
  methods: {
    runWebGL() {},
  },
};
</script>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  border: 0px;
  padding: 0px;
  margin: 0px;
  font-family: sans-serif;
  overflow: hidden;
  color: #fff;
}
a {
  color: #fff;
}
#info {
  font-size: small;
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 5px;
  text-align: center;
  z-index: 2;
}
CANVAS {
  background-color: gray;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
#uiContainer {
  z-index: 2;
  padding: 1em;
  position: absolute;
  top: 10px;
  right: 20px;
  width: 250px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: xx-small;
}
#ui {
}
#fpsContainer {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  color: white;
  font-family: sans-serif;
}
#viewContainer {
  width: 100%;
  height: 100%;
}
</style>>

