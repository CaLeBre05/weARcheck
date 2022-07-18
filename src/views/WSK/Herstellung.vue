<template>
  <div>
    <BackButton />
    <PageWrapper
      :headline="'Herstellung'"
      :image="'WSKCliparts/sewing-machine.svg'"
      :color="'white'"
      :textColor="'#000000'"
      :backgroundColor="'#ecf6ce'"
      :backgroundSize="'8em'"
    >
      <div class="fabrik-content">
        Die Herstellung von Textilien verteilt sich auf mehrere Prozesse. Zu
        Beginn wird das Rohmaterial entkörnt. Hierbei werden die Fasern, Samen
        und Verunreinigungen von Garn industriell getrennt. In der Spinnerei
        wird im Anschluss das Garn produziert, mit welchem im nächsten Schritt,
        in der Weberei und Strickerei, Web- und Strickstoffe hergestellt werden.
        Fortlaufend werden die Web- und Strickstoffe veredelt. Als
        Veredelungsprozesse gelten Färben, Drucken und Ausrüsten. Am Ende der
        Herstellung fällt der Prozesse der Konfektionierung an. Unter
        Konfektionierung fallen unteranderem das Zuschneiden, Nähen und
        Verpacken der fertigen Textilen.
      </div>
    </PageWrapper>
  </div>
</template>

<style>
.fabrik-content {
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
  name: "Fabrik",
  components: { BackButton, PageWrapper },
};
</script>
