<template>
  <div>
    <div
      v-if="
        typeof arSupported == undefined ||
        arSupported === null ||
        !this.sessionStarted
      "
      class="card"
    >
      checking if AR is supported...
    </div>
    <div v-if="arSupported === false" class="card">
      your browser doesn't support AR
    </div>
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
// import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import * as THREE from "three";

export default {
  name: "ARView",
  data: function () {
    var sessionStarted = false;
    var arSupported;
    var gl;
    var renderer;
    var scene;
    var camera;
    var localReferenceSpace;
    var viewerSpace;
    const stabilized = false;
    var favoured = false;
    return {
      arSupported: arSupported,
      sessionStarted: sessionStarted,
      gl: gl,
      xrSession: xrSession,
      renderer: renderer,
      scene: scene,
      camera: camera,
      localReferenceSpace: localReferenceSpace,
      viewerSpace: viewerSpace,
      stabilized: stabilized,
      favoured: favoured,
    };
  },
  created: function () {},
  mounted: function () {
    console.log("The id is: " + this.$route.params._id);
    this.init();
    this.animate();
  },
  async unmounted() {
    if (this.xrSession) {
      await this.xrSession.end();
    }
  },
  methods: {
    async init() {
      const container = document.createElement("div");
      document.body.appendChild(container);

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        40
      );

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      // This next line is important to to enable the renderer for WebXR
      this.renderer.xr.enabled = true; // New!
      container.appendChild(this.renderer.domElement);

      var light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      light.position.set(0.5, 1, 0.25);
      this.scene.add(light);

      const geometry = new THREE.IcosahedronGeometry(0.1, 1);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color("rgb(226,35,213)"),
        shininess: 6,
        flatShading: true,
        transparent: 1,
        opacity: 0.8,
      });

      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, -0.5);
      this.scene.add(mesh);

      this.startAR();

      // Add the AR button to the body of the DOM
      //document.body.appendChild(ARButton.createButton(renderer));

      //window.addEventListener('resize', onWindowResize, false);
    },
    async startAR() {
      const that = this;
      navigator.xr
        .isSessionSupported("immersive-ar")
        .then(function (supported) {
          if (supported) {
            navigator.xr
              .requestSession("immersive-ar")
              .then((session) => that.onSessionStarted(session));
          } else {
            that.arSupported = false;
          }
        })
        .catch((e) => console.log(e));
      this.sessionStarted = true;
    },
    async onSessionStarted(session) {
      console.log("onSesionStarted");
      //session.addEventListener("end", onSessionEnded);

      this.renderer.xr.setReferenceSpaceType("local");

      await this.renderer.xr.setSession(session);
      this.sessionStarted = true;
    },
    animate() {
      this.renderer.setAnimationLoop(this.render);
    },
    render() {
      this.renderer.render(this.scene, this.camera);
    },

    async routeToScanView() {
      await await this.xrSession
        .end()
        .catch((e) => console.log(e))
        .then(() => this.$router.push("/scan"));
    },
  },
  computed: {},
};
</script>
<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
.card {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 50px 20px;
  margin: 60px;
  text-align: center;
  background-color: #34a0a4;
  color: white;
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
