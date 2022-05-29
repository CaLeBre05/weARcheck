<template>
  <div>
    <div class="fullscreen">
      <!--<BarcodeScanner @stopped="scanStopped = true"></BarcodeScanner>-->
      <!--<AR4></AR4>-->
      <router-link
        class="router"
        style="text-decoration: none; color: red"
        :to="{ name: 'ARView', params: { _id: '123' } }"
        >ARView</router-link
      >
    </div>
  </div>
</template>

<script>
import BarcodeScanner from "../components/BarcodeScanner.vue";
import AR from "../components/AR.vue";
import HelloWorld from "../components/HelloWorld.vue";
import AR2 from "@/components/AR2.vue";
import AR3 from "@/components/AR3.vue";
import AR4 from "@/components/AR4.vue";

export default {
  name: "ScanView",
  components: {
    BarcodeScanner,
    AR,
    HelloWorld,
    AR2,
    AR3,
    AR4,
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  overflow: hidden;
}
</style>