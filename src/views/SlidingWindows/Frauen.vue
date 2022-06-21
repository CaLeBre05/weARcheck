<template>
  <div>
    <PageWrapper
      :headline="'Ausbeute trifft oft Frauen'"
      :image="'fast_fashion.jpg'"
      :color="'#34a0a4'"
      :textColor="'#FFFFFF'"
    >
      <p class="einleitung-frauen">
        Einzelhandel und Kunden warten beide gleichermaßen sehnsüchtig darauf,
        endlich mal wieder entspannt einkaufen gehen zu können. Besonders Frauen
        shoppen gern Mode – aber es sind vor allem auch Frauen, die unsere
        Kleidung unter härtesten Bedingungen produzieren. Das staatliche
        Textilsiegel „Grüner Knopf“ hat mit seinen sozialen Anforderungen die
        Situation der Näher*innen im Blick.
      </p>
      <FoldoutBox id="firstFoldout-Frauen">
        <template #boxTitle> 80% Frauenanteil in der Produktion </template>
        <template #boxText>
          Wie wichtig es ist, auf bessere Arbeitsbedingungen für Frauen zu
          drängen, zeigen die Zahlen. Der Frauenanteil in der globalen
          Textilindustrie wird laut dem Textilbündnis auf rund 80 Prozent
          geschätzt. Besonders in den produzierenden Ländern ist der Wert hoch:
          In Kambodscha, so die Heinrich Böll Stiftung, sind rund 90 Prozent der
          700.000 Arbeitskräfte in der Textilproduktion weiblich. Dabei sind die
          Führungspositionen fast ausschließlich männlich besetzt.
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
  name: "Frauen",
  components: { BackButton, PageWrapper, FoldoutBox },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.einleitung-frauen {
  font-size: 16px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}

#firstFoldout-Frauen {
  margin-top: 2em;
}
</style>
