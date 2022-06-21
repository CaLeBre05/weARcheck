<template>
  <div>
    <PageWrapper
      :headline="'GOTS Siegel'"
      :image="'GOTS.png'"
      :color="'#e0d6c3'"
      :textColor="'#000000'"
    >
      <h2 class="headerGOTS">Allgemeine Informationen</h2>
      <p class="einleitung-GOTS">
        Der Global Organic Textile Standard (GOTS) ist ein weltweit angewendeter
        Standard für die Verarbeitung von Textilien aus biologisch erzeugten
        Naturfasern und damit ein wichtiges Textilsiegel. Er definiert
        umwelttechnische Anforderungen entlang der gesamten textilen
        Produktionskette sowie Sozialkriterien. Die Qualitätssicherung erfolgt
        durch unabhängige Zertifizierung der gesamten Textillieferkette.
      </p>
      <FoldoutBox id="gots-sozialeKriterien">
        <template #boxTitle> Soziale Kriterien </template>
        <template #boxText>
          Keine Diskriminierung oder Belästigung am Arbeitsplatz, keine
          Kinderarbeit, Begrenzung der Überstunden, Sicherheit am Arbeitsplatz,
          Recht auf Gewerkschaften, Mindest- oder Tariflohn als
          Grundvoraussetzung; ein Existenzlohn wird angestrebt
        </template>
      </FoldoutBox>
      <FoldoutBox id="gots-ökoKriterien">
        <template #boxTitle> Ökologische Kriterien </template>
        <template #boxText>
          keine chemischen Pestizide und Herbizide, keine Kunstdünger, keine
          Gentechnik, deutlich verringerter Wasserverbrauch (bis zu 90
          Prozent!), die Baumwolle wird im Wechsel mit anderen Pflanzen angebaut
          (Fruchtfolge)
        </template>
      </FoldoutBox>
      <FoldoutBox id="gots-vergabe">
        <template #boxTitle> Vergabe des Siegels </template>
        <template #boxText>
          Alle Betriebe der Lieferkette müssen zertifiziert sein und sich einmal
          jährlich einer Vor-Ort-Inspektion unterziehen, damit Endprodukte das
          GOTS-Siegel tragen dürfen. Nach Angaben von GOTS handelt es sich dabei
          sowohl um angekündigte, als auch – speziell in Verdachtsfällen – um
          unangekündigte Kontrollen. Die Betriebsbesichtigungen werden von
          Akkreditierungsstellen durchgeführt, die die ISO/IEC-Richtlinie 65 für
          Produktzertifizierungssysteme erfüllen. Die Liste der zugelassenen
          Zertifizierer ist auf der GOTS-Website abrufbar
        </template>
      </FoldoutBox>
      <FoldoutBox id="gots-kritik">
        <template #boxTitle> Kritik an Siegel</template>
        <template #boxText>
          Das GOTS-Siegel ist in Sachen Umweltkriterien ein sehr weitgehendes
          Zertifikat, das nur wenig zu wünschen übrig lässt und selten
          kritisiert wird. Bei einem Test von Stiftung Warentest zur
          “Rückverfolgbarkeit von Bekleidung mit Textilsiegeln” belegte GOTS
          2019 den ersten Rang. GOTS wird zudem laufend weiterentwickelt, der
          aktuelle Standard GOTS 6.0 muss von der Industrie bis März 2021
          umgesetzt worden sein. Im Bereich der sozialen Standards orientiert
          sich das Siegel an den Vorgaben der Internationalen
          Arbeitsorganisation (ILO). Kritikern gehen diese nicht weit genug,
          etwa weil sie den Begriff der „existenzsichernden Löhne“ für nicht
          ausreichend definiert halten. Das GOTS-Siegel versucht das seit 2020
          aufzufangen: Zertifizierte Betriebe müssen seit GOTS Version 6.0 die
          Differenz zwischen tatsächlich gezahlten Löhnen und
          „existenzsicherndem Lohn“ berechnen (nach „anerkannten
          Berechnungsmethoden“) und dokumentieren. Darüber hinaus „sollen sie
          darauf hinarbeiten, diese Lücke zu schließen“. GOTS lässt bislang
          Kriterien für Leder– und Fellprodukte außen vor – sieht man sich die
          Entwicklung der Modelandschaft an, gehört dieser Aspekt allein aus
          Tierschutzgründen eigentlich auch fest zur Textilbranche.
        </template>
      </FoldoutBox>
    </PageWrapper>
    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import FoldoutBox from "@/components/FoldoutBox.vue";

export default {
  name: "GOTS",
  components: { BackButton, PageWrapper, FoldoutBox },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.headerGOTS {
  margin-bottom: 16px;
  margin-top: 10px;
}

.einleitung-GOTS {
  font-size: 16px;
  margin-left: 15px;
  margin-right: 15px;
}

#gots-sozialeKriterien,
#gots-ökoKriterien,
#gots-vergabe,
#gots-kritik {
  margin-top: 2em;
}
</style>