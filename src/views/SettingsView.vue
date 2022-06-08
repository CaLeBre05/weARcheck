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
          Push Benachrichtigungen<span id="span1"
            ><label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span> </label
          ></span>
        </div>
        <hr />
        <div class="setting">
          E-Mail Benachrichtigungen<span id="span2"
            ><label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span> </label
          ></span>
        </div>
        <hr />
      </div>
      <div class="settingsElement shadow" id="element2">
        <div class="settingSummary">Informationen</div>
        <hr />
        <div class="setting">Deine Scans<span id="span3">></span></div>
        <hr />
        <div class="setting">Tutorial<span id="span4">></span></div>
        <hr />
      </div>
      <div class="settingsElement shadow" id="element3">
        <div class="settingSummary">Über weAR check</div>
        <hr />
        <div class="setting">Impressum<span id="span5">></span></div>
        <hr />
        <div class="setting">Nutzungsbedingungen<span id="span6">></span></div>
        <hr />
        <div class="setting">Datenschutz<span id="span7">></span></div>
        <hr />
      </div>
    </div>
  </div>
</template>

<style>
#span1,
#span2,
#span3,
#span4,
#span5,
#span6,
#span7 {
  float: right;
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
}
.settingSummary {
  font-size: 1.7em;
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
