<template>
  <div>
    <div class="scansFlexContainer" id="scansFlexContainer">
      <div class="scansHeader shadow" id="header">Deine Scans</div>
      <div class="scansElement shadow" id="scan1">
        <div class="scanDescription">
          {{ data[0].name }} von {{ data[0].brand }}
        </div>
        <div></div>
        <img v-bind:src="data[0].picture" width="100" height="120" />
      </div>
      <div class="scansElement shadow" id="scan2">
        <div class="scanDescription">
          {{ data[1].name }} von {{ data[1].brand }}
        </div>
        <img v-bind:src="data[1].picture" width="100" height="120" />
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
  justify-content: flex-start;
  padding: 1.5em 1em 1.5em 1em;
  margin-bottom: 2em;
  background-color: lightgray;
  min-height: calc(100vh - 50px);
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
import data from "@/server/db.json";

export default {
  name: "DeineScans",
  components: {
    BackButton,
  },
  data() {
    return {
      data: data,
    };
  },
  methods: {
    openAR() {
      let link = "wearcheck://unity?id=" + this.result._id;
      console.log(link);
      window.open(link, "_blanc");
    },
  },
};
</script>
