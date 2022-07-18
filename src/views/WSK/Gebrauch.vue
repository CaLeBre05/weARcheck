<template>
  <div>
    <BackButton />
    <PageWrapper
      :headline="'Gebrauch'"
      :image="'WSKCliparts/hanger.svg'"
      :color="'white'"
      :textColor="'#000000'"
      :backgroundColor="'#e1f5a9'"
      :backgroundSize="'8em'"
    >
      <div class="anbieter-content">
        Nach dem Kauf eines Textilproduktes ist der Kunde ein wichtiger Punkt
        der Wertschöpfungskette. Beim Endverbraucher angekommen wird die
        Lebensdauer eines Produktes von mehreren Umweltfaktoren beeinflusst. Die
        Anzahl und Dauer des Gebrauchs sind hierbei die einflussreichsten
        Faktoren.<br /><br />
        <b>Fakten zum Gebrauch:</b>
        <ul class="fakten">
          <li>
            60% der Treibhausemissionen kommen vom Waschen, Trocknen und Bügeln.
          </li>
          <li>Pro Person entsteht jährlich 77g Mikroplastik beim Waschen.</li>
          <li>
            Durchschnittlich kauft jeder Deutsche 60 neue Textilprodukte pro
            Jahr. 40% der Kleidung werden gar nicht oder nur selten getragen.
          </li>
        </ul>
      </div>
    </PageWrapper>
  </div>
</template>

<style>
.fakten {
  margin-left: 1.7em;
  margin-right: 1.7em;
}
.anbieter-content {
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
  name: "Anbieter",
  components: { BackButton, PageWrapper },
};
</script>
