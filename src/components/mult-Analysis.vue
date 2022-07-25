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
          :id = item.id
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
        },
      msg: 'Hello Worl',
      msg1:'111111111'
    };
  },
  components:{
    From,
  },

  methods:{

    //需求分析的接口
    // async analysis(){
    //   const {data: res} = await this.$http.post('/api/post', this.AnalysisContent)
    //   console.log(res)
    //   console.log()

    //   let i = 0
    //   //需要将this.result，改为this.res，将接收到的信息放入到表格中（改）
    //   for(let n in this.result){
    //     let emptyresult =[]
    //     let emptyresult1 = res[n]
    //     this.$store.state.data[i].count=emptyresult1.length
    //     for (let mm = 0,len=emptyresult1.length;mm<len;mm++){
    //       let resultitem = {}
    //       resultitem.key = mm
    //       resultitem.name = emptyresult1[mm]
    //       emptyresult.push(resultitem)         
    //     }
    //     this.$store.state.data[i].result=emptyresult
    //     i++
    //   }
    //   // console.log(data)
    // },

    async analysis(){
      // const {data: res} = this.$http.get('http://10.101.14.91:5000/cn_ner')
      // console.log(res)
      console.log(this.AnalysisContent)
      const path = '/cn_ne';
      await this.$http.post(path,{'result': this.AnalysisContent})
        .then((res) => {
          let i = 0
           //需要将this.result，改为this.res，将接收到的信息放入到表格中（改）
          for(let n in res.data){

            if(n == 'S'){
              let emptyresult =[]
              let emptyresult1 = res.data[n]
              console.log(emptyresult1)
              this.$store.state.data[i].count=emptyresult1.length
              for (let mm = 0,len=emptyresult1.length;mm<len;mm++){
                let resultitem = {}
                resultitem.key = mm
                resultitem.name = emptyresult1[mm]
                emptyresult.push(resultitem)         
              }
              this.$store.state.data[0].result=emptyresult
            }

            if(n == 'FA'){
              let emptyresult =[]
              let emptyresult1 = res.data[n]
              console.log(emptyresult1)
              this.$store.state.data[i].count=emptyresult1.length
              for (let mm = 0,len=emptyresult1.length;mm<len;mm++){
                let resultitem = {}
                resultitem.key = mm
                resultitem.name = emptyresult1[mm]
                emptyresult.push(resultitem)         
              }
              this.$store.state.data[1].result=emptyresult
            }

            if(n == 'FO'){
              let emptyresult =[]
              let emptyresult1 = res.data[n]
              console.log(emptyresult1)
              this.$store.state.data[i].count=emptyresult1.length
              for (let mm = 0,len=emptyresult1.length;mm<len;mm++){
                let resultitem = {}
                resultitem.key = mm
                resultitem.name = emptyresult1[mm]
                emptyresult.push(resultitem)         
              }
              this.$store.state.data[2].result=emptyresult
            }

            if(n == 'scene'){
              let emptyresult =[]
              let emptyresult1 = res.data[n]
              console.log(emptyresult1)
              this.$store.state.data[i].count=emptyresult1.length
              for (let mm = 0,len=emptyresult1.length;mm<len;mm++){
                let resultitem = {}
                resultitem.key = mm
                resultitem.name = emptyresult1[mm]
                emptyresult.push(resultitem)         
              }
              this.$store.state.data[3].result=emptyresult
            }

            // console.log(n)
            // let emptyresult =[]
            // let emptyresult1 = res.data[n]
            // console.log(emptyresult1)
            // this.$store.state.data[i].count=emptyresult1.length
            // for (let mm = 0,len=emptyresult1.length;mm<len;mm++){
            //    let resultitem = {}
            //    resultitem.key = mm
            //    resultitem.name = emptyresult1[mm]
            //    emptyresult.push(resultitem)         
            // }
            // this.$store.state.data[i].result=emptyresult
            i++
          }
           // console.log(data)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });

      // let i = 0
      // //需要将this.result，改为this.res，将接收到的信息放入到表格中（改）
      // for(let n in this.result){
      //   let emptyresult =[]
      //   let emptyresult1 = res[n]
      //   this.$store.state.data[i].count=emptyresult1.length
      //   for (let mm = 0,len=emptyresult1.length;mm<len;mm++){
      //     let resultitem = {}
      //     resultitem.key = mm
      //     resultitem.name = emptyresult1[mm]
      //     emptyresult.push(resultitem)         
      //   }
      //   this.$store.state.data[i].result=emptyresult
      //   i++
      // }
      // // console.log(data)
    },

    async getMessage() {
      const path = '/cn_ner';
      await this.$http.get(path)
        .then((res) => {
          this.msg1 = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
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