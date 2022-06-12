<template>
  <div class="wrapper">
    <div id="reader"></div>
    <img
      src="../assets/svg/switch-camera.svg"
      class="change-camera-btn"
      v-if="
        this.isActive &&
        !this.showCard &&
        this.cameras &&
        this.cameras.length > 1
      "
      @click="changeCamera()"
    />
    <div id="result" class="success" v-if="this.showCard && this.result">
      <div class="header">Scan erfolgreich!</div>
      <div class="sub-header">Ihr gescanntes kleidungsstück:</div>
      <img width="150" height="150" v-bind:src="this.result.picture" />
      <button class="ar-btn shadow" @click="navigateToAR()">AR-Ansicht</button>
      <button class="new-btn shadow" @click="newScan()">neuer Scan</button>
    </div>
    <div id="result" class="error" v-if="this.showCard && !this.result">
      <div class="header">Kein Treffer!</div>
      <div class="sub-header">
        Dieser Artikel wurde nicht erkannt. Bitte scannen Sie einen anderen
        Artikel.
      </div>
      <div class="spacer"></div>
      <button class="new-btn shadow" @click="newScan()">neuer Scan</button>
    </div>
  </div>
</template>

<script>
import { Html5Qrcode } from "html5-qrcode";
import data from "../server/db.json";

export default {
  name: "ScanView",
  props: {},
  data() {
    let html5QrCode;
    let timeout;
    return {
      cameras: [],
      selectedCamera: 0,
      html5QrCode: html5QrCode,
      boxSize: 0,
      isActive: false,
      showCard: false,
      timeout: timeout,
    };
  },
  destroyed() {
    if (this.isActive) {
      this.html5QrCode.stop();
    }
  },
  mounted() {
    window.addEventListener("resize", this.resize);

    this.html5QrCode = new Html5Qrcode("reader");

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          devices.forEach((device) => {
            this.cameras.push(device);
          });
          this.selectedCamera = devices.length - 1;
          this.startScan();
        }
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  },
  unmounted() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.restartScan, 50);
    },
    restartScan() {
      if (this.isActive === true) {
        this.html5QrCode.stop().then(() => {
          this.isActive = false;
          this.startScan();
        });
      } else {
        this.startScan();
      }
    },
    startScan() {
      this.getBoxSize();
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
        })
        .then(() => (this.isActive = true));
    },
    getBoxSize() {
      if (innerHeight > innerWidth) {
        this.boxSize = innerWidth * 0.5;
      } else {
        this.boxSize = innerHeight * 0.5;
      }
    },
    onDecoded(decodedText, decodedResult) {
      if (this.showCard === false) {
        console.log(decodedResult);
        this.showResult(decodedResult);
      }
    },
    changeCamera() {
      this.selectedCamera = (this.selectedCamera + 1) % this.cameras.length;
      this.restartScan();
    },
    showResult(result) {
      this.searchDB(result.decodedText);
    },
    async searchDB(id) {
      let filteredArray = await data.filter((item) => {
        return item._id === id;
      })[0];

      if (filteredArray) {
        this.result = filteredArray;
        console.log(this.result);
        this.showCard = true;
      } else {
        this.result = undefined;
        this.showCard = true;
      }
    },
    newScan() {
      this.showCard = false;
    },
    navigateToAR() {
      this.$router.push({ name: "ARView", params: { _id: this.result._id } });
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 !important;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  overflow: hidden;
  background-color: black;
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
  top: 1em;
  right: 1em;
  height: 2.5em;
}
#result {
  z-index: 10;
  width: 80%;
  min-height: 250px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
  border-radius: 8px;
  color: black;
  position: absolute;
  text-align: center;
}
.success {
  background-color: #afe678;
}
.error {
  background-color: #ff8080;
}
.spacer {
  height: 2em;
}
img {
  display: block;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5em;
}
.header {
  font-size: 1.625em;
}
.sub-header {
  font-size: 0.875em;
  margin-bottom: 1em;
}
button {
  padding: 6px 24px;
  border-radius: 8px;
  border: none;
  margin: 0.5em;
  font-family: "Nunito", sans-serif;
}
.ar-btn {
  background: white;
  font-size: 1.125em;
}
.new-btn {
  background: #464646;
  color: white;
  font-size: 0.875em;
}
</style>
