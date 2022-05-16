<template>
  <div>
    <div class="picContainer">
      <div class="ueberschrift">Wertschöpfungskette</div>
    </div>
    <BackButton />
    <div class="flexContainerWSK">
      <div class="placeHolder">
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Rohmaterialien"
          >Rohmaterialien</router-link
        >
      </div>
      <div class="placeHolder">
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Anbieter"
          >Anbieter</router-link
        >
      </div>
      <div class="placeHolder">
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Fabrik"
          >Fabrik</router-link
        >
      </div>
      <div class="placeHolder">
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Verteilung"
          >Verteilung</router-link
        >
      </div>
      <div class="placeHolder">
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Verkauf"
          >Verkauf</router-link
        >
      </div>
      <div class="placeHolder">
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Kunde"
          >Kunde</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";

export default {
  name: "WSKstartScreen",
  components: { BackButton },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.placeHolder {
  height: 60px;
  border: 1px solid black;
}
.flexContainerWSK {
  display: flex;
  flex-direction: column;
  height: 520px;
  border: 1px solid black;
  margin: 1em;
  padding: 0.5em;
  justify-content: space-between;
}

.picContainer {
  position: relative;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url("@/assets/img/plane.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 3px 3px 20px;
}
.ueberschrift {
  position: absolute;
  bottom: -10px;
  text-align: center;
  display: inline-block;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: #d9ed92;
  font-size: 1.7em;
  font-weight: bolder;
  box-shadow: 3px 3px 20px;
}
</style>
