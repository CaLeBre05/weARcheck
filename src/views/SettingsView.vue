<template>
  <div>
    <div class="settingsFlexContainer" id="settingsFlexContainer">
      <div class="settingsHeader shadow" id="header">
        <span><BackButton /></span>Menü
      </div>
      <div class="settingsElement shadow" id="element1">
        <div class="settingSummary">Benachrichtigungen</div>
        <hr />
        <div class="setting">
          <div>Push Benachrichtigungen</div>
          <div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <hr />
        <div class="setting">
          <div>E-Mail Benachrichtigungen</div>
          <div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <hr />
      </div>
      <div class="settingsElement shadow" id="element2">
        <div class="settingSummary">Informationen</div>
        <hr />
        <div class="setting">
          <div>Deine Scans</div>
          <div class="settingsArrow">
            <img src="../assets/svg/forward.svg" />
          </div>
        </div>
        <hr />
        <div class="setting">
          <div>Tutorial</div>
          <div class="settingsArrow">
            <img src="../assets/svg/forward.svg" />
          </div>
        </div>
        <hr />
      </div>
      <div class="settingsElement shadow" id="element3">
        <div class="settingSummary">Über weAR check</div>
        <hr />
        <div class="setting">
          <div>Impressum</div>
          <div class="settingsArrow">
            <img src="../assets/svg/forward.svg" />
          </div>
        </div>
        <hr />
        <div class="setting">
          <div>Nutzungsbedingungen</div>
          <div class="settingsArrow">
            <img src="../assets/svg/forward.svg" />
          </div>
        </div>
        <hr />
        <div class="setting">
          <div>Datenschutz</div>
          <div class="settingsArrow">
            <img src="../assets/svg/forward.svg" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<style>
.settingsArrow {
  padding-top: 3px;
  width: 20px;
  height: 20px;
  text-align: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

input:checked + .slider {
  background-color: #000;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
hr {
  border: 1px solid lightgray;
  border-radius: 1px;
}
.setting {
  margin: 0.7em;
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
}
.settingSummary {
  font-size: 26px;
  margin: 0.5em;
}

.settingsFlexContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5em 1em 1.5em 1em;
  margin-bottom: 2em;
  background-color: lightgray;
}

.settingsHeader {
  text-align: center;
  padding: 0.5em;
  margin-bottom: 0.5em;
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
  margin-bottom: 1em;
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
