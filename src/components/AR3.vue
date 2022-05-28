<template>
  <div>
    <div
      v-if="typeof arSupported == undefined || arSupported === null"
      class="card"
    >
      checking if AR is supported...
    </div>
    <div v-if="!arSupported" class="card">your browser doesn't support AR</div>
  </div>
</template>

<script>
// import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import * as THREE from "three";

export default {
  name: "TheCanvas",
  data: function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const light = new THREE.DirectionalLight("hsl(0, 100%, 100%)");
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      side: THREE.FrontSide,
      color: "hsl(0, 100%, 50%)",
      wireframe: false,
    });
    const cube = new THREE.Mesh(geometry, material);
    const axes = new THREE.AxesHelper(5);

    return {
      scene: scene,
      camera: camera,
      controls: [],
      renderer: renderer,
      light: light,
      cube: cube,
      axes: axes,
      arSupported: Boolean,
    };
  },
  created: function () {
    this.cube.position.set(0, 0, -1);
    this.scene.add(this.camera);
    this.scene.add(this.light);
    this.scene.add(this.cube);
    this.scene.add(this.axes);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.light.position.set(0, 5, 5);
    this.camera.position.set(0, 1, 5);
    this.scene.background = new THREE.Color("hsl(0, 100%, 100%)");
  },
  mounted: function () {
    if (this.isArSupported()) {
      this.activateXR();
    }
  },
  methods: {
    isArSupported() {
      const isArSessionSupported =
        navigator.xr &&
        navigator.xr.isSessionSupported &&
        navigator.xr.isSessionSupported("immersive-ar");
      if (isArSessionSupported) {
        this.arSupported = true;
        return true;
      } else {
        this.arSupported = false;
        return false;
      }
    },
    async activateXR() {
      try {
        // Initialize a WebXR session using "immersive-ar".
        this.xrSession = await navigator.xr.requestSession("immersive-ar", {
          requiredFeatures: ["hit-test", "dom-overlay"],
          domOverlay: { root: document.body },
        });

        // Create the canvas that will contain our camera's background and our virtual scene.
        this.createXRCanvas();

        // With everything set up, start the app.
        //await this.onSessionStarted();
      } catch (e) {
        console.log(e);
        //onNoXRDevice();
      }
    },
    createXRCanvas() {
      this.canvas = document.createElement("canvas");
      document.body.appendChild(this.canvas);
      this.gl = this.canvas.getContext("webgl", { xrCompatible: true });

      this.xrSession.updateRenderState({
        baseLayer: new XRWebGLLayer(this.xrSession, this.gl),
      });
    },
  },
  computed: {},
};
</script>
<style scoped>
canvas {
  width: 100vw;
  height: 100vh;
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
</style>
