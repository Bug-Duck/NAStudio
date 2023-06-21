<template>
  <div style="margin: 0; background-color: #4c4e4c">
    <div class="header">
      <ObjectsBlock :objects="objectsList" />
      <FrameEditingBlock />
    </div>
    <div class="row">
      <ObjectsAttributeBlock />
      <div>
        <CanvasBlock />
        <AssetsBlock />
      </div>
      <ToolboxBlock />
    </div>
  </div>
  <div class="bottom">
    <BottomWord position="left" text="v0.1.0" />
  </div>
</template>

<script>
import ObjectsBlock from './components/ObjectsBlock.vue';
import FrameEditingBlock from './components/FrameEditingBlock.vue';
import ObjectsAttributeBlock from './components/ObjectsAttributeBlock.vue';
import CanvasBlock from './components/CanvasBlock.vue';
import ToolboxBlock from './components/ToolboxBlock.vue';
import BottomWord from './components/BottomWord.vue';
import AssetsBlock from './components/AssetsBlock.vue';

export default {
  name: 'App',
  components: {
  ObjectsBlock,
    FrameEditingBlock,
    ObjectsAttributeBlock,
    CanvasBlock,
    ToolboxBlock,
    BottomWord,
    AssetsBlock
},
data() {
  return {
    objectsList: []
  }
}
}
</script>

<style>
.header {
  background-color: #4c4e4c;
  /* text-align: center; */
  /* padding: 80px; */
  height: 200px;
  margin-bottom: 1px;
  overflow-x: hidden;
  /* overflow-y: scroll; */
  position: fixed;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.bottom {
  height: 25px;
  width: 100%;
  background-color: #171717;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #5a5a5a;
  left: 0px;
}
</style>
