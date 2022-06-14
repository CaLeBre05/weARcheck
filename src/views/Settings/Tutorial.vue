<template>
  <div>
    <div class="tutorialContainer">
      <div class="tutorialFlexContainer" id="tutorialFlexContainer">
        <div class="tutorialHeader shadow" id="header">Tutorial</div>
        <div class="tutorialVideo"></div>
        <div class="tutorialSummary shadow">
          <b>Herzlich Willkommen zu weAR check!</b><br /><br />
          Mithilfe des Tutorials können Sie alle Funktionen der weAR check App
          finden.
        </div>
      </div>
      <BackButton />
    </div>
  </div>
</template>

<style>
.tutorialSummary {
  text-align: center;
  background-color: #fff;
  padding: 1em;
  margin: 2em 0 1em 0;
  border-radius: 5px;
}

.tutorialVideo {
  height: 200px;
  border: 1px solid;
  margin-top: 2em;
}
.tutorialHeader {
  text-align: center;
  padding: 0.5em;
  margin-bottom: 0.5em;
  font-size: 26px;
  background-color: #fff;
}

.tutorialFlexContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5em 1em 1.5em 1em;
}

.tutorialContainer {
  margin-bottom: 2em;
  background-color: lightgray;
  height: 800px;
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
