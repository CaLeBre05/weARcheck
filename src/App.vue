<template>
  <div id="app">
    <HomeView/>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/scan">About</router-link>
      <router-link to="/settings">Settings</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
    name: "App",
    views: {
        HomeView
    }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Nunito', sans-serif;
}

.navbar {
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex: 1 1 0px;
  align-items: center;
  width: 100%;
  height: 50px;
}

.navbar>* {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
</style>
