<template>
  <div>
    <PageWrapper
      :headline="'Fair Wear Siegel'"
      :image="'FWF.png'"
      :color="'#d6c2af'"
      :textColor="'#000000'"
    >
      <h2 class="headerFWF">Allgemeine Informationen</h2>
      <p class="einleitung-FWF">
        Die Fair Wear Foundation ist eine unabhängige Stiftung mit Sitz in
        Amsterdam, die mit Bekleidungsmarken, Textilarbeitern und Branchengrößen
        zusammenarbeitet, um die Arbeitsbedingungen in Textilfabriken zu
        verbessern. Die FWF ist in elf Produktionsländern weltweit tätig:
        Bangladesch, Bulgarien, China, Indien, Indonesien, Myanmar, Mazedonien,
        Rumänien, Tunesien, Türkei und Vietnam. Zu den bekannten Mitglieder
        gehören unter anderem Marken wie Jack Wolfskin, Vaude, Schöffel oder
        Takko.
      </p>
      <FoldoutBox id="FWF-sozialeKriterien">
        <template #boxTitle> Soziale Kriterien </template>
        <template #boxText>
          Verbot von Zwangsarbeit, Verbot von Kinderarbeit, Recht auf
          Vereinigungsfreiheit, Nichtdiskriminierung am Arbeitsplatz, Zahlung
          gleicher Löhne, Verschriftlichung des Arbeitsverhältnisses, Rechte
          gelten für untervergebene Arbeit, Nichtdiskriminierung am Arbeitsplatz
        </template>
      </FoldoutBox>
      <FoldoutBox id="FWF-ökoKriterien">
        <template #boxTitle> Ökologische Kriterien </template>
        <template #boxText>
          Verbot bestimmter umweltschädlicher Chemikalien, Grenzwerte für
          Abwasserparameter, Schadstoffgeprüfte Naturfasern, Prüfung auf
          Chemikalienrückstände, Verbot spezieller gesundheitsgefährdender
          Chemikalien, kein Einsatz sonstiger gefährlicher Chemikalien
        </template>
      </FoldoutBox>
      <FoldoutBox id="FWF-vergabe">
        <template #boxTitle> Vergabe des Siegels </template>
        <template #boxText>
          Um langfristige Lösungen zu schaffen, arbeitet die FWF auf
          verschiedenen Ebenen: Regelmäßig überprüft, bewertet und berichtet sie
          öffentlich über die Fortschritte der Mitgliedsunternehmen. Dazu zählen
          zum einen Kontrollen in den Produktionsstätten vor Ort sowie
          Interviews mit ArbeiterInnen. Zum anderen überprüft die FWF auch die
          Geschäftspraktiken der Unternehmen und ihren Einfluss auf die
          Arbeitsbedingungen in den Produktionsstätten. Alle Berichte zu jedem
          Mitgliedsunternehmen finden Sie auf jeder Mitgliedsseite.
        </template>
      </FoldoutBox>
      <FoldoutBox id="FWF-kritik">
        <template #boxTitle> Kritik an Siegel</template>
        <template #boxText>
          Kritik an der Fair Wear Foundation betrifft hauptsächlich die mögliche
          Irreführung der Konsumenten. Die Kennzeichnung eines Kleidungsstücks
          mit dem Label ist ein gutes Zeichen, allerdings keine Garantie für
          fair produzierte Ware. Die Mitglieder verpflichten sich lediglich
          dazu, auf die Umsetzung der Fair-Wear-Standards hinzuarbeiten. Manche
          sind dabei sehr weit fortgeschritten, andere stehen erst am Anfang. In
          welchem Stadium sich die Marken befinden, kann ein Konsument anhand
          des Logos nicht erkennen. Zudem gibt die Initiative selbst zu, dass
          viele Bereiche immer noch intransparent und daher schwer zu prüfen
          sind.</template
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
  name: "FWF",
  components: { BackButton, PageWrapper, FoldoutBox },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.headerFWF {
  margin-bottom: 16px;
  margin-top: 10px;
}

.einleitung-FWF {
  font-size: 16px;
  margin-left: 15px;
  margin-right: 15px;
}

#FWF-sozialeKriterien,
#FWF-ökoKriterien,
#FWF-vergabe,
#FWF-kritik {
  margin-top: 2em;
}
</style>