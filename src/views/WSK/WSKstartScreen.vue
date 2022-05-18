<template>
  <div>
    <div class="picContainer">
      <div class="ueberschrift">Wertschöpfungskette</div>
    </div>
    <BackButton />
    <div class="flexContainerWSK">
      <Button color="#F5FBEF">Rohmaterialien</Button>
      <Button color="#ECF8E0">Anbieter</Button>
      <Button color="#E3F6CE">Fabrik</Button>
      <Button color="#D0F5A9">Verteilung</Button>
      <Button color="#BEF781">Verkauf</Button>
      <Button color="#ACFA58">Kunde</Button>
    </div>
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import Button from "@/components/Button.vue";

export default {
  name: "WSKstartScreen",
  components: { BackButton, Button },
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
  height: 500px;
  margin: 1em;
  padding-top: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
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
