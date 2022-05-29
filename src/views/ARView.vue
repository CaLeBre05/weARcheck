<template>
  <div>
    <button @click="requestAR()" :disabled="!arSupported && sessionStarted">
      AR starten
    </button>
    <div
      v-if="typeof arSupported == undefined || arSupported === null"
      class="card"
    >
      checking if AR is supported...
    </div>
    <div v-if="!arSupported" class="card">your browser doesn't support AR</div>
    <canvas v-show="sessionStarted" ref="canvas"></canvas>
  </div>
</template>

<script>
// import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import * as THREE from "three";

export default {
  name: "ARView",
  data: function () {
    const arSupported = false;
    const sessionStarted = false;
    var xrSession;
    var gl;
    var xrSession;
    var renderer;
    var scene;
    var camera;
    var localReferenceSpace;
    var viewerSpace;
    const stabilized = false;
    return {
      arSupported: arSupported,
      sessionStarted: sessionStarted,
      xrSession: xrSession,
      gl: gl,
      xrSession: xrSession,
      renderer: renderer,
      scene: scene,
      camera: camera,
      localReferenceSpace: localReferenceSpace,
      viewerSpace: viewerSpace,
      stabilized: stabilized,
    };
  },
  created: function () {},
  mounted: function () {
    console.log("The id is: " + this.$route.params._id);
    this.isArSupported();
  },
  methods: {
    isArSupported() {
      const isArSessionSupported =
        navigator.xr &&
        navigator.xr.isSessionSupported &&
        navigator.xr.isSessionSupported("immersive-ar");
      if (isArSessionSupported) {
        console.log("AR supported");
        this.arSupported = true;
        return true;
      } else {
        console.log("AR not supported");
        this.arSupported = false;
        return false;
      }
    },

    async requestAR() {
      console.log("request AR Session");
      this.xrSession = await navigator.xr.requestSession("immersive-ar", {
        requiredFeatures: ["hit-test", "dom-overlay"],
        domOverlay: { root: document.body },
      });
      this.sessionStarted = true;
      this.createXRCanvas();

      await this.onSessionStarted();
    },

    createXRCanvas() {
      console.log("create Canvas");
      var canvas = this.$refs.canvas;
      this.gl = canvas.getContext("webgl", { xrCompatible: true });
      this.xrSession.updateRenderState({
        baseLayer: new XRWebGLLayer(this.xrSession, this.gl),
      });
    },

    async onSessionStarted() {
      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        preserveDrawingBuffer: true,
        canvas: this.canvas,
        context: this.gl,
      });
      this.renderer.autoClear = false;
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      this.scene = new THREE.Scene();
      const light = new THREE.AmbientLight(0xffffff, 1);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
      directionalLight.position.set(10, 15, 10);

      directionalLight.castShadow = true;

      const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
      planeGeometry.rotateX(-Math.PI / 2);

      const shadowMesh = new THREE.Mesh(
        planeGeometry,
        new THREE.ShadowMaterial({
          color: 0x111111,
          opacity: 0.2,
        })
      );

      shadowMesh.name = "shadowMesh";
      shadowMesh.receiveShadow = true;
      shadowMesh.position.y = 10000;

      this.scene.add(shadowMesh);
      this.scene.add(light);
      this.scene.add(directionalLight);
      //this.reticle = new Reticle();
      //this.scene.add(this.reticle);

      this.camera = new THREE.PerspectiveCamera();
      this.camera.matrixAutoUpdate = false;

      this.localReferenceSpace = await this.xrSession.requestReferenceSpace(
        "local"
      );
      this.viewerSpace = await this.xrSession.requestReferenceSpace("viewer");
      this.xrSession.requestAnimationFrame(this.onXRFrame);
    },

    onXRFrame(time, frame) {
      this.xrSession.requestAnimationFrame(this.onXRFrame);
      const framebuffer = this.xrSession.renderState.baseLayer.framebuffer;
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
      this.renderer.setFramebuffer(framebuffer);

      const pose = frame.getViewerPose(this.localReferenceSpace);
      if (pose) {
        const view = pose.views[0];

        const viewport = this.xrSession.renderState.baseLayer.getViewport(view);
        this.renderer.setSize(viewport.width, viewport.height);

        this.camera.matrix.fromArray(view.transform.matrix);
        this.camera.projectionMatrix.fromArray(view.projectionMatrix);
        this.camera.updateMatrixWorld(true);
        /*
        const hitTestResults = frame.getHitTestResults(this.hitTestSource);

        if (!this.stabilized && hitTestResults.length > 0) {
          this.stabilized = true;
          //document.body.classList.add("stabilized");
        }
        if (hitTestResults.length > 0) {
          const hitPose = hitTestResults[0].getPose(this.localReferenceSpace);

          // Update the reticle position
          this.reticle.visible = true;
          this.reticle.position.set(
            hitPose.transform.position.x,
            hitPose.transform.position.y,
            hitPose.transform.position.z
          );
          this.reticle.updateMatrixWorld(true);
        }
        */
        this.renderer.render(this.scene, this.camera);
      }
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
</style>
