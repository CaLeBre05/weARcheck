<template>

<div>
    <div class="header">
      <div id="headline">Home</div>
    </div>
    <div class="boxes">
        <div class="boxContent" id="siegel">Siegel</div>
        <div class="boxContent" id="wsk">Wertschöpfungskette</div>
        <p>News</p>
        <div class="boxContent" id="slidingWindows">Sliding Windows</div>
    </div>
</div>
</template>

<script>
export default {
    name: "HomeView"
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
}

#headline {
    font-size: 32px;
    background-color: #34A0A4;
    background-color: 0.7;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    padding: 8%;
    border: 1px solid black;
}

.boxes {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    align-content: space-between;
}

.boxContent {
    border: 1px solid black;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5%;
    border-radius: 10px;
    font-size: 20px;
}

#siegel {
    background-color: #C1A285;
}
#wsk {
    background-color: #D9ED92;
}
#slidingWindows {
    background-color: #34A0A4;
    margin-top: 15%;
}
</style>
