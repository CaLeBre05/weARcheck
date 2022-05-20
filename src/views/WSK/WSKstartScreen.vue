<template>
  <div>
    <div class="picture-header shadow">
      <div class="picture-header-title shadow">Wertschöpfungskette</div>
    </div>
    <BackButton />
    <div class="flexContainerWSK">
      <router-link
        style="text-decoration: none; color: inherit"
        to="/WSK/Rohmaterialien"
        ><Button color="#F5FBEF">Rohmaterialien</Button></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/WSK/Anbieter"
        ><Button color="#ECF8E0">Anbieter</Button></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/WSK/Fabrik"
        ><Button color="#ECF6CE">Fabrik</Button></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/WSK/Verteilung"
      >
        <Button color="#E1F5A9">Verteilung</Button></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/WSK/Verkauf"
      >
        <Button color="#d9ef92">Verkauf</Button></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/WSK/Kunde"
      >
        <Button color="#d9ed92">Kunde</Button></router-link
      >
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

.flexContainerWSK {
  display: flex;
  flex-direction: column;
  height: 500px;
  margin: 1em 1em 3.5em 1em;
  padding-top: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
  justify-content: space-between;
}

.picture-header {
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
}
.picture-header-title {
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
}
</style>
