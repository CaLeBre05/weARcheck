<template>
  <div>
    <div class="verteilung-header shadow">
      <img
        class="verteilung-header-picture"
        src="@/assets/svg/WSKCliparts/car.svg"
      />
      <div class="verteilung-header-title shadow">Verteilung</div>
    </div>
    <BackButton />
    <div class="verteilung-content">
      Ein Nachhaltigkeitssiegel steht für die Einhaltung gewisser sozialer,
      ökonomischer und ökologischer Standards, wobei diese bei jedem Siegel
      anders gestaltet werden. Hinter jedem Nachhaltigkeitskennzeichen steht
      eine Organisation, die die Siegel vergibt. Ein Nachhaltigkeitssiegel steht
      für die Einhaltung gewisser sozialer, ökonomischer und ökologischer
      Standards, wobei diese bei jedem Siegel anders gestaltet werden.
    </div>
  </div>
</template>

<style>
.verteilung-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
}

.verteilung-header {
  height: 300px;
  position: relative;
  background-color: #e1f5a9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.verteilung-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
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
