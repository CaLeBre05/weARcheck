<template>
  <unity
    src="Build/Build.json"
    width="400"
    height="200"
    unityLoader="src/components/Build/UnityLoader.js"
  ></unity>
</template>

<script>
import Unity from "vue-unity-webgl";

export default {
  name: "TestUnityComponent2",
  components: { Unity },
  mounted() {
    this.runWebGL();
  },
  methods: {
    runWebGL() {},
  },
};
</script>