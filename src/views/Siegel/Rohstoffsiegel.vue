<template>
  <div>
    <PageWrapper
      :headline="'Rohstoffe-Siegel'"
      :image="'rohstoff.png'"
      :color="'#fff'"
      :textColor="'#000000'"
      :backgroundSize="'9em'"
    >
      <p class="einleitung-Rohstoffsiegel">
        Neben den Fairtrade-Produkt-Siegeln gibt es die
        Fairtrade-Rohstoff-Siegel für fair gehandelte Zutaten in einem
        zusammengesetzten Produkt. Die Fairtrade-Rohstoff-Siegel beziehen sich
        auf eine einzelne fair angebaute und gehandelte Zutat. Das
        Fairtrade-Rohstoff-Siegel umfasst alle Rohstoffe, für die es
        Fairtrade-Standards gibt, mit Ausnahme von Bananen. <br /><br />Sofern
        eine Zutat mit Mengenausgleich eingesetzt wird, ist diese Zutat mit
        einem Pfeil gekennzeichnet. Der Pfeil verweist auf weitere Informationen
        über Zutaten des Produkts, bei denen ein Mengenausgleich stattgefunden
        hat. Möglich ist das bei Kakao, Zucker, Fruchtsaft, Tee und
        Baumwolle.<br /><br />Nur die im Siegel angegebene Zutat im Mischprodukt
        ist Fairtrade-zertifiziert – beispielsweise wurde die für einen
        Schokoriegel benötigte Menge Kakao oder Zucker unter
        Fairtrade-Bedingungen eingekauft.
      </p>
    </PageWrapper>

    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "Rohstoffsiegel",
  components: { BackButton, PageWrapper },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.einleitung-Rohstoffsiegel {
  font-size: 16px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>