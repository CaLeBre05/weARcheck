<template>
  <div>
    <div class="fullscreen">
      <!--<BarcodeScanner @stopped="scanStopped = true"></BarcodeScanner>-->
      <AR3></AR3>
    </div>
  </div>
</template>

<script>
import BarcodeScanner from "../components/BarcodeScanner.vue";
import AR from "../components/AR.vue";
import HelloWorld from "../components/HelloWorld.vue";
import AR2 from "@/components/AR2.vue";
import AR3 from "@/components/AR3.vue";

export default {
  name: "ScanView",
  components: {
    BarcodeScanner,
    AR,
    HelloWorld,
    AR2,
    AR3,
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