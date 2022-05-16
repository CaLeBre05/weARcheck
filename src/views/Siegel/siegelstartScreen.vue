<template>
<div>
    <div class="picContainerSiegel">
        <div class="ueberschrift">Siegel</div>
    </div>
    <BackButton/>
    <div class="flexContainerSiegel">
        <div class="placeHolder"></div>
        <div class="placeHolder"></div>
        <div class="placeHolder"></div>
        <div class="placeHolder"></div>
        <div class="placeHolder"></div>
        <div class="placeHolder"></div>
    </div>
</div>
</template>

<script>
import BackButton from '@/components/backButton.vue';

export default {
    name: "siegelstartScreen",
    components: { BackButton }
}

</script>

<style>

* {
    margin: 0;
    padding: 0;
}

.placeHolder {
    height: 60px;
    border: 1px solid black;
}
.flexContainerSiegel {
    display: flex;
    flex-direction: column;
    height: 520px;
    border: 1px solid black;
    margin: 1em;
    padding: .5em;
    justify-content: space-between;
}

.picContainerSiegel {
    position: relative;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url("@/assets/siegel_aufmacher.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 3px 3px 20px;
}
.ueberschrift {
    position: absolute;
    bottom: -10px;
    text-align: center;
    display:inline-block;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: .5em;
    padding-bottom: .5em;
    background-color:#c1a285;
    font-size: 1.7em;
    font-weight: bolder;
    box-shadow: 3px 3px 20px;
}
</style>