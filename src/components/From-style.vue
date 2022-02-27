<template>
  <div>
    <!-- 添加按钮 -->
    <a-table class="table-style" bordered :data-source="dataSource" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>
      <template slot="operation" slot-scope="text, record">

        <!-- 弹出询问是否需要删除 -->
        <a-popconfirm
          v-if="dataSource.length"
          title="是否确定删除?"
          @confirm="() => onDelete(record.key)"
        >

        <!-- 删除的按钮 -->
          <a href="javascript:;">删除</a>
        </a-popconfirm>

      </template>
    </a-table>

    <a-button class="editable-add-btn" @click="handleAdd">
      添加需求要素
    </a-button>
  </div>


</template>


<script>

// 创建了一个新的vue模块
const EditableCell = {
  template: `
      <!-- 数据+确定按钮 -->
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>

        <!-- 数据+编辑按钮 -->
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String,
  },
  data() {
    return {
      value: this.text,
      editable: false,
    };
  },
  methods: {

    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit('change', this.value);
    },
    edit() {
      this.editable = true;
    },
  },
};


export default {

  // 监听数据的变化
  watch:{
    async DataSource(newVal){
      if(newVal==='') return
      for(var j = 0,len=newVal.length; j < len; j++) {
        let data ={}
        data.name=newVal[j]
        data.key=j
        this.dataSource.push(data)
        console.log(this.dataSource)
      }
      this.count  = j + this.count
    },

  },

  props: [
    'DataSource',
    'id'
  ],

  
  components: {
    EditableCell,
  },

  data() {
    return {
      // 需要传送的数据
      dataSource: [],
      
      count : 0,
      columns: [
        {
          title: '需求要素内容',
          dataIndex: 'name',
          width: '60%',
          scopedSlots: { customRender: 'name' },
        },

        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
      this.$emit('analysisChange',{id:this.id,value:this.dataSource})
    },

    //添加新数据的函数
    handleAdd() {
      const { count, dataSource } = this;

      //添加的数据
      const newData = {


        key: count,
        //添加的数据一开始为空
        name: ``,
        
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
      this.$emit('analysisChange',{id:this.id,value:this.dataSource})
    },

  },
};
</script>
<style scoped>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: -20px;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}


</style>
