<template>
  <div>
    <PageWrapper
      :headline="'Fair Fashion'"
      :image="'Second_Hand_Kleidung.jpg'"
      :color="'#34a0a4'"
      :textColor="'#FFFFFF'"
      ><div class="flexContainer-fairFashion">
        <p class="einleitung-fairFashion">
          Dieser Text gibt euch einen kleinen Überblick über verschiedene Faire
          Kleidung Marken und Shops mit unterschiedlichen Schwerpunkten – vom
          großen Label bis zum kleinen Webshop. Die meisten Shops
          berücksichtigen sowohl ökologische als auch soziale Gesichtspunkte,
          besonders beliebt ist die Kombination aus GOTS- und
          Fairtrade-Zertifizierung. In allen Shops ist eine Vielzahl von
          Produkten erhältlich, sehr groß ist die Auswahl bei Shirts, Sweatern
          und Hoodies. Auch der Stil der Kleidung variiert, von schlichten
          Basics bis zu modischen Schnitten und auffällig bedruckten
          Kleidungsstücken ist für jeden Geschmack etwas dabei.
        </p>
        <FoldoutBox id="firstFoldout-fairFashion">
          <template #boxTitle> Armed Angels </template>
          <template #boxText>
            Zu den bekanntesten Faire Kleidung Marken gehört Armed Angels aus
            Köln. Das Label steht seit Anfang 2007 für faire Biokleidung. Sie
            wird im herstellereigenen Online-Shop, aber auch in vielen anderen
            Geschäften vertrieben. „Auf dem Weg, das fairste Modelabel der Welt
            zu werden“, sind alle ihre Artikel sowohl Fairtrade- als auch
            GOTS-zertifiziert. Für jeden Artikel im Shop sind außerdem alle
            Informationen zu Herkunft, Material und Zertifizierungen noch einmal
            zusammengefasst. Das Sortiment für Frauen und Männer bietet eine
            große Anzahl von bedruckten und unbedruckten Shirts, Tops, Sweatern
            und Pullovern sowie Hosen, Shorts und Jeans. Außerdem gehören Röcke,
            Kleider, Blazer, Blusen, Hemden und einige Accessoires zum Angebot.
          </template>
        </FoldoutBox>
        <FoldoutBox id="secondFoldout-fairFashion">
          <template #boxTitle> Glore </template>
          <template #boxText>
            Glore steht für „globally responsible fashion“ und stellt im
            Online-Shop sowie in den Filialen in Hamburg, München, Nürnberg und
            Stuttgart eine Anzahl von fairen und ökologischen Marken zusammen.
            Die Produkte werden laut eigenen Aussagen nach dem GOTS-Zertifikat
            ausgewählt, darüber hinaus sind einige Kleidungsstücke auch nach FWF
            oder Fairtrade zertifiziert. Genaue Angaben zu Herkunft und
            Zertifikaten sind zu jedem Artikel im Shop gesondert aufgeführt. Zum
            Programm für Männer und Frauen gehören bei Glore Jacken, Mäntel,
            eine große Auswahl von Hosen und Oberteilen sowie Sportbekleidung,
            Wäsche, Strümpfe, Schuhe und Accessoires. Ergänzt wird das Angebot
            außerdem durch Produkte für Babys und Kinder, Pflegeprodukte,
            Make-up und ausgesuchte Artikel aus der Kategorie Lifestyle (zum
            Beispiel Möbel oder Wohntextilien) – ebenfalls nach den jeweiligen
            Standards zertifiziert.
          </template>
        </FoldoutBox>
        <FoldoutBox id="thirdFoldout-fairFashion">
          <template #boxTitle> EarthPositive </template>
          <template #boxText>
            EarthPositive ist eine Marke des Unternehmens Continental Clothing
            mit Sitz in Berlin. Das Unternehmen führt drei in London entworfene
            Kollektionen bedruckbarer Kleidungsstücke. EarthPositive verwendet
            dabei ausschließlich Biobaumwolle, während die Schwesterkollektion
            „Salvage“ aus recyceltem Material besteht. Continental Clothing
            wirkt vor allem als Großhändler für andere Shops, die die schlichten
            EarthPositive Shirts, Pullover, Hoodies und Baumwolltaschen bedruckt
            oder unbedruckt weiterverkaufen. Die Marke ist auf vielen
            Verkaufsplattformen vertreten und bietet neben Freizeitkleidung für
            Männer und Frauen auch Artikel für Kinder und spezielle
            Babybekleidung. Das Unternehmen arbeitet nach den Standards der Fair
            Wear Foundation (FWF), die Artikel der EarthPositive Collection sind
            außerdem nach GOTS zertifiziert.
          </template>
        </FoldoutBox>
      </div>
    </PageWrapper>

    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import FoldoutBox from "@/components/FoldoutBox.vue";

export default {
  name: "FairFashion",
  components: { BackButton, PageWrapper, FoldoutBox },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.einleitung-fairFashion {
  font-size: 18px;
}

#firstFoldout-fairFashion,
#secondFoldout-fairFashion,
#thirdFoldout-fairFashion {
  margin-top: 2em;
}

.flexContainer-fairFashion {
  display: flex;
  flex-direction: column;
  margin: 1em 1.5em 3em 1.5em;
  padding-top: 1em 0.5em 0.5em 0.5em;
}
</style>
