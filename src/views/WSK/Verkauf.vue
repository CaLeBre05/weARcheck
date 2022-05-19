<template>
  <div>
    <div class="verkauf-header">
      <img
        class="verkauf-header-picture"
        src="@/assets/svg/WSKCliparts/recycle.svg"
      />
      <div class="verkauf-header-title">Verkauf</div>
    </div>
    <BackButton />
    <div class="verkauf-content">
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
.verkauf-content {
  margin: 2.5em 1.7em 0 1.7em;
  font-size: 1.2em;
}
.verkauf-header {
  height: 300px;
  position: relative;
  background-color: #d9ef92;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.verkauf-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
  box-shadow: 3px 3px 20px;
}

.verkauf-header-picture {
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
