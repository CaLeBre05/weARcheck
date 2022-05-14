<template>
<div>
<details>
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
	transition: all .5s;
	box-shadow: 5px 5px 5px silver;
}

summary {
	font-weight: bold;
	font-size: 20px;
	position: relative;
	line-height: 300%;
	padding-left: 0;
}

summary::marker {
	color: transparent;
}

summary::after {
	width: 1rem;
	height: 1em;
	position: absolute;
	top: 0;
	right: 1em;
	content: url(../assets/img/forward.svg);
	font-size: 2em;
	font-weight: bold;
	text-align: right;
	transition: transform 0.2s;
	transform: translate(20px, 10px) rotate(90deg)
}

details[open] summary::after {
	transform:translate(-10px, 9px) rotate(270deg) ;
}


details p {
	text-align: left;
	padding: 16px;
	padding-top: 0;
	font-size: 14px;
	margin-top: 0;;
}

h1 {
	grid-column: 1 / -1;
}
  </style>
  