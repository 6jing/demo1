<template>
  <div>
    <a-tabs type="card" @change="callback">
    <a-tab-pane key="1" tab="结构域 (Structrue) 需求要素">

        <!-- 需要在data-source中导入自己所需要的数值 -->
        <div v-for="(item,name) in finalresult.slice(lengthFA+lengthFO,lengthS+lengthFA+lengthFO) " :key="name">
          <a-card :title="item.name">
            <a-row :gutter="[8,8]">

              <a-col :span="6">
                <a-card :title="data[0].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.S)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[2].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.FA)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[1].title"> 
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.FO)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[3].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.scene)"
                  ></From2>
                </a-card>
              </a-col>

            </a-row>
          </a-card>
        </div>
    </a-tab-pane>


    <a-tab-pane key="2" tab="功能域-行为(Function-Action) 需求要素">
        <div v-for="(item,name) in finalresult.slice(0,lengthFA) " :key="name">
          <a-card :title="item.name">
            <a-row :gutter="[8,8]">

              <a-col :span="6">
                <a-card :title="data[0].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.S)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[2].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.FA)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[1].title"> 
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.FO)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[3].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.scene)"
                  ></From2>
                </a-card>
              </a-col>

            </a-row>
          </a-card>
        </div>
    </a-tab-pane>


    <a-tab-pane key="3" tab="功能域-对象(Function-Object) 需求要素">
      <div v-for="(item,name) in finalresult.slice(lengthFA,lengthFA+lengthFO) " :key="name">        
        <a-card :title="item.name">
          <a-row :gutter="[8,8]">

              <a-col :span="6">
                <a-card :title="data[0].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.S)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[2].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.FA)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[1].title"> 
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.FO)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[3].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.scene)"
                  ></From2>
                </a-card>
              </a-col>

            </a-row>
        </a-card>
      </div>
    </a-tab-pane>


    <a-tab-pane key="4" tab="场景域 (scenario) 需求要素"> 
      <div v-for="(item,name) in finalresult.slice(lengthFA+lengthFO+lengthS,lengthS+lengthFA+lengthFO+lengthscene) " :key="name">
        <a-card :title="item.name">
          <a-row :gutter="[8,8]">

              <a-col :span="6">
                <a-card :title="data[0].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.S)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[1].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.FA)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[2].title"> 
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.FO)"
                  ></From2>
                </a-card>
              </a-col>

              <a-col :span="6">
                <a-card :title="data[3].title">
                  <From2
                  :dataFromFormDrawer="dataToFromStyle2(item.value.scene)"
                  ></From2>
                </a-card>
              </a-col>

            </a-row>
        </a-card>
      </div>
    </a-tab-pane>
  </a-tabs>
  </div>
</template>


<script>
import From2 from '@/components/From-style2.vue'



const data = [
  {
    title: '结构域 (Structrue) 需求要素',
  },
  {
    title: '功能域-行为(Function-Action) 需求要素',
  },
  {
    title: '功能域-对象(Function-Object) 需求要素',
  },
  {
    title: '场景域 ( scenario) 需求要素',
  },
];

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Similarity',
    dataIndex: 'Similarity',
    key: 'Similarity',
  },

];

const data1 = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {


  created(){
    //将传入的数据变成数组的结构
    var result =[]
    for(let k in this.graphsimdictfromassociation){
      result.push({
        name:k,
        value:this.graphsimdictfromassociation[k]
      })
    }
    this.finalresult = result

    var key = Object.keys(this.graphsimdictfromassociation)
    this.finalresultkey=key

    var keyS = Object.keys(this.resultFromAssociation.S)
    this.lengthS = keyS.length

    var keyFA = Object.keys(this.resultFromAssociation.FA)
    this.lengthFA = keyFA.length

    var keyFO = Object.keys(this.resultFromAssociation.FO)
    this.lengthFO = keyFO.length

    var keyscene = Object.keys(this.resultFromAssociation.scene)
    this.lengthscene = keyscene.length
  },

  watch:{
    init(newVal){

      if(!newVal){
        this.lengthscene=0
        this.lengthFO=0
        this.lengthFA=0
        this.lengthS=0
        this.finalresult=''
        this.finalresultkey=''
      }

      if(newVal){
        var result =[]
        for(let k in this.graphsimdictfromassociation){
        result.push({
          name:k,
          value:this.graphsimdictfromassociation[k]
        })
        }
        this.finalresult = result

        var key = Object.keys(this.graphsimdictfromassociation)
        this.finalresultkey=key

        var keyS = Object.keys(this.resultFromAssociation.S)
        this.lengthS = keyS.length

        var keyFA = Object.keys(this.resultFromAssociation.FA)
        this.lengthFA = keyFA.length

        var keyFO = Object.keys(this.resultFromAssociation.FO)
        this.lengthFO = keyFO.length

        var keyscene = Object.keys(this.resultFromAssociation.scene)
        this.lengthscene = keyscene.length
      }
    }
  },

  props:[
    'resultFromAssociation',
    'graphsimdictfromassociation',
    'init'
    ],


  data() {
    return {
      visible: false,
      placement: 'bottom',
      data,
      importantdata:'',
      columns,
      data1,
      finalresult:'',
      lengthS:'',
      lengthFA:'',
      lengthFO:'',
      lengthscene:'',
      finalresultkey:''
    };
  },

  components:{
    From2
  },


  methods:{
    //获取所有被选择的属性并将这些属性保存为固定的格式，并返回

    //将格式化后的数据提交，并返回对应的数据，对页面进行渲染

    callback(key) {
      console.log(key);
    },

    show(){
      
      console.log(this.finalresult)
      
    },

    dataToFromStyle2(e){
      let r = 1
      let emptyblock = []
      for(let key in e){
        emptyblock.push({
          key: r,
          name: key,
          Similarity: e[key]
        })
        r++
      }
      return emptyblock
    }
    
  }
};
</script>
