<script>
export default {
  name: "PlayButton",
  props: {
    isPlaying: String
  },
}
</script>

<template>
  <div class="bt" @click="clickButton">
    <span v-if="isPlaying">
      Suspend
    </span>
    <span v-else>
      Play
    </span>
  </div>
</template>

<style>
.bt {
  color: white;
  font-family: sans-serif;
  font-size: 30px;
  float: left;
  text-align: center;
  position: relative;
  user-select: none;
  margin-left: 5px;
  margin-right: 5px;
  top: 3px;
}

.bt:hover {
  background-color: #5a5a5a;
}
</style>