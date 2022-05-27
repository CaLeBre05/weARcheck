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
  margin: 1em;
  padding: 1em;
  height: 800px;
}

.settingsHeader {
  text-align: center;
  padding: 0.5em;
  font-size: 2em;
  font-weight: bold;
}
.settingsElement {
  height: 200px;
  text-align: center;
  border: 1px solid;
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
