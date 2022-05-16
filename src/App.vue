<template>
  <div id="app">
    <nav class="navbar">
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
#bb {
  top: 3em;
  left: 3em;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: "Nunito", sans-serif;
}

.navbar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex: 1 1 0px;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-top-color: black;
  z-index: 100;
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

<script>
</script>


