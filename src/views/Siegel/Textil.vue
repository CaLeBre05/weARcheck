<template>
  <div>
    <PageWrapper
      :headline="'Textilproduktion-Siegel'"
      :image="'textile.png'"
      :color="'#fff'"
      :textColor="'#000000'"
      ><div class="flexContainer-Textil">
        <h2 class="headerTextil">Textil</h2>
        <p class="einleitung-Textil">
          Das Fairtrade-Textile-Production-Siegel auf die gesamte
          Textilproduktion. Hierbei wird auch die vollständige Textillieferkette
          mit dem Fairtrade-Textilstandard anerkannt. <br /><br />
          Der Textilstandard und das Textilprogramm sind ein umfassender Ansatz
          zur Stärkung von Arbeiterinnen und Arbeitern und zur Verbesserung von
          Löhnen und Arbeitsbedingungen in der Textilindustrie. Gemeinsam mit
          dem Fairtradestandard für Baumwolle erreicht Fairtrade so jeden
          Schritt der Textillieferkette.
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
  name: "Textil",
  components: { BackButton, PageWrapper },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.headerTextil {
  margin-bottom: 16px;
  margin-top: 10px;
}

.einleitung-Textil {
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
}

.flexContainer-Textil {
  display: flex;
  flex-direction: column;
  margin: 1em 1.5em 3em 1.5em;
  padding-top: 1em 0.5em 0.5em 0.5em;
}
</style>