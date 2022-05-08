<template>
    <input type="button" class="backButton" value="<">
</template>

<style scoped>
.backButton {
    text-align: center;
    border-radius: 50px;
    border: none;
    background-color:lightgray;
    position: absolute;
    padding-top: .5em;
    padding-bottom: .5em;
    padding-left: .75em;
    padding-right: .75em;
    opacity: .7;
    font-weight: bold;
}
</style>

<script>
export default{
    name: "backButton"
};

</script>
