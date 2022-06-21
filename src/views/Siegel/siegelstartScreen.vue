<template>
  <div>
    <PageWrapper
      :headline="'Siegel'"
      :color="'#c1a285'"
      :image="'siegel_aufmacher.jpg'"
    >
      <h2 class="headerSiegel">Allgemeine Informationen</h2>
      <p class="einleitung">
        Ein Nachhaltigkeitssiegel steht für die Einhaltung gewisser sozialer,
        ökonomischer und ökologischer Standarts, wobei diese bei jedem Siegel
        ander gestaltet werden. Hinter jedem Nachhaltigkeitskennzeichen steht
        eine Organisation, die die Siegel vergibt.
      </p>
      <router-link
        style="text-decoration: none; color: inherit"
        to="/Siegel/FairTrade"
        ><Button button__image="FairTrade.png" color="#f6f1ed"
          >Fair Trade Siegel</Button
        ></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/Siegel/GOTS"
        ><Button button__image="GOTS.png" color="#e0d6c3"
          >GOTS Siegel</Button
        ></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/Siegel/FWF"
        ><Button button__image="FWF.png" color="#d6c2af"
          >Fair Wear Siegel</Button
        ></router-link
      >
      <router-link
        style="text-decoration: none; color: inherit"
        to="/Siegel/GrünerKnopf"
        ><Button button__image="GrünerKnopf.png" color="#bca086"
          >Grüner Knopf Siegel</Button
        ></router-link
      >
    </PageWrapper>
    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import Button from "@/components/Button.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "siegelstartScreen",
  components: { BackButton, PageWrapper, Button },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.headerSiegel {
  margin-bottom: 16px;
}

.einleitung {
  font-size: 16px;
  margin-left: 15px;
  margin-right: 15px;
}

.picContainerSiegel {
  position: relative;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url("@/assets/img/siegel_aufmacher.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 3px 3px 20px;
}
.ueberschriftSiegel {
  position: absolute;
  bottom: -10px;
  text-align: center;
  display: inline-block;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: #c1a285;
  font-size: 1.7em;
  font-weight: bolder;
  box-shadow: 3px 3px 20px;
}
</style>
