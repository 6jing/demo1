<template>
  <div>
    <a-table :row-selection="rowSelection" :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>
<script>


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];


const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '8',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '9',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '10',
    name: 'Joe Black',
    age: 32,
  },
];

export default {
  props:{

  },

  data() {
    return {
      visible: false,
      placement: 'bottom',
      data,
      columns,
      importantdata:''
    };
  },

  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
          },
        }),
      };
    },
  },

  methods:{
    //获取所有被选择的属性并将这些属性保存为固定的格式，并返回

    //将格式化后的数据提交，并返回对应的数据，对页面进行渲染

    showDrawer() {
      this.visible = true;
    },
    
    onClose() {
      this.visible = false;
    },

  }
};
</script>
