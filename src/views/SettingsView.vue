<template>
  <div>
    <div class="settingsFlexContainer" id="settingsFlexContainer">
      <div class="settingsHeader shadow" id="header">
        <span><BackButton /></span>Menü
      </div>
      <div class="settingsElement shadow" id="element1">
        <div class="settingSummary">Benachrichtigungen</div>
        <hr />
        <div class="setting">Push Benachrichtigungen</div>
        <hr />
        <div class="setting">E-Mail Benachrichtigungen</div>
        <hr />
      </div>
      <div class="settingsElement shadow" id="element2">
        <div class="settingSummary">Informationen</div>
        <hr />
        <div class="setting">Deine Scans</div>
        <hr />
        <div class="setting">Tutorial</div>
        <hr />
      </div>
      <div class="settingsElement shadow" id="element3">
        <div class="settingSummary">Über weAR check</div>
        <hr />
        <div class="setting">Impressum</div>
        <hr />
        <div class="setting">Nutzungsbedingungen</div>
        <hr />
        <div class="setting">Datenschutz</div>
        <hr />
      </div>
    </div>
  </div>
</template>

<style>
hr {
  border: 1px solid lightgray;
  border-radius: 1px;
}
.setting {
  margin: 0.7em;
  font-size: 1.2em;
}
.settingSummary {
  font-size: 1.7em;
  margin: 0.5em;
}

.settingsFlexContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 2em 4em 2em;
  background-color: lightgray;
  height: 100vh;
}

.settingsHeader {
  text-align: center;
  padding: 0.5em;
  font-size: 2em;
  background-color: #fff;
}
.settingsElement {
  text-align: left;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  border-radius: 5px;
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
