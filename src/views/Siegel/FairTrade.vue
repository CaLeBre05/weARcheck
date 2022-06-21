<template>
  <div>
    <PageWrapper
      :headline="'Fair Trade Siegel'"
      :color="'#f6f1ed'"
      :image="'FairTrade_ohneText.png'"
    >
      <h2 class="headerFairTrade">Allgemeine Informationen</h2>
      <p class="einleitungFairTrade">
        Das Fairtrade-Siegel markiert Produkte aus fairem Handel. Bei der
        Herstellung der gesiegelten Produkte muss auf ökologische und
        ökonomische, sowie auch soziale Kriterien geachtet und eingehalten
        werden. Produktspezifisch umfasst das Fairtrade-Siegel eine Vielzahl an
        Varianten. Im Folgenden werden ein paar der Fairtrade-Siegel näher
        erklärt:
      </p>
      <router-link
        style="text-decoration: none; color: inherit"
        to="/Siegel/Mischprodukte"
        ><Button button__image="mischprodukte.png" color="white"
          >Mischprodukte</Button
        ></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/Siegel/Cotton"
        ><Button button__image="cotton.png" color="white"
          >Baumwolle</Button
        ></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/Siegel/Rohstoffsiegel"
        ><Button button__image="rohstoff.png" color="white"
          >Rohstoffe</Button
        ></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/Siegel/Textil"
        ><Button button__image="textile.png" color="white"
          >Textilproduktion</Button
        ></router-link
      >
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

.einleitungFairTrade {
  font-size: 16px;
  margin-left: 15px;
  margin-right: 15px;
}

.headerFairTrade {
  margin-bottom: 16px;
  margin-top: 10px;
}
</style>