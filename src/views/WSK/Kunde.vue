<template>
  <div>
    <div class="kunde-header shadow">
      <img
        class="kunde-header-picture"
        src="@/assets/svg/WSKCliparts/bag.svg"
      />
      <div class="kunde-header-title shadow">Kunde</div>
    </div>
    <BackButton />
    <div class="kunde-content">
      Nach dem Kauf eines Textilproduktes ist der Kunde ein wichtiger Punkt der
      Wertschöpfungskette. Beim Endverbraucher angekommen wird die Lebensdauer
      eines Produktes von mehreren Umweltfaktoren beeinflusst. Die Anzahl und
      Dauer des Gebrauchs sind hierbei die einflussreichsten Faktoren. Fakten
      zum Gebrauch:<br />• 60% der Treibhausemissionen kommen vom Waschen,
      Trocknen und Bügeln.<br />• Pro Person entsteht jährlich 77g Mikroplastik
      beim Waschen.<br />• Durchschnittlich kauft jeder Deutsche 60 neue
      Textilprodukte pro Jahr. 40% der Kleidung werden gar nicht oder nur selten
      getragen.
    </div>
  </div>
</template>

<style>
.kunde-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
  text-align: justify;
}
.kunde-header {
  height: 300px;
  position: relative;
  background-color: #d9ed92;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.kunde-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
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
