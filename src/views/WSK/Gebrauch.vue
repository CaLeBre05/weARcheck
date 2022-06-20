<template>
  <div>
    <div class="anbieter-header shadow">
      <img
        class="anbieter-header-picture"
        src="@/assets/svg/WSKCliparts/kleiderbügel.png"
      />
      <div class="anbieter-header-title shadow">Gebrauch</div>
    </div>
    <BackButton />
    <div class="anbieter-content">
      Nach dem Kauf eines Textilproduktes ist der Kunde ein wichtiger Punkt der
      Wertschöpfungskette. Beim Endverbraucher angekommen wird die Lebensdauer
      eines Produktes von mehreren Umweltfaktoren beeinflusst. Die Anzahl und
      Dauer des Gebrauchs sind hierbei die einflussreichsten Faktoren.<br /><br />
      <b>Fakten zum Gebrauch:</b>
      <ul class="fakten">
        <li>
          60% der Treibhausemissionen kommen vom Waschen, Trocknen und Bügeln.
        </li>
        <li>Pro Person entsteht jährlich 77g Mikroplastik beim Waschen.</li>
        <li>
          Durchschnittlich kauft jeder Deutsche 60 neue Textilprodukte pro Jahr.
          40% der Kleidung werden gar nicht oder nur selten getragen.
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.fakten {
  margin-left: 1.7em;
  margin-right: 1.7em;
}
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
  width: 164px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Anbieter",
  components: { BackButton },
};
</script>
