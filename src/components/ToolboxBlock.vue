<script>
import PlayButton from "./buttons/PlayButton.vue"

export default {
  name: "ToolboxBlock",
  components: {
    PlayButton
  }
}
</script>

<template>
  <div class="tools">
    <PlayButton/>
  </div>
</template>

<style>
.tools {
  width: 100%;
  position: fixed;
  height: 50px;
  bottom: 25px;
  left: 300px;
  border: 1px solid #5a5a5a;
  background-color: #4c4e4c;
}
</style>