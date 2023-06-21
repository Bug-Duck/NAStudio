<script>
export default {
  name: "CanvasBlock"
}
</script>

<template>
  <div class="canvas">
    <!-- <canvas class="canvas"></canvas> -->
    <!-- <button>dddddd</button>
    <input /> -->
  </div>
</template>

<style>
.canvas_block {
  overflow-x: scroll;
  overflow-y: scroll;
  background-color: #4c4e4c;
  top: 202px;
  bottom: 325px;
  left: 300px;
  float: left;
  height: 100% - 152px;
  width: 100%;
  right: 450px;
  position: fixed;
}

.canvas {
  background-color: white;
  border: 1px solid grey;
  left: 1px;
  top: 1px;
}
</style>