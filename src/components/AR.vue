<template>
  <div>
    hello
    <canvas id="canvas"></canvas>
  </div>
</template>


<script>
import * as THREE from "three";
export default {
  name: "AR",
  data: function () {
    const scene = new THREE.Scene();
    // const composer = new THREE.EffectComposer(new WebGLRenderer())
    // const effectPass = new THREE.EffectPass(camera, new BloomEffect())
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
      speed: 0.01,
    };
  },
  created() {},
  mounted() {
    this.checkIfArSupported();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    animate(renderer);
  },
  methods: {
    checkIfArSupported() {
      const isArSessionSupported =
        navigator.xr &&
        navigator.xr.isSessionSupported &&
        navigator.xr.isSessionSupported("immersive-ar");
      if (isArSessionSupported) {
        console.log("supported");
      } else {
        console.log("not supported");
      }
    },
    animate(renderer) {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    },
  },
};
</script>

<style scoped>
</style>