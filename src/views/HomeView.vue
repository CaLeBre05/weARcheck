<template>
<div>
    <div class="header">
      <div id="headline">weAR check</div>
    </div>
    <div class="boxes">
        <div class="boxContent" id="siegelBox"><p id="siegel">Siegel</p></div>
        <div class="boxContent" id="wskBox"><p id="wsk">Wertschöpfungskette</p></div>
        <div class="boxContent" id="slidingWindows">Sliding Windows</div>
    </div>
</div>
</template>

<script>
export default {
    name: "HomeView",
    components: {

    },
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

#headline {
    font-size: 16px;
    background-color: #34A0A4;
    padding-top: 1em;
    padding-bottom: 1em;
    text-align: center;
}

.boxes {
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    align-content: space-between;
}

.boxContent {
    border: 1px solid black;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 2em;
    border-radius: 10px;
    font-size: 24px;
}

#siegelBox {
    background-image: url("@/assets/fairtrade-kleidung-siegel-ueberblick.png");
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    position:relative;
    height: 4em;
}

#siegel {
    position: absolute;
    border: 1px solid black;
    border-radius: 10px;
    padding-left: 1em;
    padding-right: 1em;
    background-color: #C1A285;
    bottom: 0;
    left: 33%;
}
#wskBox {
    position: relative;
    background-image: url("@/assets/Airplane.jpg");
    background-repeat: no-repeat;
    background-size:50%;
    height: 4em;
    background-position: center;
}

#wsk {
    position: absolute;
    border: 1px solid black;
    border-radius: 10px;
    padding-left: 1em;
    padding-right: 1em;
    background-color: #D9ED92;
    bottom: 0;
}
#slidingWindows {
    position: absolute;
    background-color: #34A0A4;
    bottom: 3em;
}
</style>
