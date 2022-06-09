<template>
  <div>
    <PageWrapper
      :headline="'Baumwoll-Siegel'"
      :image="'cotton.png'"
      :color="'#fff'"
      :textColor="'#000000'"
      ><div class="flexContainer-Cotton">
        <h2 class="headerCotton">Baumwoll-Siegel</h2>
        <p class="einleitung-Cotton">
          Das Fairtrade-Produkt-Siegel für Baumwolle steht für fair angebaute
          und gehandelte Rohbaumwolle, die über alle Produktionsschritte direkt
          rückverfolgbar ist und getrennt von Nicht-Fairtrade-Baumwolle
          weiterverarbeitet wird. Die Baumwolle in Textilien, die dieses Siegel
          tragen, ist zu 100 Prozent Fairtrade-zertifiziert.
        </p>
      </div>
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

.headerCotton {
  margin-bottom: 16px;
  margin-top: 10px;
}

.einleitung-Cotton {
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
}

.flexContainer-Cotton {
  display: flex;
  flex-direction: column;
  margin: 1em 1.5em 3em 1.5em;
  padding-top: 1em 0.5em 0.5em 0.5em;
}
</style>