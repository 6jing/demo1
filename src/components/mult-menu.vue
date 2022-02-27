<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item class="item" key="Function-Action"> 功能域-行为(Function-Action) 需求要素 </a-menu-item>
      <a-menu-item class="item" key="Function-Object" > 功能域-对象(Function-Object) 需求要素 </a-menu-item>
      <a-menu-item class="item" key="Structrue" > 结构域 (Structrue) 需求要素 </a-menu-item>
      <a-menu-item class="item" key="scene" > 场景域 (scene) 需求要素 </a-menu-item>

    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
    };
  },
};
</script>
<style scoped>
.item{
  margin: 0 40px 0px 40px;
}
</style>
