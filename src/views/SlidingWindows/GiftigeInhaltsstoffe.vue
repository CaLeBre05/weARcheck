<template>
  <div>
    <PageWrapper
      :headline="'Giftige Inhaltsstoffe'"
      :image="'schadstoffe_kleidung.jpg'"
      :color="'#34a0a4'"
      :textColor="'#FFFFFF'"
    >
      <p class="einleitung-Inhaltsstoffe">
        In Textilien und Kleidung stecken oft Schadstoffe wie Chemikalien und
        Allergene, die wir wissentlich nicht an unsere Haut lassen würden. Die
        Gifte gefährden zudem Arbeiter*innen und verseuchen die Abwässer im
        Produktionsprozess.
      </p>
      <FoldoutBox id="firstFoldout-Inhaltsstoffe">
        <template #boxTitle> Gift in der Lederherstellung </template>
        <template #boxText>
          Die meisten Schuhe werden noch immer aus Leder gefertigt. Der Großteil
          des weltweit produzierten Leders wird mit hochgiftigen Chemikalien
          gegerbt und behandelt. Die am häufigsten verwendeten Chrom-III-Salze
          sind vor allem für die Umwelt bedenklich: Die entstehende Schlacke
          kann dem Wasserkreislauf nicht wieder zugeführt werden und wird noch
          viel zu selten recycelt. Viel zu häufig landen sie gemeinsam mit
          gelösten Schwermetallen in der Umwelt. Unter bestimmten Bedingungen
          können sich auch im Leder Chrom-VI-Verbindungen bilden. Chrom VI ist
          meist krebserregend, wirkt erbgutverändernd und als starkes Allergen.
          Es gefährdet nicht nur die Arbeiter in der Herstellung, sondern kann
          über Hautkontakt auch in den Körper des Trägers gelangen.
        </template>
      </FoldoutBox>
      <FoldoutBox id="secondFoldout-Inhaltsstoffe">
        <template #boxTitle> Schadstoffhaltige Färbung </template>
        <template #boxText
          >Das Kleine Schwarze ist ein Klassiker im Kleiderschrank. Dumm nur,
          dass schwarz die mit Abstand am stärksten mit Schadstoffen belastete
          Färbung in Kleidung und Textilien ist. Ist diese Färbung minderwertig
          und kann sie sich, wie zum Beispiel bei Kunstfaser häufig, nicht
          richtig mit dem Stoff verbinden, wird sie bei Hautkontakt durch
          Schweiß leicht ausgewaschen und gelangt in den Körper. Dort kann die
          Farbe Hautreizungen und sogar Allergien hervorrufen.</template
        >
      </FoldoutBox>
      <FoldoutBox id="thirdFoldout-Inhaltsstoffe">
        <template #boxTitle> Krebserregende Motivdrucke </template>
        <template #boxText
          >In den auf T-Shirts und Pullovern aufgedruckten Motiven stecken nicht
          selten bedenkliche Schadstoffe – etwa verschiedene Weichmacher oder
          polyzyklische aromatische Kohlenwasserstoffe (PAK), die teils als
          krebserregend, teils als fortpflanzungsschädigend gelten.</template
        >
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
  name: "GiftigeInhaltsstoffe",
  components: { BackButton, PageWrapper, FoldoutBox },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.einleitung-Inhaltsstoffe {
  font-size: 16px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}

#firstFoldout-Inhaltsstoffe,
#secondFoldout-Inhaltsstoffe,
#thirdFoldout-Inhaltsstoffe {
  margin-top: 2em;
}
</style>
