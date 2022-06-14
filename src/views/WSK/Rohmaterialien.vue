<template>
  <div>
    <div class="rohmaterialien-header shadow">
      <img
        class="rohmaterialien-header-picture"
        src="@/assets/svg/WSKCliparts/tree.svg"
      />
      <div class="rohmaterialien-header-title shadow">Rohmaterialien</div>
    </div>
    <BackButton />
    <div class="rohmaterialien-content">
      Am Anfang der Wertschöpfungskette steht die Rohstofferzeugung. Diese
      beinhaltet die Produktion des Saatguts, den Anbau sowie die Ernte der
      fertigen Erzeugnisse. Fakten zur Baumwollerzeugung: Die Produktion von
      Baumwolle ist, ähnlich wie die Produktion von Reis oder Weizen
      wasserintensiv. So werden bis zu 11.000 Liter Wasser benötigt, um einen
      Kilogramm Baumwolle herzustellen. Neben dem enormen Wasserverbrauch stellt
      auch das genetisch veränderte Saatgut ein Problem dar. Die Folgen auf die
      Umwelt sind aktuell nur schwer abzuschätzen. Ebenfalls ist der Einsatz von
      Pestiziden problematisch. Neben der Verschmutzung der Umwelt werden nicht
      nur Schädlinge bekämpft, sondern auch andere Insekten getötet. Fakten zu
      tierischer Rohstofferzeugung: Beim Erzeugen tierischer Rohstoffe sind die
      Haltungsformen sehr unterschiedlich und oftmals problematisch. Durch die
      Massenaufzucht kommen in der Regel Antibiotika zum Einsatz, die dafür
      sorgen, dass sich Krankheiten nicht weiter ausbreiten. Auch ist der
      Stress, den die Tiere erleiden nicht zu unterschätzen.
    </div>
  </div>
</template>

<style>
.rohmaterialien-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
  text-align: justify;
}
.rohmaterialien-header {
  background-color: #f5fbef;
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.rohmaterialien-header-title {
  padding: 1em;
  font-size: 1.5em;
  position: absolute;
  bottom: -10px;
  background-color: #fff;
}

.rohmaterialien-header-picture {
  position: absolute;
  top: 50px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Rohmaterialien",
  components: { BackButton },
};
</script>
