<template>
  <div>
    <div class="verkauf-header shadow">
      <img
        class="verkauf-header-picture"
        src="@/assets/svg/WSKCliparts/recycle.svg"
      />
      <div class="verkauf-header-title shadow">Verkauf</div>
    </div>
    <BackButton />
    <div class="verkauf-content">
      Die Entsorgung der gebrauchten Kleidung findet auf unterschiedliche Art
      und Weise statt. Jährlich werden 500 Millionen Tonnen Textilmüll entsorgt.
      87% der entsorgten Kleidung werden entweder verbrannt oder auf
      Mülldeponien gebracht. Nur rund 13% der aussortierten Kleidung werden
      recycelt oder durch als Secondhandkleidung wiederverwendet. Beim Recycling
      von Textilien werden die Rohstoffe zurückgewonnen. Gebrauchte Textilien
      werden zu Putzlappen und Dämmstoffen weiterverarbeitet und enden damit
      nicht als Müll in der Umwelt.
    </div>
  </div>
</template>

<style>
.verkauf-content {
  text-align: justify;
  margin: 2.5em 1.7em 3.5em 1.7em;
  font-size: 1.2em;
}
.verkauf-header {
  height: 300px;
  position: relative;
  background-color: #d9ef92;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.verkauf-header-title {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
}

.verkauf-header-picture {
  position: absolute;
  top: 50px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Verkauf",
  components: { BackButton },
};
</script>
