<template>
  <div>
    <div class="fullscreen">
      <!--<BarcodeScanner @stopped="scanStopped = true"></BarcodeScanner>-->
      <!--<ARComponent></ARComponent>-->
      <!--<TestARComponent></TestARComponent>-->
      <!--<Unity></Unity>-->
      <TestUnityComponent2></TestUnityComponent2>
    </div>
  </div>
</template>

<script>
import BarcodeScanner from "../components/BarcodeScanner.vue";
import ARComponent from "@/components/ARComponent.vue";
import TestARComponent from "@/components/TestARComponent.vue";
import Unity from "@/components/TestUnityComponent.vue";
import TestUnityComponent2 from "@/components/TestUnityComponent2.vue";

export default {
  name: "ScanView",
  components: {
    BarcodeScanner,
    ARComponent,
    TestARComponent,
    Unity,
    TestUnityComponent2,
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