<template>
  <div>
    <div class="verteilung-header">
      <img
        class="verteilung-header-picture"
        src="@/assets/svg/WSKCliparts/car.svg"
      />
      <div class="verteilung-header-title">Verteilung</div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.verteilung-header {
  height: 300px;
  position: relative;
  background-color: #e1f5a9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.verteilung-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
  box-shadow: 3px 3px 20px;
}

.verteilung-header-picture {
  position: absolute;
  top: 50px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Verkauf",
  components: { BackButton },
};
</script>
