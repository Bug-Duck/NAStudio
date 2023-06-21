<script>
export default {
  name: "FrameEditingBlock",
}
</script>

<template>
  <div class="frame">
    <div class="player">
    </div>
    <div class="situation"></div>
    <!-- <canvas
          height="150"
          width="800"
          style="border: 1px solid #ffffff"
        ></canvas> -->
  </div>
</template>

<style>
.frame {
  width: 100%;
  height: 200px;
  float: left;
  background-color: #282828;
  overflow-x: scroll;
  overflow-y: visible;
  position: fixed;
  left: 335px;
  top: 0px;
  border-bottom: 1px solid #5a5a5a;
}

.player {
  width: 35px;
  height: 200px;
  position: fixed;
  background-color: #4c4e4c;
  left: 300px;
  border-bottom: 1px solid #5a5a5a;
  border-left: 1px solid #5a5a5a;
}

.situation {
  background-color: #171717;
  left: 336px;
  height: 30px;
  position: fixed;
  width: 100%
}
</style>
