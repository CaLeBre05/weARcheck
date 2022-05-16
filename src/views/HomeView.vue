<template>
<div>
    <div id="flexContainter" class="flexContainer">
      <router-link class="router" style="text-decoration: none; color: inherit;" to="/Siegel">
      <div id="siegel" class="siegel">
         <div id="siegelButton" class="button">Siegel</div>
      </div></router-link>
      <div id="wsk" class="wsk">
         <div id="wskButton" class="button"><router-link style="text-decoration: none; color: inherit;" to="/WSK">Wertschöpfungskette</router-link></div>
      </div>
    </div>
    <div id="news">News<hr></div>
    <div class="carousel-container">
       <div class="carousel-slide">
          <div class="slideButton" id="firstSlide">Ausbeute trifft oft Frauen</div>
       </div>
       <div class="carousel-slide">
          <div class="slideButton" id="secondSlide">Second Slide</div>
       </div>
       <div class="carousel-slide">
          <div class="slideButton" id="thirdSlide">Third Slide</div>
       </div>
    </div>
</div>
</template>

<script>
export default {
    name: "HomeView"
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.router {
   width: 100%;
   margin-top: 1em;
}
#firstSlide, #secondSlide, #thirdSlide {
   background-color: #34a0a4;
   color: white;
}

.slideButton {
   position: absolute;
   bottom: 10px;
   text-align: center;
   font-size: 1.2em;
   padding: 0.7em;
   display: inline-block;
   box-shadow: 3px 3px 20px #000000;
}

.carousel-slide {
   display: flex;
   width: 100%;
   height: 250px;
   background-image: url("@/assets/fast_fashion.jpg");
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;
   flex-shrink: 0;
   position: relative;
}

.carousel-container {
   margin-top: 2em;
   margin-left: 1em;
   margin-right: 1em;
   box-shadow: 3px 3px 20px;
   display: flex;
   border: 1px solid black;
   overflow: hidden;
}
hr {
   border-top: 1px solid black;
}
.flexContainer {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 1em;
}

.wsk, .siegel {
   height: 200px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: flex-end;
   box-shadow: 3px 3px 20px;
   position: relative;
}

.wsk {
   background-image: url("@/assets/plane.jpg");
   height: 200px;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
}

.siegel {
   background-image: url("@/assets/siegel_aufmacher.jpg");
   height: 200px;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
}
.button {
   position: absolute;
   bottom: -10px;
   text-align: center;
   font-size: 1.6em;
   font-weight:bolder;
   padding: 0.7em;
   display: inline-block;
   box-shadow: 3px 3px 20px;
}

#siegelButton {
   background-color: #c1a285;
}

#wskButton {
   background-color: #d9ed92;
}

#news {
   font-size: 2em;
}

</style>
