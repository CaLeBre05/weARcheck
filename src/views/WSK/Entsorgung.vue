<template>
  <div>
    <div class="kunde-header shadow">
      <img
        class="kunde-header-picture"
        src="@/assets/svg/WSKCliparts/trash.png"
      />
      <div class="kunde-header-title shadow">Entsorgung</div>
    </div>
    <BackButton />
    <div class="kunde-content">
      Die Entsorgung der gebrauchten Kleidung findet auf unterschiedliche Art
      und Weise statt. Jährlich werden 500 Millionen Tonnen Textilmüll entsorgt.
      87% der entsorgten Kleidung werden entweder verbrannt oder auf
      Mülldeponien gebracht. Nur rund 13% der aussortierten Kleidung werden
      recycelt oder durch als Secondhandkleidung wiederverwendet.<br /><br />
      Beim Recycling von Textilien werden die Rohstoffe zurückgewonnen.
      Gebrauchte Textilien werden zu Putzlappen und Dämmstoffen
      weiterverarbeitet und enden damit nicht als Müll in der Umwelt.
    </div>
  </div>
</template>

<style>
.kunde-content {
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
}
.kunde-header {
  height: 300px;
  position: relative;
  background-color: #d9ed92;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.kunde-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
}

.kunde-header-picture {
  position: absolute;
  top: 50px;
  width: 164px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Kunde",
  components: { BackButton },
};
</script>
