<template>
  <div>
    <div id="reader"></div>
    <div id="result"></div>
    <button
      v-if="this.cameras && this.cameras.length > 1"
      @click="changeCamera()"
      class="change-camera-btn"
    >
      Change Camera
    </button>
  </div>
</template>

<script>
import { Html5Qrcode } from "html5-qrcode";

export default {
  name: "BarcodeScanner",
  props: {
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cameras: [],
      selectedCamera: 0,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      html5QrCode: "",
      boxSize: 0,
    };
  },
  watch: {
    isActive: function () {
      this.html5QrCode.stop().then(() => {
        this.$emit("stopped", true);
      });
    },
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  mounted() {
    this.html5QrCode = new Html5Qrcode("reader");
    this.boxSize = innerWidth / 2.0;

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          console.log("found devices: ", devices);
          devices.forEach((device) => {
            this.cameras.push(device);
          });
          this.selectedCamera = 0;
          this.startScan();
        }
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  },
  methods: {
    startScan() {
      this.html5QrCode
        .start(
          this.cameras[this.selectedCamera].id,
          {
            qrbox: { width: this.boxSize, height: this.boxSize },
            aspectRatio: 1.7777778,
          },
          (decodedText, decodedResult) => {
            this.onDecoded(decodedText, decodedResult);
          }
        )
        .catch((errorMessage) => {
          console.log(errorMessage);
        });
    },
    onDecoded(decodedText, decodedResult) {
      this.html5QrCode
        .stop()
        .then(() => {
          document.getElementById("result").innerHTML = decodedText;
          console.log(decodedResult);
        })
        .catch((errorMessage) => {
          console.log(errorMessage);
        });
    },
    changeCamera() {
      this.selectedCamera = (this.selectedCamera + 1) % this.cameras.length;
      this.html5QrCode.stop().then(() => {
        this.startScan();
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0 !important;
}
.reader {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 50px;
  height: 100%;
  width: 100%;
}
.change-camera-btn {
  position: absolute;
  top: 40px;
  right: 20px;
}
</style>
