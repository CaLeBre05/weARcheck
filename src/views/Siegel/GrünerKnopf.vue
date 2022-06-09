<template>
  <div>
    <PageWrapper
      :headline="'Grüner Knopf Siegel'"
      :image="'GrünerKnopf.png'"
      :color="'#bca086'"
      :textColor="'#000000'"
      ><div class="flexContainer-GrünerKnopf">
        <h2 class="headerGrünerKnopf">Allgemeine Informationen</h2>
        <p class="einleitung-GrünerKnopf">
          Der Grüne Knopf wurde als deutsches Textilsiegel zur Corporate Social
          Responsibility am 9. September 2019 eingeführt. Das staatliche Label
          wurde durch das Bundesministerium für wirtschaftliche Zusammenarbeit
          und Entwicklung in Zusammenarbeit mit der Deutschen Gesellschaft für
          Internationale Zusammenarbeit entwickelt. Es stellt verbindliche
          Anforderungen, um Mensch und Umwelt zu schützen. Insgesamt müssen 46
          anspruchsvolle Sozial- und Umweltstandards eingehalten werden.
        </p>
        <FoldoutBox id="GrünerKnopf-sozialeKriterien">
          <template #boxTitle> Soziale Kriterien </template>
          <template #boxText>
            Verbot von Zwangs- und Kinderarbeit, Arbeitszeiten und bezahlte
            Überstunden Verbot von Diskriminierung und Belästigung, Zahlung von
            Mindestlöhnen, Gewährleistung von Arbeitsschutz und -sicherheit
          </template>
        </FoldoutBox>
        <FoldoutBox id="GrünerKnopf-ökoKriterien">
          <template #boxTitle> Ökologische Kriterien </template>
          <template #boxText>
            Verbot gefährlicher Chemikalien, Wenig Luftverschmutzung und CO2,
            Verwendung von schadstoffgeprüften Naturfasern, Biologische
            Abbaubarkeit von Chemischen Stoffen, Grenzwerte für Abwasser
          </template>
        </FoldoutBox>
        <FoldoutBox id="GrünerKnopf-vergabe">
          <template #boxTitle> Vergabe des Siegels </template>
          <template #boxText>
            Die Vergabestelle informiert Unternehmen über die für die
            Zertifizierung zu erfüllenden Kriterien. Vor dem Beratungsgespräch
            und dem Audit durch eine der unabhängigen Zertifizierungsstellen
            erfolgt eine Prüfung der Antragsberechtigung durch die
            Vergabestelle. Hierzu ist bei der Vergabestelle ein Antrag zu
            stellen. Nach positiver Prüfung der Antragsberechtigung erfolgt, zur
            Vorbereitung des Audits durch eine unabhängige
            Zertifizierungsstelle, ein unverbindliches und vertrauliches
            Beratungsgespräch durch die Grüner Knopf Geschäftsstelle. Als
            Gesprächsgrundlage ist hierzu vom Unternehmen eine
            Selbsteinschätzung, über produktbezogenen Sozial- und
            Umweltkriterien, welche für die Zertifizierung mit dem Grüner Knopf
            Logo erfüllt sein müssen, auszufüllen und zu übermitteln. Im
            Anschluss an das Beratungsgespräch ist vom Unternehmen ein
            Audittermin bei einer der, für den Grünen Knopf zugelassenen,
            Zertifizierungsstellen zu vereinbaren. Die Zertifizierungsstelle
            kontrolliert die Erfüllung aller unternehmensbezogenen Anforderungen
            sowie die Erfüllung der Produktkriterien. Bei bestandenem Audit wird
            ein Zertifikat erstellt.
          </template>
        </FoldoutBox>
        <FoldoutBox id="GrünerKnopf-kritik">
          <template #boxTitle> Kritik an Siegel</template>
          <template #boxText>
            Das Konzept des Grünen Knopfs ist sowohl bei Aktivisten als auch der
            Textilindustrie in der Kritik. Die deutsche Textilwirtschaft schrieb
            2018 in einem internen Positionspapier, der Grüne Knopf könne „gar
            nicht halten, was er vorgibt zu versprechen“. Die Umstellung auf das
            neue Siegel sei „mit enormen zusätzlichen Kosten“ verbunden, der
            Aufbau eines Überwachungssystems dauere Jahre. Die Prüfung
            umfasst nicht die Erzeugung der Rohstoffe, sondern nur die
            Weiterverarbeitung. Daneben garantiert die Verpflichtung,
            Mindestlöhne zu zahlen, nicht, dass diese Löhne existenzsichernd
            sind.
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
  name: "GrünerKnopf",
  components: { BackButton, PageWrapper, FoldoutBox },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.headerGrünerKnopf {
  margin-bottom: 8px;
}

.einleitung-GrünerKnopf {
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
}

#GrünerKnopf-sozialeKriterien,
#GrünerKnopf-ökoKriterien,
#GrünerKnopf-vergabe,
#GrünerKnopf-kritik {
  margin-top: 2em;
}

.flexContainer-GrünerKnopf {
  display: flex;
  flex-direction: column;
  margin: 1em 1em 3em 1em;
  padding: 0.5em;
}
</style>