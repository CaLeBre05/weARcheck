<template>
  <div>
    <PageWrapper
      :headline="'Rohstofferzeugung'"
      :image="'WSKCliparts/tree.svg'"
      :color="'white'"
      :textColor="'#000000'"
      :backgroundColor="'#f5fbef'"
      :backgroundSize="'8em'"
    >
      <BackButton />
      <div class="rohmaterialien-content">
        Am Anfang der Wertschöpfungskette steht die Rohstofferzeugung. Diese
        beinhaltet die Produktion des Saatguts, den Anbau sowie die Ernte der
        fertigen Erzeugnisse.
        <br />
        <br />
        <b>Fakten zur Baumwollerzeugung:</b>
        <br />
        Die Produktion von Baumwolle ist, ähnlich wie die Produktion von Reis
        oder Weizen wasserintensiv. So werden bis zu 11.000 Liter Wasser
        benötigt, um einen Kilogramm Baumwolle herzustellen. Neben dem enormen
        Wasserverbrauch stellt auch das genetisch veränderte Saatgut ein Problem
        dar. Die Folgen auf die Umwelt sind aktuell nur schwer abzuschätzen.
        Ebenfalls ist der Einsatz von Pestiziden problematisch. Neben der
        Verschmutzung der Umwelt werden nicht nur Schädlinge bekämpft, sondern
        auch andere Insekten getötet.
        <br />
        <br />
        <b>Fakten zu tierischer Rohstofferzeugung:</b>
        <br />
        Beim Erzeugen tierischer Rohstoffe sind die Haltungsformen sehr
        unterschiedlich und oftmals problematisch. Durch die Massenaufzucht
        kommen in der Regel Antibiotika zum Einsatz, die dafür sorgen, dass sich
        Krankheiten nicht weiter ausbreiten. Auch ist der Stress, den die Tiere
        erleiden nicht zu unterschätzen.
      </div></PageWrapper
    >
  </div>
</template>

<style>
.rohmaterialien-content {
  font-size: 16px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "Rohmaterialien",
  components: { BackButton, PageWrapper },
};
</script>
