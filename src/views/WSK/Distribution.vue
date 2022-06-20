<template>
  <div>
    <div class="verteilung-header shadow">
      <img
        class="verteilung-header-picture"
        src="@/assets/svg/WSKCliparts/car.svg"
      />
      <div class="verteilung-header-title shadow">Distribution</div>
    </div>
    <BackButton />
    <div class="verteilung-content">
      Da ca. 90% der in Deutschland gekauften Kleidung aus dem Ausland stammt,
      ist der Transport einer der wichtigsten Punkte der Wertschöpfungskette.
      Zumeist werden die Waren per Containerschiffe aus Fernost importiert. Der
      Import per Luftfracht ist zur Seltenheit geworden, da dieser sich
      gegenüber dem Schiffverkehr als deutlich kostenintensiver darstellt. Ein
      Kleidungsstück legt Distributionswege von mehreren 10 000km zurück, um in
      Europa in den Handel zu gelangen. Bei dem Transport der Kleidungsstücke
      entstehen ca. 10% der Treibhausgase Weltweit. Das entspricht pro Tonne
      transportierter Kleidungsstücke 103g an Treibhausgasen.
    </div>
  </div>
</template>

<style>
.verteilung-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
}

.verteilung-header {
  height: 300px;
  position: relative;
  background-color: #e1f5a9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.verteilung-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
}

.verteilung-header-picture {
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
