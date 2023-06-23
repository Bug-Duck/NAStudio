<script>
export default {
  name: "BottomWord",
  props: {
    left: Array,
    right: Array
  }
}
</script>

<template>
  <div class="bottom">
    <div v-for="word in left" class="bottomLeftItem">
      {{ word }}
    </div>
    <div v-for="word in right" class="bottomRightItem">
      {{ word }}
    </div>
  </div>
</template>

<style>
.bottom {
  height: 25px;
  width: 100%;
  background-color: #171717;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #5a5a5a;
  left: 0px;
}

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
  top: 3px;
}

.bottomLeftItem:hover {
  background-color: #5a5a5a;
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