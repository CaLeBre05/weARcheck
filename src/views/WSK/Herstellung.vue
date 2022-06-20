<template>
  <div>
    <div class="fabrik-header shadow">
      <img
        class="fabrik-header-picture"
        src="@/assets/svg/WSKCliparts/sewing-machine.svg"
      />
      <div class="fabrik-header-title shadow">Herstellung</div>
    </div>
    <BackButton />
    <div class="fabrik-content">
      Die Herstellung von Textilien verteilt sich auf mehrere Prozesse. Zu
      Beginn wird das Rohmaterial entkörnt. Hierbei werden die Fasern, Samen und
      Verunreinigungen von Garn industriell getrennt. In der Spinnerei wird im
      Anschluss das Garn produziert, mit welchem im nächsten Schritt, in der
      Weberei und Strickerei, Web- und Strickstoffe hergestellt werden.
      Fortlaufend werden die Web- und Strickstoffe veredelt. Als
      Veredelungsprozesse gelten Färben, Drucken und Ausrüsten. Am Ende der
      Herstellung fällt der Prozesse der Konfektionierung an. Unter
      Konfektionierung fallen unteranderem das Zuschneiden, Nähen und Verpacken
      der fertigen Textilen.
    </div>
  </div>
</template>

<style>
.fabrik-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
}
.fabrik-header {
  height: 300px;
  position: relative;
  background-color: #ecf6ce;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.fabrik-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
}

.fabrik-header-picture {
  position: absolute;
  top: 50px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Fabrik",
  components: { BackButton },
};
</script>
