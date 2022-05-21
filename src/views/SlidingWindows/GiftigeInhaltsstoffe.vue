<template>
  <div>
    <PageWrapper
      :headline="'Giftige Inhaltsstoffe'"
      :image="'schadstoffe_kleidung.jpg'"
      :color="'#34a0a4'"
      ><div class="flexContainerInhaltsstoffe"></div
    ></PageWrapper>

    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/backButton.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "GiftigeInhaltsstoffe",
  components: { BackButton, PageWrapper },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.flexContainerInhaltsstoffe {
  display: flex;
  flex-direction: column;
  height: 500px;
  margin: 1em 1em 3.5em 1em;
  padding-top: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
  justify-content: space-between;
  border: 1px solid black;
}
</style>
