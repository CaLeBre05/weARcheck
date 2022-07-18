<template>
  <div>
    <BackButton />
    <PageWrapper
      :headline="'Handel'"
      :image="'WSKCliparts/shopping-bag.svg'"
      :color="'white'"
      :textColor="'#000000'"
      :backgroundColor="'#d9ef92'"
      :backgroundSize="'8em'"
    >
      <div class="verkauf-content">
        Der Textilhandel ergibt sich aus dem Onlinehandel und den Einzelhandel.
        Während des Online-Einkaufserlebnis praktisch und zeitsparend von fast
        überall möglich ist, ist jedoch ein gravierender Verbrauch an
        Kohlenstoffdioxid ersichtlich. Aufgrund des hohen Prozentsatzes an
        Retoure-Sendung im Onlinehandel – immerhin über 70 % der Versendeten
        Kleidung - zurückgesendet werden, beläuft sich der CO2-Ausstoß des
        Onlinehandels und des damit verbundenen Warenversand auf rund 166 000
        Tonnen.<br /><br />
        Deutlich umweltschonender ist die persönliche Beratung in einem Store
        vor Ort. Durch die Möglichkeit die Kleidung direkt anzuprobieren
        verringert sich der CO2- Ausstoß um ein Vielfaches.
      </div>
    </PageWrapper>
  </div>
</template>

<style>
.verkauf-content {
  font-size: 16px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "Verkauf",
  components: { BackButton, PageWrapper },
};
</script>
