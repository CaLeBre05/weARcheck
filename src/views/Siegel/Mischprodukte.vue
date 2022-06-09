<template>
  <div>
    <PageWrapper
      :headline="'Mischprodukte-Siegel'"
      :image="'mischprodukte.png'"
      :color="'#fff'"
      :textColor="'#000000'"
      ><div class="flexContainer-Mischprodukte">
        <h2 class="headerMischprodukte">Mischprodukte</h2>
        <p class="einleitung-Mischprodukte">
          Handelt es sich bei dem Produkt um ein Mischprodukt (Bsp. Kekse,
          Schokolade) dann ist das Fairtrade-Produkt-Siegel zusätzlich mit einem
          Pfeil gekennzeichnet, der auf weiterführende Informationen auf der
          Rückseite verweist. Bei Mischprodukten mit diesem Siegel müssen alle
          Zutaten, die unter Fairtrade-Bedingungen erhältlich sind,
          Fairtrade-zertifiziert sein. Produkte, die mit Mengenausgleich
          hergestellt wurden, sind ebenfalls mit einem Pfeil neben dem Siegel
          gekennzeichnet, der auf weiterführende Informationen auf der Rückseite
          verweist. Möglich ist das bei Kakao, Zucker, Fruchtsaft und Tee.
        </p>
      </div>
    </PageWrapper>

    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "Mischprodukte",
  components: { BackButton, PageWrapper },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.headerMischprodukte {
  margin-bottom: 16px;
  margin-top: 10px;
}

.einleitung-Mischprodukte {
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
}

.flexContainer-Mischprodukte {
  display: flex;
  flex-direction: column;
  margin: 1em 1.5em 3em 1.5em;
  padding-top: 1em 0.5em 0.5em 0.5em;
}
</style>