<template>
  <div>
    <BackButton />

    <PageWrapper
      :headline="'Entsorgung'"
      :image="'WSKCliparts/trash.svg'"
      :color="'white'"
      :textColor="'#000000'"
      :backgroundColor="'#d9ed92'"
      :backgroundSize="'8em'"
    >
      <div class="kunde-content">
        Die Entsorgung der gebrauchten Kleidung findet auf unterschiedliche Art
        und Weise statt. Jährlich werden 500 Millionen Tonnen Textilmüll
        entsorgt. 87% der entsorgten Kleidung werden entweder verbrannt oder auf
        Mülldeponien gebracht. Nur rund 13% der aussortierten Kleidung werden
        recycelt oder durch als Secondhandkleidung wiederverwendet.<br /><br />
        Beim Recycling von Textilien werden die Rohstoffe zurückgewonnen.
        Gebrauchte Textilien werden zu Putzlappen und Dämmstoffen
        weiterverarbeitet und enden damit nicht als Müll in der Umwelt.
      </div>
    </PageWrapper>
  </div>
</template>

<style>
.kunde-content {
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
  name: "Kunde",
  components: { BackButton, PageWrapper },
};
</script>
