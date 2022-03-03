<template>

  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="$store.state.data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        
        
        <From1
        :datasource = "FormatData(item.abbreviation)"
        :id = item.abbreviation
        @shareid="getidfromfrom"
        @sharedselection="getnewmessage"
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

  updated:function(){
    if(this.idfrom){
      this.emptyfroms[this.idfrom]=this.messagefromS
      console.log(this.emptyfroms)
    }
  },

  computed:{

  },

  watch:{
    data(newVal){
      this.emptyObject=newVal
      console.log('数据更新了！')
    },
    
    messagefromS(newVal){
      this.messagefromS = newVal
      this.emptyfroms[this.idfrom]=this.messagefromS
      console.log('变化了')
      console.log(this.idfrom)
      console.log(this.emptyfroms)
      this.$emit('choseresult',this.emptyfroms)
    }
    
  },

  props:[
    'data'
    
  ],

  data(){
    return{
      message: '来了',

      emptyObject:'',

      messagefromS:'',

      emptyfroms:{},

      idfrom:''
    }
  },

  components:{
    From1
  },

  methods:{

    getnewmessage(val){
      this.messagefromS = val
    },

    getidfromfrom(val){
      this.idfrom = val
    },

  
    FormatData(e) {
      var resultitem = this.emptyObject[e]
      console.log(resultitem)
      return resultitem
    }
  }
}
</script>