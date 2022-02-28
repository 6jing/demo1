<template>
  <div>{{this.$store.state.data}}
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="$store.state.data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        <From 
          :id="item.id" 
          :DataSource="item.result">
          </From>
      </a-card>
    </a-list-item>
  </a-list>

  <hr>
  <Menu></Menu>

  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        <From1></From1>
      </a-card>
    </a-list-item>
  </a-list>

  </div>
</template>

<script>
import From from '@/components/From-style.vue';
import From1 from '@/components/From-style1.vue'
import Menu from '@/components/mult-menu.vue'
import bus from './eventBus.js'

const data = [
  {
    id:0,
    title: '功能域-行为(Function-Action)  需求要素',
    result:''
  },
  {
    id:1,
    title: '功能域-对象(Function-Object)  需求要素',
    result:''
  },
  {
    id:2,
    title: '结构域 (Structrue) 需求要素',
    result:''
  },
  {
    id:3,
    title: '场景域 (scene) 需求要素',
    result:''
  }
];
export default {
  data() {
    return {
      data,
      data1:''
    };
  },

  created() {
    bus.$on('shareAnalysisResult', val => {
      this.data1=val
      console.log(val)
    })
  },

  components:{
    From,
    From1,
    Menu
  }
}
</script>
<style scoped>
div {
  text-align: center;
}

hr{
  margin-bottom: 30px;
}

</style>