<template>
  <div>
    <PageWrapper
      :headline="'Baumwoll-Siegel'"
      :image="'cotton.png'"
      :color="'#fff'"
      :textColor="'#000000'"
      :backgroundSize="'9em'"
    >
      <p class="einleitung-Cotton">
        Das Fairtrade-Produkt-Siegel für Baumwolle steht für fair angebaute und
        gehandelte Rohbaumwolle, die über alle Produktionsschritte direkt
        rückverfolgbar ist und getrennt von Nicht-Fairtrade-Baumwolle
        weiterverarbeitet wird. Die Baumwolle in Textilien, die dieses Siegel
        tragen, ist zu 100 Prozent Fairtrade-zertifiziert.
      </p>
    </PageWrapper>

    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "Cotton",
  components: { BackButton, PageWrapper },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.einleitung-Cotton {
  font-size: 16px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>