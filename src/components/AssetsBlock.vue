<script>
export default {
  name: "AssetsBlock",
}
</script>

<template>
  <div class="assets">
    <div style="
    background-color: #5a5a5a;
            width: 100%;
            height: 30px;
            position: fixed;
            box-shadow: 2px;
            border-left: 1px solid #5a5a5a;
            ">
      <div style="
              font-size: 15px;
              font-family: sans-serif;
              top: 3px;
              left: 5px;
              position: relative;
              color: white;
            ">
        Assets
      </div>
    </div>
  </div>
</template>

<style>
.assets {
  float: right;
  width: 300px;
  height: 100%;
  top: 200px;
  bottom: 150px;
  right: 0px;
  background-color: #4c4e4c;
  position: fixed;
  border: 1px solid #5a5a5a;
}
</style>