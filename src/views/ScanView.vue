<template>
  <div class="fullscreen">
    <BarcodeScanner @stopped="scanStopped = true"></BarcodeScanner>
  </div>
</template>

<script>
import BarcodeScanner from "../components/BarcodeScanner.vue";

export default {
  name: "ScanView",
  components: {
    BarcodeScanner,
  },
  data() {
    return {
      message: "Hello, the code is: ",
      code: "not yet defined",
      scanStopped: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
* {
  margin: 0 !important;
}

.fullscreen {
  position: fixed;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  overflow: hidden;
}
</style>