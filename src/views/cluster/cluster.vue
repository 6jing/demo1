<template>
  <div>
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source = "$store.state.data1">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        <!-- 将得到的数据传送给from模块，将from模块中的数据回调给result -->
          <Cluster-From 
          :id = item.id
          :DataSource = item.result
          :count = item.count
          >
          </Cluster-From>
      </a-card>
    </a-list-item>
  </a-list>
  <div>
    <a-row type="flex">
      <a-col :span="8" :order="3">
        <div>
        匹配模式：
          <a-select
          showSearch
          allowClear
          optionFilterProp="children"
          placeholder="选择匹配模式"
          style="width: 120px; margin-right: 16px;margin-top:10px"
          v-model="query_mode">
            <a-select-option v-for="item in options" :key="item.code" :value="item.id" >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </div>
      </a-col>
      <a-col :span="8" :order="2">
        <div>
          设置簇类：
          <a-input 
            placeholder="设置簇类"
            style="width: 120px; margin-right: 16px;margin-top:10px"
            v-model="cluster_num">
          </a-input>
        </div>
      </a-col>
      <a-col :span="8" :order="1">
        <div>
    相似度阈值：
    <a-input 
      placeholder="设置区间0-1"
      style="width: 120px; margin-right: 16px;margin-top:10px"
      v-model="sim_threould">
    </a-input>
  </div>
      </a-col>
    </a-row>
  </div>
  <div>
    <a-button 
      type="primary" 
      @click="getClusterResult"
      style="margin-top:30px;margin-bottom:30px">聚类分析提交</a-button>
  </div>
  <hr/>
  <div>
    <a-tabs 
      default-active-key="1"
      :tab-position="mode"
      @prevClick="callback"
      @nextClick="callback">
      <a-tab-pane v-for="(value,key,index) in serialToName" :key="index+1" :tab="`第-${index}-簇`">
         <div >
          <a-table :columns="columns" :data-source="value">
            <a slot="name" slot-scope="text" @click="() => getDetail(text)">{{ text }}</a>
          </a-table>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
  </div>
</template>

<script>
import ClusterFrom from './components/cluster-from.vue';
export default {
  name:"a-cluster",
  components:{ClusterFrom},
  data(){
    return{
      fromDate: [{
                id: 0,
                title: '结构域 (Structrue) 需求要素',
                abbreviation: "S",
                result: [],
                // 数据的条数
                count: 0
            },
            {
                id: 1,
                title: '功能域-行为(Function-Action)  需求要素',
                abbreviation: "FA",
                result: [],
                count: 0
            },
            {
                id: 2,
                title: '功能域-对象(Function-Object)  需求要素',
                abbreviation: "FO",
                result: [],
                count: 0,
            },
            {
                id: 3,
                title: '场景域 (scenario) 需求要素',
                abbreviation: "scene",
                result: [],
                //数据的条数
                count: 0
            },
      ],
      options :[{
            name: '功能匹配',
            id: 0,
            spell: 'beijing',
            simpleSpell: 'bj'
          },
          {
            name: '严格匹配',
            id: 1,
            spell: 'shanghai',
            simpleSpell: 'sh'
          },
          {
            name: '模糊匹配',
            id: 2,
            spell: 'guangdong',
            simpleSpell: 'gd'
          },
      ],
      columns :[
  {
    title: '解决方案编号(电机查看详情)',
    dataIndex: 'number',
    key: 'number',
    scopedSlots: { customRender: 'number' },
  },
  {
    title: '解决方案名称',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
  },
  // {
  //   title: '所属簇',
  //   dataIndex: 'address',
  //   key: 'address',
  //   ellipsis: true,
  //     }
  ],
      data : [{
    key: '1',
    name: 'P-106256445',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'P-106256446',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'P-106256447',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
      }],
      query_mode:'',
      sim_threould:'',
      cluster_num:'',
      mode: 'top',
      //返还给表格的数据
      returndata:{
        0:['P1','P2','P3','P4'],
        1:['P5','P6','P7','P8'],
        2:['P9','P10'],
      },
      activeKey:'1',
      serialToName:'',
      res1 : {
        'data1': {"0": ["P-108140759", "P-111537186", "P-111426414", "P-105673191", "P-108534946", "P-110370798", "P-109416148", "P-109357807", "P-107361465", "P-109162677", "P-105910734", "P-105988452", "P-108620223", "P-109623662", "P-110469598", "P-109702710", "P-110440088", "P-109774229", "P-110307388", "P-109786422", "P-108240888", "P-108138755", "P-109083634", "P-107966226", "P-107031311", "P-109811615", "P-110123271", "P-109883603", "P-109186818", "P-108182012", "P-110107719", "P-110044578", "P-110145462", "P-109374157", "P-109269719", "P-109563821", "P-107271098", "P-110027511", "P-107614962", "P-109073485", "P-106908191", "P-108519275", "P-110410115", "P-108827791", "P-110507961"], "1": ["P-110605795", "P-109612115", "P-109591348"], "2": ["P-110993381", "P-109687310"]},
        'data2': {"P-108692078": "\\u7528\\u4e8e\\u58f3\\u4f53\\u7684\\u538b\\u529b\\u5e73\\u8861\\u88c5\\u7f6e", "P-107526462": "\\u538b\\u529b\\u89e6\\u63a7\\u611f\\u6d4b\\u88c5\\u7f6e", "P-107063534": "\\u7528\\u4e8e\\u76d1\\u89c6\\u6280\\u672f\\u8bbe\\u5907\\u7684\\u538b\\u529b\\u654f\\u611f\\u5b89\\u5168\\u88c5\\u7f6e", "P-109253835": "\\u4e00\\u79cd\\u7ebf\\u5217\\u9635\\u7528\\u73af\\u5883\\u538b\\u529b\\u7cbe\\u786e\\u6d4b\\u91cf\\u88c5\\u7f6e\\u53ca\\u65b9\\u6cd5", "P-107817168": "\\u6df7\\u51dd\\u571f\\u6a21\\u677f\\u4fa7\\u538b\\u529b\\u7684\\u6298\\u51cf\\u7cfb\\u6570\\u6d4b\\u91cf\\u88c5\\u7f6e\\u53ca\\u6d4b\\u91cf\\u65b9\\u6cd5", "P-109741988": "\\u538b\\u529b\\u5bb9\\u5668\\u9632\\u7206\\u6cc4\\u538b\\u88c5\\u7f6e\\u53ca\\u5145\\u6c14\\u5f00\\u5173\\u8bbe\\u5907", "P-107045397": "\\u538b\\u529b\\u4f20\\u611f\\u88c5\\u7f6e\\u53ca\\u5176\\u5236\\u9020\\u65b9\\u6cd5", "P-109649045": "\\u4e00\\u79cd\\u6709\\u6548\\u7f13\\u89e3\\u538b\\u529b\\u7684\\u521d\\u4e2d\\u5b66\\u751f\\u7528\\u6d82\\u5361\\u7b14", "P-108843476": "\\u4e00\\u79cd\\u53d1\\u52a8\\u673a\\u71c3\\u6cb9\\u55b7\\u5c04\\u7cfb\\u7edf\\u55b7\\u5b54\\u538b\\u529b\\u7684\\u6d4b\\u91cf\\u88c5\\u7f6e", "P-108304124": "\\u538b\\u529b\\u89e6\\u63a7\\u611f\\u5e94\\u7ec8\\u7aef\\u3001\\u538b\\u529b\\u89e6\\u63a7\\u611f\\u5e94\\u65b9\\u6cd5\\u53ca\\u88c5\\u7f6e\\u3001\\u7535\\u5b50\\u8bbe\\u5907", "P-109724733": "\\u4e00\\u79cd\\u9002\\u7528\\u4e8e\\u52a8\\u7206\\u573a\\u51b2\\u51fb\\u6ce2\\u538b\\u529b\\u6d4b\\u91cf\\u7684\\u6a21\\u5757\\u5316\\u7684\\u6548\\u5e94\\u9776\\u88c5\\u7f6e", "P-106256445": "\\u538b\\u529b\\u8c03\\u8282\\u5668\\u3001\\u76f8\\u5173\\u7cfb\\u5217\\u7684\\u538b\\u529b\\u8c03\\u8282\\u5668\\u4ee5\\u53ca\\u55b7\\u96fe\\u7cfb\\u7edf", "P-106404268": "\\u538b\\u529b\\u4f20\\u611f\\u5668\\u548c\\u5236\\u9020\\u8fd9\\u79cd\\u538b\\u529b\\u4f20\\u611f\\u5668\\u7684\\u65b9\\u6cd5", "P-111426414": "\\u4e00\\u79cd\\u5e26\\u4e0a\\u80f6\\u51f8\\u53f0\\u7684\\u538b\\u529b\\u53d8\\u9001\\u5668\\u5e95\\u5ea7", "P-109968729": "\\u4e00\\u79cd\\u7ea2\\u70b9\\u8f85\\u52a9\\u5b9a\\u4f4d\\u538b\\u529b\\u673a", "P-109644307": "\\u9ea6\\u514b\\u98ce\\u548c\\u538b\\u529b\\u4f20\\u611f\\u5668\\u5c01\\u88c5\\u4ef6\\u4ee5\\u53ca\\u5236\\u9020\\u9ea6\\u514b\\u98ce\\u548c\\u538b\\u529b\\u4f20\\u611f\\u5668\\u5c01\\u88c5\\u4ef6\\u7684\\u65b9\\u6cd5", "P-110053087": "\\u65cb\\u8f6c\\u6a21\\u5207\\u673a\\u8d34\\u5408\\u538b\\u529b\\u8c03\\u8282\\u88c5\\u7f6e\\u53ca\\u5176\\u8c03\\u8282\\u65b9\\u6cd5", "P-111537186": "\\u4e00\\u79cd\\u5185\\u5d4c\\u538b\\u529b\\u4f20\\u611f\\u5668\\u76f4\\u5347\\u673a\\u65cb\\u7ffc\\u6868\\u53f6\\u6a21\\u578b\\u53ca\\u5176\\u5236\\u4f5c\\u5de5\\u827a", "P-108778700": "\\u5305\\u542b\\u4e2d\\u95f4\\u533a\\u6bb5\\u4e0e\\u5916\\u526a\\u5207\\u5e26\\u73af\\u4e4b\\u95f4\\u7684\\u538b\\u529b\\u65bd\\u52a0\\u7684\\u5f62\\u6210\\u975e\\u5145\\u6c14\\u8f6e\\u80ce\\u7684\\u65b9\\u6cd5", "P-108488878": "\\u4e00\\u79cd\\u8c03\\u8282\\u4f9b\\u70ed\\u7ba1\\u9053\\u538b\\u529b\\u7684\\u7cfb\\u7edf\\u53ca\\u65b9\\u6cd5", "P-110243534": "\\u4e00\\u79cd\\u538b\\u529b\\u4f20\\u611f\\u5668\\u53ca\\u88c5\\u914d\\u65b9\\u6cd5", "P-108686752": "\\u538b\\u529b\\u53ef\\u63a7\\u5f0f\\u7834\\u788e\\u673a", "P-108801534": "\\u57fa\\u4e8e\\u963b\\u5c3c\\u654f\\u611f\\u7684\\u8c10\\u632f\\u5f0f\\u6c14\\u4f53\\u538b\\u529b\\u4f20\\u611f\\u5668", "P-106838397": "\\u5177\\u6709\\u53ef\\u53d8\\u5f0f\\u884c\\u7a0b\\u505c\\u6b62\\u4ef6\\u7684\\u538b\\u529b\\u8c03\\u8282\\u8bbe\\u5907", "P-110065258": "\\u74e6\\u695e\\u7eb8\\u7bb1\\u53ca\\u7eb8\\u76d2\\u538b\\u7ebf\\u538b\\u529b\\u6d4b\\u91cf\\u4eea", "P-106950006": "\\u4e00\\u79cd\\u6d4b\\u91cf\\u4f4e\\u901f\\u4e09\\u7ef4\\u975e\\u5b9a\\u5e38\\u6d41\\u7684\\u534a\\u7403\\u5934\\u56db\\u5b54\\u52a8\\u6001\\u538b\\u529b\\u63a2\\u9488", "P-111156058": "\\u4e00\\u79cd\\u56de\\u70ed\\u6c7d\\u8f6e\\u673a\\u8fd0\\u884c\\u538b\\u529b\\u63a7\\u5236\\u65b9\\u6cd5", "P-108348714": "\\u9488\\u5bf9\\u65e0\\u521b\\u901a\\u6c14\\u7684\\u538b\\u529b\\u548c\\u6c14\\u4f53\\u6df7\\u5408\\u63a7\\u5236\\u7684\\u65b9\\u6cd5", "P-106950003": "\\u4e00\\u79cd\\u6d4b\\u91cf\\u8f6c\\u5b50\\u51fa\\u53e3\\u8de8\\u97f3\\u4e09\\u7ef4\\u6d41\\u573a\\u7684\\u5706\\u9525\\u5355\\u5b54\\u52a8\\u6001\\u538b\\u529b\\u63a2\\u9488", "P-110027511": "\\u73bb\\u7483\\u591a\\u4f4d\\u7f6e\\u538b\\u529b\\u611f\\u5e94\\u5e73\\u53f0", "P-109141716": "\\u4e00\\u79cd\\u7efc\\u5408\\u7ba1\\u5eca\\u5927\\u65ad\\u9762\\u77e9\\u5f62\\u9876\\u7ba1\\u65bd\\u5de5\\u7ba1\\u571f\\u63a5\\u89e6\\u538b\\u529b\\u6d4b\\u8bd5\\u65b9\\u6cd5", "P-109332544": "\\u4e00\\u79cd\\u538b\\u529b\\u53ef\\u8c03\\u5fae\\u5c0f\\u578b\\u91d1\\u5c5e\\u87ba\\u65cb\\u5377\\u6210\\u578b\\u88c5\\u7f6e", "P-110640006": "\\u5e26\\u6709\\u5b89\\u5168\\u7cfb\\u7edf\\u7684\\u591a\\u5de5\\u4f4d\\u538b\\u529b\\u673a", "P-110993381": "\\u7528\\u4e8e\\u7535\\u78c1\\u65a5\\u529b\\u673a\\u6784\\u80fd\\u81ea\\u52a8\\u6cc4\\u538b\\u7684\\u6c14\\u4f53\\u7f13\\u51b2\\u7ed3\\u6784\\u53ca\\u5de5\\u4f5c\\u65b9\\u6cd5", "P-108458829": "\\u9759\\u7535\\u7535\\u5bb9\\u578b\\u538b\\u529b\\u4f20\\u611f\\u5668", "P-108160009": "\\u4e00\\u79cd\\u81ea\\u5e73\\u8861\\u886c\\u7ba1\\u5185\\u5916\\u538b\\u529b\\u7684\\u53cd\\u5e94\\u5668\\u53ca\\u4f7f\\u7528\\u65b9\\u6cd5", "P-109417259": "\\u7535\\u5237\\u538b\\u529b\\u667a\\u80fd\\u63a7\\u5236\\u7cfb\\u7edf\\u4e0e\\u7535\\u5237\\u538b\\u529b\\u63a7\\u5236\\u7cfb\\u7edf", "P-107757136": "\\u70ed\\u654f\\u6253\\u5370\\u5934\\u7684\\u5bb9\\u6613\\u66f4\\u6362\\u548c\\u5bf9\\u6253\\u5370\\u538b\\u529b\\u7684\\u7b80\\u5355\\u8c03\\u8282", "P-108612835": "\\u4e00\\u79cd\\u5177\\u6709\\u6cc4\\u538b\\u529f\\u80fd\\u7684\\u4f20\\u52a8\\u7bb1\\u58f3\\u4f53", "P-110307388": "\\u76ee\\u6807\\u5f00\\u5ea6\\u63a8\\u65ad\\u5668\\u4ee5\\u53ca\\u538b\\u529b\\u8c03\\u6574\\u771f\\u7a7a\\u9600", "P-109612115": "\\u71c3\\u6c14\\u70ed\\u6c34\\u5668\\u548c\\u58c1\\u6302\\u7089\\u81ea\\u9002\\u5e94\\u70df\\u9053\\u538b\\u529b\\u53d8\\u5316\\u7684\\u63a7\\u5236\\u65b9\\u6cd5", "P-110107719": "\\u4e00\\u79cd\\u538b\\u529b\\u63a7\\u5236\\u9600", "P-110932486": "\\u4e00\\u79cd\\u4fdd\\u6301\\u538b\\u529b\\u6052\\u5b9a\\u7684\\u78b3\\u5237\\u88c5\\u7f6e\\u53ca\\u63a7\\u5236\\u65b9\\u6cd5", "P-108972968": "\\u5177\\u6709\\u6cc4\\u538b\\u529f\\u80fd\\u7684\\u751f\\u4ea7\\u6a21\\u5177", "P-111786000": "\\u4e00\\u79cd\\u538b\\u529b\\u5747\\u8861\\u7684\\u9632\\u584c\\u8170\\u71c3\\u6599\\u7535\\u6c60", "P-109070866": "\\u6db2\\u538b\\u7cfb\\u7edf\\u7684\\u538b\\u529b\\u8109\\u52a8\\u964d\\u4f4e\\u88c5\\u7f6e\\u53ca\\u8109\\u52a8\\u8870\\u51cf\\u6784\\u4ef6", "P-107727310": "\\u7b49\\u79bb\\u5b50\\u4f53\\u538b\\u529b\\u4f20\\u611f\\u5668\\u53ca\\u7b49\\u79bb\\u5b50\\u4f53\\u538b\\u529b\\u4f20\\u611f\\u7cfb\\u7edf", "P-107010154": "\\u4e00\\u79cd\\u538b\\u529b\\u4f20\\u611f\\u5668\\u63a7\\u5236\\u7684\\u52a9\\u884c\\u5668", "P-110918283": "\\u4f4e\\u538b\\u53cc\\u6d41\\u4f53\\u7ec6\\u6c34\\u96fe\\u55b7\\u5634\\u538b\\u529b\\u5b9e\\u65f6\\u63a7\\u5236\\u7cfb\\u7edf", "P-109186818": "\\u4e00\\u79cd\\u7528\\u4e8e\\u538b\\u529b\\u5bb9\\u5668\\u7684\\u975e\\u63a5\\u89e6\\u3001\\u975e\\u4fb5\\u5165\\u5f0f\\u538b\\u529b\\u6d4b\\u91cf\\u65b9\\u6cd5"}
      }
  }
  },
  methods:{
    /* eslint-disable */
    callback(val) {
      console.log(val);
    },

    getDetail(key){
      alert(key)
    },

    async getClusterResult(){
      let emptyresult = {}
      emptyresult.FA = this.format(this.$store.state.data1[1].result)
      emptyresult.FO = this.format(this.$store.state.data1[2].result)
      emptyresult.S = this.format(this.$store.state.data1[0].result)
      emptyresult.scene = this.format(this.$store.state.data1[3].result)
      emptyresult.query_mode = this.query_mode
      emptyresult.sim_threould = Number( this.sim_threould)
      emptyresult.cluster_num = Number( this.cluster_num)
      console.log(emptyresult)
      // 输入访问的地址
      // const path = ''
      // this.$http.post(path,{'result': emptyresult})
      //   .then((res) => {
      //     var emptyrequest = {}
      //     serialNumber = res.data1
      //     serialName = res.data2
      //     for(let i in serialNumber){
      //       var temp = []
      //       for (let j in serialNumber[i]){
      //         var result = {}
      //         var key = j
      //         result.name = serialName[key] 
      //         result.serial = j
      //         temp.push(result)
      //       }
      //       emptyrequest[i] = temp
      //     }
      //   })
      //   .catch((error) => {
      //     // eslint-disable-next-line
      //     console.error(error);
      //   });
      const path = '/struct_patent_rec'
      this.$http.post(path,emptyresult)
      .then((res) => {
        var emptyrequest = {}
        var serialNumber = res.data.data1
        var serialName = res.data.data2
        for (let i in serialNumber) {
          console.log(serialNumber[i])
            var temp = []
            for (let j in serialNumber[i]) {
              var empty = {}
              var number1 = serialNumber[i][j]
              empty.name = serialName[number1]
              empty.number = number1
              temp.push(empty)
            }
            console.log(temp)
            emptyrequest[i] = temp
        }
        console.log(emptyrequest)
        this.serialToName = emptyrequest
      })
    },

    format(data){
      let empty = []
      data.forEach(item => {
        empty.push(item.name)
      });
      return empty
    },

    callback(key) {
      console.log(key);
    },
  }
}
</script>

<style lang='css' scoped>
div {
  text-align: center;
}
</style>