<template>
  <a-table  :columns="columns" :data-source="dataFromFormDrawer">
    
  </a-table>
</template>
<script>
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


export default {
  props:[
    'dataFromFormDrawer'
  ],
    

  data() {
    return {
      
      columns,
    };
  },
  computed: {
    
  },
};
</script>
