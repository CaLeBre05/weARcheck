<template>
  <div>
    <div class="kunde-header">
      <div class="kunde-header-title">Kunde</div>
    </div>
    <BackButton />
  </div>
</template>

<style>
.kunde-header {
  height: 300px;
  position: relative;
  background-color: #d9ed92;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 3px 3px 20px;
}

.kunde-header-title {
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
