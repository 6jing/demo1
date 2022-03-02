<template>
  <div>
    <div  ref="sure" style="display:none">
      <a-alert 
      message="Success"
      description="已经确定选取的需求要素"
      type="success"
      show-icon
    />
    </div>
    
    <a-table :row-selection="rowSelection" :columns="columns" :data-source="formatdata">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
     <a-button type="primary" @click="importantanalysis(),showDrawer()" >确定重要关键词</a-button>

     <a-drawer
      title="Basic Drawer"
      :placement="placement"
      :closable="false"
      :visible="visible"
      :height="500"
      @close="onClose"
    >
    <!-- 弹窗出现的内容 -->
            <a-list :grid="{ gutter: 16, column: 4 }" :data-source="$store.state.data">
                <a-list-item slot="renderItem" slot-scope="item">
                    <a-card :title="item.title">

                      <From2
                      ></From2>

                    </a-card>
                </a-list-item>
            </a-list>
    </a-drawer>
  </div>
</template>
<script>
import From2 from '@/components/From-drawer.vue'


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Similarity',
    dataIndex: 'Similarity',
  },
];


const data = [
  {
    key: '1',
    name: 'John Brown',
    Similarity: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    Similarity: 42,
  },
  {
    key: '3',
    name: 'Joe Black',
    Similarity: 32,
  },
  {
    key: '4',
    name: 'Joe Black',
    Similarity: 32,
  },
  {
    key: '5',
    name: 'Joe Black',
    Similarity: 32,
  },
  {
    key: '6',
    name: 'Joe Black',
    Similarity: 32,
  },
  {
    key: '7',
    name: 'Joe Black',
    Similarity: 32,
  },
  {
    key: '8',
    name: 'Joe Black',
    Similarity: 32,
  },
  {
    key: '9',
    name: 'Joe Black',
    Similarity: 32,
  },
  {
    key: '10',
    name: 'Joe Black',
    Similarity: 32,
  },
];

export default {

  // watch:{
  //   datasource(newVal){
  //      let emptyresult = []
  //      let h = 1
  //      for(let key in newVal){
  //        let empty = {}
  //        empty.key = h
  //        empty.name = key
  //        empty.Similarity = newVal[key]
  //        h++
  //        emptyresult.push(empty)
  //      }
  //     this.DataSource1 = newVal
  //     console.log("shujugaibi")
  //   }
  // },

  //外部传入的数据源
  props:[
    'datasource'
  ],

  data() {
    return {
      visible: false,
      placement: 'bottom',
      data,
      columns,
      DataSource1:'',
      SelectedRows:'',
      visab:'none'
    };
  },

  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          this.SelectedRows = selectedRows
           this.$refs.sure.style.display = "none"
          console.log(selectedRows)
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
          },
        }),
      };
    },

    formatdata(){
      let emptyresult = []
      let h = 1
      for(let key in this.datasource){
        let empty = {}
        empty.key = h
        empty.name = key
        empty.Similarity = this.datasource[key]
        h++
        emptyresult.push(empty)
      }
      return emptyresult
    }
  },

  components:{
    From2
  },

  methods:{
    //将格式化后的数据提交，并返回对应的数据，对页面进行渲染
    async importantanalysis() {
      const {data: res} = await this.$http.post('/api/post',this.visible)
      console.log(res)
    },

    showDrawer() {
      let reult = ''
      reult = this.SelectedRows
      this.$refs.sure.style.display = "block"
      console.log(reult)
    },

    onClose() {
      this.visible = false;
    },

  }
};
</script>
