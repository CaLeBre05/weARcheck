<template>
  <div id="app" class="shadow">
    <nav class="navbar" v-if="!$route.meta.hideNavbar">
      <router-link to="/" class="link"
        ><img src="./assets/img/home.png" class="img"
      /></router-link>
      <router-link to="/scan" class="link"
        ><img src="./assets/img/scan.png" class="img"
      /></router-link>
      <router-link to="/settings" class="link"
        ><img src="./assets/img/menu.png" class="img"
      /></router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import HomeView from "./views/HomeView.vue";
import BackButton from "./components/backButton.vue";

export default {
  name: "App",
  components: { BackButton, HomeView },
};
</script>

<style>
html,
body {
  height: 100%; /*both html and body*/
}
#bb {
  top: 3em;
  left: 3em;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: "Nunito", sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 9px 0px 0px white, 0 -9px 0px 0px white,
    rgba(0, 0, 0, 0.2) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 10px 20px;
  min-height: 100vh;
}
.navbar {
  position: fixed;
  max-width: 1000px;
  bottom: 0px;
  display: flex;
  flex: 1 1 0px;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-top-color: black;
  z-index: 100;
}

.shadow {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 6px;
}

.img {
  max-width: 70%;
  height: 70%;
}

.img:hover {
  filter: invert(50%);
}

.navbar > * {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
</style>
