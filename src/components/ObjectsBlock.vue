<script>
export default {
  name: "ObjectsBlock",
  props: {
    objects: Array
  }
}
</script>

<template>
  <div class="objects" style="color: white; font-size: 12px; margin: 0">
    <div style="
            background-color: #5a5a5a;
            width: 100%;
            height: 30px;
            position: fixed;
            box-shadow: 2px;
            border-right: 1px solid #5a5a5a;
          ">
      <div style="
              font-size: 15px;
              font-family: sans-serif;
              top: 3px;
              left: 5px;
              position: relative;
              color: white;
            ">
        Objects
      </div>
    </div>
    <br /><br />
    <table style="top: 30px" id="objectsList"></table>
  </div>
</template>

<style>
.objects {
  float: left;
  width: 100%;
  height: 200px;
  overflow-x: auto;
  overflow-y: auto;
  position: fixed;
  left: 0px;
  top: 0px;
  border-bottom: 1px solid #5a5a5a;
  border-right: 1px solid #5a5a5a;
  background-color: #4c4e4c;
}
</style>