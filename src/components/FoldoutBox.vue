<template>
  <div>
    <details class="shadow">
      <summary>
        <slot name="boxTitle"></slot>
        <span class="chevron"></span>
      </summary>
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
  font-size: 20px;
  margin-left: 0.5em;
  padding: 15px 15px 15px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

summary::marker {
  color: transparent;
  font-size: 1px;
}

summary::-webkit-details-marker {
  display: none;
}

.chevron {
  width: 1rem;
  height: 1em;
  content: url(../assets/svg/back-arrow.svg);
  transition: transform 0.2s;
  transform: rotate(270deg);
}

details[open] .chevron {
  transform: rotate(90deg);
}

details p {
  text-align: left;
  padding: 16px;
  padding-top: 0;
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 0;
}

summary::after > * {
  width: 100px;
}
</style>
