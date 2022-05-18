<template>
  <div>
    <div class="ueberschriftFabrik">
      <div class="titelFabrik">Fabrik</div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.ueberschriftFabrik {
  height: 300px;
  position: relative;
  background-color: #e3f6ce;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.titelFabrik {
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
  name: "Fabrik",
  components: { BackButton },
};
</script>
