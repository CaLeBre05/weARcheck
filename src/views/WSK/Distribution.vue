<template>
  <div>
    <PageWrapper
      :headline="'Distribution'"
      :image="'WSKCliparts/car.svg'"
      :color="'white'"
      :textColor="'#000000'"
      :backgroundColor="'#e1f5a9'"
      :backgroundSize="'8em'"
    >
      <BackButton />
      <div class="verteilung-content">
        Da ca. 90% der in Deutschland gekauften Kleidung aus dem Ausland stammt,
        ist der Transport einer der wichtigsten Punkte der Wertschöpfungskette.
        Zumeist werden die Waren per Containerschiffe aus Fernost importiert.
        Der Import per Luftfracht ist zur Seltenheit geworden, da dieser sich
        gegenüber dem Schiffverkehr als deutlich kostenintensiver darstellt. Ein
        Kleidungsstück legt Distributionswege von mehreren 10 000km zurück, um
        in Europa in den Handel zu gelangen. Bei dem Transport der
        Kleidungsstücke entstehen ca. 10% der Treibhausgase Weltweit. Das
        entspricht pro Tonne transportierter Kleidungsstücke 103g an
        Treibhausgasen.
      </div>
    </PageWrapper>
  </div>
</template>

<style>
.verteilung-content {
  font-size: 16px;
  margin-top: 10px;

  margin-left: 15px;
  margin-right: 15px;
}

.verteilung-header-picture {
  position: absolute;
  top: 50px;
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
