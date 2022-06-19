<template>
  <div>
    <div class="scansContainer">
      <div class="scansFlexContainer" id="scansFlexContainer">
        <div class="scansHeader shadow" id="header">Deine Scans</div>
        <div class="scansElement shadow" id="scan1">
          <div class="scanDescription">Zara Basic T-Shirt Black</div>
          <img src="@/assets/img/basicShirt.jpg" width="100" height="120" />
        </div>
        <div class="scansElement shadow" id="scan2">
          <div class="scanDescription">Zara Jeans Blue</div>
          <img src="@/assets/img/jeans.jpg" width="100" height="120" />
        </div>
      </div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.scanDescription {
  display: flex;
  justify-content: center;
  align-items: center;
}
.scansHeader {
  text-align: center;
  padding: 0.5em;
  margin-bottom: 1em;
  font-size: 26px;
  background-color: #fff;
}

.scansFlexContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5em 1em 1.5em 1em;
}

.scansContainer {
  margin-bottom: 2em;
  background-color: lightgray;
  height: 850px;
}

.scansElement {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 5px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";

export default {
  name: "DeineScans",
  components: {
    BackButton,
  },
};
</script>
