<template>
<div>
  <h2>个性需求分析</h2>
  <div>
    <a-textarea
      v-model="AnalysisContent"
      placeholder="再此处输入需要分析的内容"
      :auto-size="{ minRows: 5, maxRows: 10 }"
    ></a-textarea>
  </div>

  <!-- 提交后端进行分析 analysis-->
  <a-button type="primary" @click="analysis">需求要素分析</a-button>

  <hr/>

  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        <!-- 将得到的数据传送给from模块，将from模块中的数据回调给result -->
          <From 
          :id="item.id" 
          :DataSource="item.result" 
          @analysisChange="getnewanalysis"></From>
      </a-card>
    </a-list-item>
  </a-list>

  <a-button type="primary" >需求要素提交</a-button>
</div>

</template>

<script>
import From from '@/components/From-style.vue';

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
    id:4,
    title: '场景域 (scene) 需求要素',
    result:''
  },

];
export default {
  data() {
    return {
      data,
      AnalysisContent:'',
      result:{
        S: ['机械手', '机'],
        FA: ['上下料'],
        FO: ['纸盒'],
        scene: ['卧室']
        }
    };
  },
  components:{
    From,
  },

  methods:{

    //需求分析的接口
    async analysis(){
      let i = 0
      const {data: res} = await this.$http.post('/api/post', this.AnalysisContent)
      console.log(res)


      //需要将this.result，改为this.res，将接收到的信息放入到表格中（改）
      for(var key in this.result){
        this.data[i].result=this.result[key]
        i++
      }
      //  console.log(data)

    },

    //分析数据发生变化
    getnewanalysis(e){
      this.data.some(item =>{
        if(item.id === e.id){
          item.result=''
          item.result=e.value
        }
      })
    }

  }
}
</script>

<style lang="css" scoped>
div {
  text-align: center;
}

button {
  margin-top: 20px;
  margin-bottom: 20px;
}

hr {
  margin-bottom: 30px;
}
</style>