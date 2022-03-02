<template>
  <div>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="$store.state.data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        <From 
          :id="item.id" 
          :DataSource = item.result
          :count = item.count>
          </From>
      </a-card>
    </a-list-item>
  </a-list>

  <a-button type="primary" @click="association">核心要素分析</a-button>
  <hr>
  <div>
    <a-tabs type="card" >

      <a-tab-pane key="1" tab="结构域 (Structrue) 需求要素">
        <div v-for="item in data[0].result" :key="item.key">
          <a-card :title="item.name">
            
            <MultFrom
            :data = "formatData(item.name)"
            ></MultFrom>
          </a-card>
        </div>
      </a-tab-pane>


      <a-tab-pane key="2" tab="功能域-行为(Function-Action) 需求要素">
        <div v-for="item in data[1].result" :key="item.key">
          <a-card :title="item.name">
            
            <MultFrom
            :data = "formatData(item.name)"
            ></MultFrom>
          </a-card>
        </div>
      </a-tab-pane>

      <a-tab-pane key="3" tab="功能域-对象(Function-Object) 需求要素">
        <div v-for="item in data[2].result" :key="item.key">
          <a-card :title="item.name">
            
            <MultFrom
            :data = "formatData(item.name)"
            ></MultFrom>
          </a-card>
        </div>
      </a-tab-pane>

      <a-tab-pane key="4" tab="场景域 (scene) 需求要素">
        <div v-for="item in data[3].result" :key="item.key">
          <a-card :title="item.name">
            
            <MultFrom
            :data = "formatData(item.name)"
            ></MultFrom>
          </a-card>
        </div>
      </a-tab-pane>
  </a-tabs>
  </div>
  </div>
</template>

<script>
import From from '@/components/From-style.vue';
import MultFrom from '@/components/mult-From.vue'
import {mapGetters,mapState} from 'vuex'





export default {

  
  data() {
    return {
      //传送给Menu的数据
      semantic_sim_dict:'',

      message:'来了',

      description:'',

      //访问api后传回的数据
      semantic_sim_dict1 : {
      '上下料': 
      {'FA':
        {'上下料': 1.0,
        '下料': 0.9897,
        '上料': 0.988,
        '混料': 0.98,
        '均料': 0.979},
      'FO':
        {'上下料': 1.0,
        '下料': 0.9897,
        '上料': 0.988,
        '带料': 0.9814,
        '下料板': 0.98},
      'S':
        {'上下料': 1.0,
        '上下料结': 0.991,
        '上下料口': 0.9893,
        '上下料门': 0.9893,
        '上料': 0.988},
      'scene':
        {}
      },

      '纸盒': 
      {'FA': 
        {'引纸': 0.982,
        '贴纸': 0.981,
        '膜袋': 0.9795,
        '夹纸': 0.979,
        '供纸': 0.979},
      'FO': 
        {'纸盒': 1.0,
        '纸箱': 0.987,
        '纸袋': 0.985,
        '瓦楞纸箱': 0.984,
        '楞纸箱': 0.983},
      'S': 
        {'纸盒': 1.0,
        '放纸盒': 0.994,
        '异形纸盒': 0.9937,
        '碎纸盒': 0.993,
        '卷纸盒': 0.9927},
      'scene':
        {}
      },

      '机械手': 
      {'FA': 
        {'移动机器人': 0.984,
        '手持': 0.9717,
        '夹具': 0.971,
        '握持': 0.9697,
        '配送机器人': 0.9688},
      'FO': 
        {'机械手': 1.0,
        '机械臂': 0.992,
        '机械': 0.9897,
        '机械手组件': 0.9893,
        '软体机器人': 0.9893},
      'S': 
        {'机械手': 1.0,
        '式机械手': 0.997,
        '机械手辅机': 0.9966,
        '料机械手': 0.9966,
        '联机械手': 0.9966},
      'scene':
          {}
        }
      }
    };
  },

  computed:{
    ...mapGetters(['fromDataSource']),
    ...mapState(['data']),
  },

  components:{
    From,
    MultFrom,
  },

  methods:{

    //访问接口，传递修改后的数值
    async association(){
      const {data: res} = await this.$http.post('/api/post', this.fromDataSource)
      console.log(res)
      this.semantic_sim_dict = this.semantic_sim_dict1
      console.log(this.semantic_sim_dict)
    },

    formatData(e) {
      var resultitems = new Object()
      resultitems = this.semantic_sim_dict[e]
      console.log(resultitems)
      return resultitems
    }

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

card{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>