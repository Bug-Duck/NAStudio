<script>
export default {
  name: "ObjectsAttributeBlock"
}
</script>

<template>
  <div class="objectAttribute">
    <div style="
            background-color: #5a5a5a;
            width: 300px;
            height: 30px;
            position: fixed;
            box-shadow: 2px;
          ">
      <div style="
              font-size: 15px;
              font-family: sans-serif;
              top: 3px;
              left: 5px;
              position: relative;
              color: white;
            ">
        Edit
      </div>
    </div>
  </div>
</template>

<style>
.objectAttribute {
  float: left;
  width: 299px;
  height: 100%;
  background-color: #4c4e4c;
  position: fixed;
  overflow-y: auto;
  top: 201px;
  bottom: 25px;
  left: 0px;
  border-right: 1px solid #5a5a5a;
}
</style>