<template>
  <div>
    <div class="rohmaterialien-header shadow">
      <img
        class="rohmaterialien-header-picture"
        src="@/assets/svg/WSKCliparts/tree.svg"
      />
      <div class="rohmaterialien-header-title shadow">Rohmaterialien</div>
    </div>
    <BackButton />
    <div class="rohmaterialien-content">
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
.rohmaterialien-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
}
.rohmaterialien-header {
  background-color: #f5fbef;
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.rohmaterialien-header-title {
  padding: 1em;
  font-size: 1.5em;
  position: absolute;
  bottom: -10px;
  background-color: #fff;
}

.rohmaterialien-header-picture {
  position: absolute;
  top: 50px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Rohmaterialien",
  components: { BackButton },
};
</script>
