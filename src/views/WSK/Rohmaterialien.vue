<template>
  <div>
    <div class="ueberschriftRohmaterialien">
      <div class="titelRohmaterialien">Rohmaterialien</div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.ueberschriftRohmaterialien {
  background-color: #f5fbef;
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.titelRohmaterialien {
  padding: 1em;
  font-size: 1.5em;
  position: absolute;
  bottom: -10px;
  background-color: #fff;
  box-shadow: 3px 3px 20px;
}
</style>

<script>
import BackButton from "@/components/backButton.vue";
export default {
  name: "Rohmaterialien",
  components: { BackButton },
};
</script>
