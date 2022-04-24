<template>
    <div>
        <div>Scan</div>
        <div class="fullscreen">
            <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
        </div>
        <div class="code">{{ message }}<span v-if="code">{{ code }}</span>
        </div>
    </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
export default {
    name: "ScanView",
    components: {
        StreamBarcodeReader
    },
    data() {
        return {
            message: 'Hello, the code is: ',
            code: 'not yet defined'
        }
    },
    methods: {
        onDecode(result) {
            console.log('result:', result);
            this.code = result;
            console.log(code);
        },
        onLoaded(result) { }
    }
};
</script>

<style>
.fullscreen {
    position: fixed;
    top: 0;
    bottom: 50px;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
}

.code {
    color: azure;
    z-index: 200;
    position: absolute;
}
</style>