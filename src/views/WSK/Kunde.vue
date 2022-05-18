<template>
  <div>
    <div class="ueberschriftKunde">
      <div class="titelKunde">Kunde</div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.ueberschriftKunde {
  height: 300px;
  position: relative;
  background-color: #acfa58;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.titelKunde {
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  padding: 1em;
  font-size: 1.5em;
  box-shadow: 3px 3px 20px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Kunde",
  components: { BackButton },
};
</script>
