<template>
  <div>
    <div class="ueberschriftAnbieter">
      <div class="titelAnbieter">Anbieter</div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.ueberschriftAnbieter {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
  position: relative;
  background-color: #ecf8e0;
}

.titelAnbieter {
  background-color: #fff;
  position: absolute;
  bottom: -10px;
  padding: 1em;
  font-size: 1.5em;
  box-shadow: 3px 3px 20px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Anbieter",
  components: { BackButton },
};
</script>
