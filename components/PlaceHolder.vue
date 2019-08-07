<template>
  <div class="placeholder__vuejsisrael">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="262" height="227" viewBox="0 0 262 227">
      <g id="Vue.js_logo_strokes" fill="none" fill-rule="evenodd">
        <g id="Path-2">
          <polyline class="outer" stroke="#FFF" stroke-width="46" points="12.19 -24.031 131 181 250.351 -26.016" />
        </g>
        <g id="Path-3" transform="translate(52)">
          <polyline class="inner" stroke="#0038B8" stroke-width="42" points="15.797 -14.056 79 94 142.83 -17.863" />
        </g>
      </g>
    </svg>
    <p class="text">
      <span class="text-vue">Vue</span><span class="text-dot">.</span><span class="text-js">js</span><span class="text-israel">&nbsp;Israel</span>
    </p>
  </div>
</template>
<script>
export default {
    name: 'Placeholder'
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Dosis);
body {
  --color-white: #ffffff;
  --color-green: #4dba87;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  animation: bg-color 8s linear forwards infinite;
}
.text {
  font-family: "Dosis", serif;
  font-size: 48px;
}
.inner {
  --inner-original-color: #435466;
  --inner-blue-color: #0038b8;
  stroke-dasharray: 250;
  stroke-dashoffset: 250;
  animation: dash-inner 8s linear forwards infinite;
}
.outer {
  --outer-original-color: #4dba87;
  --outer-white-color: #ffffff;
  stroke-dasharray: 460;
  stroke-dashoffset: 460;
  animation: dash-outer 8s linear forwards infinite;
  animation-delay: 250ms;
}
.text {
  display: flex;
  justify-content: center;
}
.text span {
  display: inline-block;
}
.text-israel {
  --text-width: 120px;
  overflow: hidden;
  width: 0;
  color: white;
  animation: israel-text 8s linear forwards infinite;
  animation-delay: 250ms;
}
.text-vue,
.text-dot,
.text-js {
  color: #2c3e50;
}
.text-dot {
  --color-original: #2c3e50;
  --color-blue: #0038b8;
  animation: dot-color-change 8s linear forwards infinite;
  animation-delay: 250ms;
}
.text-vue,
.text-js {
  --color-original: #2c3e50;
  --color-white: #ffffff;
  animation: vue-js-color-change 8s linear forwards infinite;
}
@keyframes dash-inner {
  0% {
    stroke-dashoffset: 250;
    stroke: var(--inner-original-color);
  }
  6.25% {
    stroke-dashoffset: 0;
    stroke: var(--inner-original-color);
  }
  43.75% {
    stroke-dashoffset: 0;
    stroke: var(--inner-original-color);
  }
  50% {
    stroke-dashoffset: -250;
    stroke: var(--inner-original-color);
  }
  50.01% {
    stroke-dashoffset: 250;
    stroke: var(--inner-blue-color);
  }
  56.25% {
    stroke-dashoffset: 0;
    stroke: var(--inner-blue-color);
  }
  93.75% {
    stroke-dashoffset: 0;
    stroke: var(--inner-blue-color);
  }
  100% {
    stroke-dashoffset: -250;
    stroke: var(--inner-blue-color);
  }
}
@keyframes dash-outer {
  0% {
    stroke-dashoffset: 460;
    stroke: var(--outer-original-color);
  }
  6.25% {
    stroke-dashoffset: 0;
    stroke: var(--outer-original-color);
  }
  43.75% {
    stroke-dashoffset: 0;
    stroke: var(--outer-original-color);
  }
  50% {
    stroke-dashoffset: -460;
    stroke: var(--outer-original-color);
  }
  50.01% {
    stroke-dashoffset: 460;
    stroke: var(--outer-white-color);
  }
  56.25% {
    stroke-dashoffset: 0;
    stroke: var(--outer-white-color);
  }
  93.75% {
    stroke-dashoffset: 0;
    stroke: var(--outer-white-color);
  }
  100% {
    stroke-dashoffset: -460;
    stroke: var(--outer-white-color);
  }
}
@keyframes israel-text {
  0% {
    width: 0;
  }
  6.25% {
    width: 0;
  }
  43.75% {
    width: 0;
  }
  50% {
    width: 0;
  }
  50.01% {
    width: 0;
  }
  56.25% {
    width: var(--text-width);
  }
  93.75% {
    width: var(--text-width);
  }
  100% {
    width: 0;
  }
}
@keyframes bg-color {
  0% {
    background-color: var(--color-white);
  }
  6.25% {
    background-color: var(--color-white);
  }
  43.75% {
    background-color: var(--color-white);
  }
  50% {
    background-color: var(--color-white);
  }
  50.01% {
    background-color: var(--color-white);
  }
  56.25% {
    background-color: var(--color-green);
  }
  93.75% {
    background-color: var(--color-green);
  }
  100% {
    background-color: var(--color-white);
  }
}
@keyframes dot-color-change {
  0% {
    color: var(--color-original);
  }
  6.25% {
    color: var(--color-original);
  }
  43.75% {
    color: var(--color-original);
  }
  50% {
    color: var(--color-original);
  }
  50.01% {
    color: var(--color-original);
  }
  56.25% {
    color: var(--color-blue);
  }
  93.75% {
    color: var(--color-blue);
  }
  100% {
    color: var(--color-original);
  }
}
@keyframes vue-js-color-change {
  0% {
    color: var(--color-original);
  }
  6.25% {
    color: var(--color-original);
  }
  43.75% {
    color: var(--color-original);
  }
  50% {
    color: var(--color-original);
  }
  50.01% {
    color: var(--color-original);
  }
  56.25% {
    color: var(--color-white);
  }
  93.75% {
    color: var(--color-white);
  }
  100% {
    color: var(--color-original);
  }
}
</style>
