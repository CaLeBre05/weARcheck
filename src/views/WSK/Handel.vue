<template>
  <div>
    <div class="verkauf-header shadow">
      <img
        class="verkauf-header-picture"
        src="@/assets/svg/WSKCliparts/recycle.svg"
      />
      <div class="verkauf-header-title shadow">Handel</div>
    </div>
    <BackButton />
    <div class="verkauf-content">
      Der Textilhandel ergibt sich aus dem Onlinehandel und den Einzelhandel.
      Während des Online-Einkaufserlebnis praktisch und zeitsparend von fast
      überall möglich ist, ist jedoch ein gravierender Verbrauch an
      Kohlenstoffdioxid ersichtlich. Aufgrund des hohen Prozentsatzes an
      Retoure-Sendung im Onlinehandel – immerhin über 70 % der Versendeten
      Kleidung - zurückgesendet werden, beläuft sich der CO2-Ausstoß des
      Onlinehandels und des damit verbundenen Warenversand auf rund 166 000
      Tonnen.<br /><br />
      Deutlich umweltschonender ist die persönliche Beratung in einem Store vor
      Ort. Durch die Möglichkeit die Kleidung direkt anzuprobieren verringert
      sich der CO2- Ausstoß um ein Vielfaches.
    </div>
  </div>
</template>

<style>
.verkauf-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
}
.verkauf-header {
  height: 300px;
  position: relative;
  background-color: #d9ef92;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.verkauf-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
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
