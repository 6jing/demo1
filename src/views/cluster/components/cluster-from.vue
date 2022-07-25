<template>
  <div>
    <a-button class="editable-add-btn" @click="handleAdd">
      Add
    </a-button>
    <a-table bordered :data-source="DataSource" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="DataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
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

  props:['id','DataSource','count'],

  computed:{
    ...mapGetters(['fromDataSource'])
  },

  components: {
    EditableCell,
  },
  data() {
    return {
      

      columns: [
        {
          title: 'name',
          dataIndex: 'name',
          width: '60%',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
    };
  },


  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.$store.state.data1[this.id].result];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.$store.state.data1[this.id].result = dataSource;
      }
    },


    onDelete(key) {
      const dataSource = [...this.$store.state.data1[this.id].result];
      this.$store.state.data1[this.id].result = dataSource.filter(item => item.key !== key);
      this.$store.state.data1[this.id].count = this.$store.state.data1[this.id].count - 1;
    },


    //1.全局的counter+1
    handleAdd() {
      const  count = this.$store.state.data1[this.id].count;
      const dataSource = this.$store.state.data1[this.id].result
      const newData = {
        key: count,
        name: ``,
      };
      this.$store.state.data1[this.id].result = [...dataSource, newData];
      this.$store.state.data1[this.id].count = this.$store.state.data1[this.id].count + 1;
      console.log(this.id)
    },
  },
};
</script>
<style>
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
  right: 0;
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
