<template>
  <div>
    <PageWrapper
      :color="'#d9ed92'"
      :headline="'Wertschöpfungskette'"
      :image="'plane.jpg'"
      ><div class="flexContainerWSK">
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Rohstofferzeugung"
          ><Button color="#F5FBEF">Rohstofferzeugung</Button></router-link
        >
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Herstellung"
          ><Button color="#ECF8E0">Herstellung</Button></router-link
        >
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Distribution"
          ><Button color="#ECF6CE">Distribution</Button></router-link
        >
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Handel"
        >
          <Button color="#E1F5A9">Handel</Button></router-link
        >
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Gebrauch"
        >
          <Button color="#d9ef92">Gebrauch</Button></router-link
        >
        <router-link
          style="text-decoration: none; color: inherit"
          to="/WSK/Entsorgung"
        >
          <Button color="#d9ed92">Entsorgung</Button></router-link
        >
      </div></PageWrapper
    >

    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import Button from "@/components/Button.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "WSKstartScreen",
  components: { BackButton, Button, PageWrapper },
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
