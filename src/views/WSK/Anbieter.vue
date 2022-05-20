<template>
  <div>
    <div class="anbieter-header shadow">
      <img
        class="anbieter-header-picture"
        src="@/assets/svg/WSKCliparts/cloth.svg"
      />
      <div class="anbieter-header-title shadow">Anbieter</div>
    </div>
    <BackButton />
    <div class="anbieter-content">
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
.anbieter-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
}
.anbieter-header {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  background-color: #ecf8e0;
}

.anbieter-header-title {
  background-color: #fff;
  position: absolute;
  bottom: -10px;
  padding: 1em;
  font-size: 1.5em;
}

.anbieter-header-picture {
  position: absolute;
  top: 50px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Anbieter",
  components: { BackButton },
};
</script>
