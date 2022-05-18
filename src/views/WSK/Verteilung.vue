<template>
  <div>
    <div class="ueberschriftVerteilung">
      <div class="titelVerteilung">Verteilung</div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.ueberschriftVerteilung {
  height: 300px;
  position: relative;
  background-color: #d0f5a9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.titelVerteilung {
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
  name: "Verkauf",
  components: { BackButton },
};
</script>
