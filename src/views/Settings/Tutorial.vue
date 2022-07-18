<template>
  <div>
    <div class="tutorialFlexContainer" id="tutorialFlexContainer">
      <div class="tutorialHeader shadow" id="header">Tutorial</div>

      <video id="video1" preload playsinline loop controls>
        <source src="#" type="video/mp4" />
      </video>

      <div class="tutorialSummary shadow">
        <b>Herzlich Willkommen zu weAR check!</b><br /><br />
        Mithilfe des Tutorials können Sie alle Funktionen der weAR check App
        finden.
      </div>
    </div>
    <BackButton />
  </div>
</template>

<style>
#videoDiv video {
  position: absolute;
  width: auto;
  height: 288px;
  min-width: 100%;
  min-height: 100%;
}
.tutorialSummary {
  text-align: center;
  background-color: #fff;
  padding: 1em;
  margin: 2em 0 1em 0;
  border-radius: 5px;
}

.tutorialHeader {
  text-align: center;
  padding: 0.5em;
  margin-bottom: 1em;
  font-size: 26px;
  background-color: #fff;
}

.tutorialFlexContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5em 1em 1.5em 1em;
  background-color: lightgray;
  height: 100vh;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";

export default {
  name: "Tutorial",
  components: {
    BackButton,
  },
};
</script>
