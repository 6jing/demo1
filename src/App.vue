<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to='/analysis' style="color:white"><span>个性化需求解析</span></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <span><router-link to='/association' style="color:white">需求要素语义分析</router-link></span>
        </a-menu-item>
        <a-menu-item key="3">
          <span><router-link to='/cluster' style="color:white">结构与解决方案检索</router-link></span>
        </a-menu-item>
        <a-menu-item key="4">
          <span><router-link to='/intrudction' style="color:white">工具使用说明</router-link></span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >

      
      
      
      <router-view></router-view>

      

        
        

        
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>


<script>
export default {
  data() {
    return {
      collapsed: false,
      
    };
  },

  components:{
    
  },
};
</script>


<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

link{
  display: inline-block;
}
</style>






