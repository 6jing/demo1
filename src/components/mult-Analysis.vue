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

  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="$store.state.data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        <!-- 将得到的数据传送给from模块，将from模块中的数据回调给result -->
          <From 
          :id =item.id
          :DataSource = item.result
          :count = item.count
          >
          </From>
      </a-card>
    </a-list-item>
  </a-list>

  <a-button type="primary" @click="gotoAssociation">核心要素提交</a-button>
</div>

</template>

<script>
import From from '@/components/From-style.vue';


export default {

  data() {
    return {
      AnalysisContent:'',
      result:{
        S: ['机械手'],
        FA: ['上下料'],
        FO: ['纸盒'],
        scene: []
        }
    };
  },
  components:{
    From,
  },

  methods:{

    //需求分析的接口
    async analysis(){
      const {data: res} = await this.$http.post('/api/post', this.AnalysisContent)
      console.log(res)

      let i = 0
      //需要将this.result，改为this.res，将接收到的信息放入到表格中（改）
      for(let n in this.result){
        let emptyresult =[]
        let emptyresult1 = this.result[n]
        this.$store.state.data[i].count=emptyresult1.length
        for (let mm = 0,len=emptyresult1.length;mm<len;mm++){
          let resultitem = {}
          resultitem.key = mm
          resultitem.name = emptyresult1[mm]
          emptyresult.push(resultitem)         
        }
        this.$store.state.data[i].result=emptyresult
        i++
      }


      // console.log(data)

    },


    //转跳到Association页面
    gotoAssociation(){
      this.$router.push('/association')
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