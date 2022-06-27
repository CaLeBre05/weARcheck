<template>
  <div>
    <PageWrapper
      :headline="'Textilproduktion-Siegel'"
      :image="'textile.png'"
      :color="'#fff'"
      :textColor="'#000000'"
      :backgroundSize="'contain'"
    >
      <p class="einleitung-Textil">
        Das Fairtrade-Textile-Production-Siegel auf die gesamte
        Textilproduktion. Hierbei wird auch die vollständige Textillieferkette
        mit dem Fairtrade-Textilstandard anerkannt. <br /><br />
        Der Textilstandard und das Textilprogramm sind ein umfassender Ansatz
        zur Stärkung von Arbeiterinnen und Arbeitern und zur Verbesserung von
        Löhnen und Arbeitsbedingungen in der Textilindustrie. Gemeinsam mit dem
        Fairtradestandard für Baumwolle erreicht Fairtrade so jeden Schritt der
        Textillieferkette.
      </p>
    </PageWrapper>

    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "Textil",
  components: { BackButton, PageWrapper },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.einleitung-Textil {
  font-size: 16px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>