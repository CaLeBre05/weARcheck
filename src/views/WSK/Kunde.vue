<template>
  <div>
    <div class="kunde-header">
      <img
        class="kunde-header-picture"
        src="@/assets/svg/WSKCliparts/bag.svg"
      />
      <div class="kunde-header-title">Kunde</div>
    </div>
    <BackButton />
    <div class="kunde-content">
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
.kunde-content {
  margin: 2.5em 1.7em 0 1.7em;
  font-size: 1.2em;
}
.kunde-header {
  height: 300px;
  position: relative;
  background-color: #d9ed92;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.kunde-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
  box-shadow: 3px 3px 20px;
}

.kunde-header-picture {
  position: absolute;
  top: 50px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Kunde",
  components: { BackButton },
};
</script>
