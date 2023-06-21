<script>
export default {
  name: "BottomWord",
  props: {
    position: String,
    text: String
  }
}
</script>

<template>
  <div v-if="text == 'left'">
    <div class="bottomLeftItem">{{ text }}</div>
  </div>

  <div v-if="text == 'right'">
    <div class="bottomRightItem">{{ text }}</div>
  </div>
</template>

<style>
.bottomLeftItem {
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  float: left;
  text-align: center;
  position: relative;
  user-select: none;
  margin-left: 5px;
  margin-right: 5px;
}

.bottomRightItem {
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  float: right;
  text-align: center;
  position: relative;
  user-select: none;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 1px;
}
</style>