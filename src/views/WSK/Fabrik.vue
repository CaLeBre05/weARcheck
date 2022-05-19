<template>
  <div>
    <div class="fabrik-header">
      <img
        class="fabrik-header-picture"
        src="@/assets/svg/WSKCliparts/sewing-machine.svg"
      />
      <div class="fabrik-header-title">Fabrik</div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.fabrik-header {
  height: 300px;
  position: relative;
  background-color: #ecf6ce;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.fabrik-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
  box-shadow: 3px 3px 20px;
}

.fabrik-header-picture {
  position: absolute;
  top: 50px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Fabrik",
  components: { BackButton },
};
</script>
