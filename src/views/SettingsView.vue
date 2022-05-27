<template>
  <div>
    <div class="settingsFlexContainer" id="settingsFlexContainer">
      <div class="settingsHeader shadow" id="header">
        <span><BackButton /></span>Menü
      </div>
      <div class="settingsElement shadow" id="element1"></div>
      <div class="settingsElement shadow" id="element2"></div>
      <div class="settingsElement shadow" id="element3"></div>
    </div>
  </div>
</template>

<style>
.settingsFlexContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid;
  margin: 0;
  padding: 2em;
  height: 800px;
  background-color: lightgray;
}

.settingsHeader {
  text-align: center;
  padding: 0.5em;
  font-size: 2em;
  font-weight: bold;
  background-color: #fff;
}
.settingsElement {
  height: 150px;
  text-align: center;
  border: 1px solid;
  background-color: #fff;
}
</style>
<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "SettingsView",
  components: {
    BackButton,
  },
};
</script>
