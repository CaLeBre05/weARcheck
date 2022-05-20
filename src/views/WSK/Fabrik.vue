<template>
  <div>
    <div class="fabrik-header shadow">
      <img
        class="fabrik-header-picture"
        src="@/assets/svg/WSKCliparts/sewing-machine.svg"
      />
      <div class="fabrik-header-title shadow">Fabrik</div>
    </div>
    <BackButton />
    <div class="fabrik-content">
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
.fabrik-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
}
.fabrik-header {
  height: 300px;
  position: relative;
  background-color: #ecf6ce;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.fabrik-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
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
