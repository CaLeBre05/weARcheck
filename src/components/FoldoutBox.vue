<template>
  <div>
    <details class="shadow">
      <summary><slot name="boxTitle"></slot></summary>
      <p><slot name="boxText"></slot></p>
    </details>
  </div>
</template>
<style>
details {
  border: 1px solid gainsboro;
  grid-column: 2 / 3;
  height: min-content;
  transition: all 0.5s;
}

summary {
  font-weight: bold;
  font-size: 18px;
  position: relative;
  line-height: 300%;
  margin-left: 0.5em;
  padding-left: 5px;
  padding-right: 5px;
}

summary::marker {
  color: transparent;
  font-size: 1px;
}

summary::after {
  width: 1rem;
  height: 1em;
  position: absolute;
  top: 0;
  right: 1em;
  content: url(../assets/svg/forward.svg);
  font-size: 2em;
  font-weight: bold;
  text-align: right;
  transition: transform 0.2s;
  transform: translate(30px, 10px) rotate(90deg);
}

details[open] summary::after {
  transform: translate(0px, 9px) rotate(270deg);
}

details p {
  text-align: left;
  padding: 16px;
  padding-top: 0;
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
