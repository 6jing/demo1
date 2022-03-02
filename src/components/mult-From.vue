<template>

  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="$store.state.data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        {{messagefromS}}
        
        <From1
        :datasource = "FormatData(item.abbreviation)"
        ></From1>

      </a-card>
 
    </a-list-item>
  </a-list>

</template>

<script>
import From1 from '@/components/From-style1.vue'



export default {

  created:function(){
    this.emptyObject=this.data
  },

  
  watch:{
    data(newVal){
      this.emptyObject=newVal
      console.log('数据更新了！')
    }  
  },

  props:[
    'data'
    
  ],

  data(){
    return{
      message: '来了',

      emptyObject:'',

      messagefromS:''
    }
  },

  components:{
    From1
  },

  methods:{

    getnewmessage(val){
      this.messagefromS = val
    },
  
    FormatData(e) {
      var resultitem = this.emptyObject[e]
      console.log(resultitem)
      return resultitem
    }
  }
}
</script>