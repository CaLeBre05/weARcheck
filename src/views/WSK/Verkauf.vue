<template>
  <div>
    <div class="ueberschriftVerkauf">
      <div class="titelVerkauf">Verkauf</div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.ueberschriftVerkauf {
  height: 300px;
  position: relative;
  background-color: #bef781;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.titelVerkauf {
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
