<template>
  <div>
    <PageWrapper
      :headline="'Fair Trade Siegel'"
      :color="'#f6f1ed'"
      :image="'FairTrade_ohneText.png'"
    >
      <div class="flexContainerFairTrade">
        <h2 class="headerFairTrade">Allgemeine Informationen</h2>
        <p class="einleitungFairTrade">
          Das Fairtrade-Siegel markiert Produkte aus fairem Handel. Bei der
          Herstellung der gesiegelten Produkte muss auf ökologische und
          ökonomische, sowie auch soziale Kriterien geachtet und eingehalten
          werden. Produktspezifisch umfasst das Fairtrade-Siegel eine Vielzahl
          an Varianten. Im Folgenden werden ein paar der Fairtrade-Siegel näher
          erklärt:
        </p>
        <router-link
          style="text-decoration: none; color: inherit"
          to="/Siegel/Mischprodukte"
          ><Button button__image="mischprodukte.png" color="#f8f8f6"
            >Mischprodukte</Button
          ></router-link
        >
        <router-link
          style="text-decoration: none; color: inherit"
          to="/Siegel/Cotton"
          ><Button button__image="cotton.png" color="#f8f8f6"
            >Baumwolle</Button
          ></router-link
        >
        <router-link
          style="text-decoration: none; color: inherit"
          to="/Siegel/Rohstoffsiegel"
          ><Button button__image="rohstoff.png" color="#f8f8f6"
            >Rohstoffe</Button
          ></router-link
        >
        <router-link
          style="text-decoration: none; color: inherit"
          to="/Siegel/Textil"
          ><Button button__image="textile.png" color="#f8f8f6"
            >Textilproduktion</Button
          ></router-link
        >
      </div>
    </PageWrapper>
    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import Button from "@/components/Button.vue";

export default {
  name: "FairTrade",
  components: { BackButton, PageWrapper, Button },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.flexContainerFairTrade {
  display: flex;
  flex-direction: column;
  height: 610px;
  margin: 1em 1em 3em 1em;
  padding: 0.5em;
  justify-content: space-between;
}

.einleitungFairTrade {
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
}

.headerFairTrade {
  margin-left: 15px;
  margin-right: 15px;
  padding: 0;
}
</style>