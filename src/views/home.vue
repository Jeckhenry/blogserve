<template>
  <div class="home">
    <Spin fix size='large' v-show="loading">
        <loading></loading>
    </Spin>
    <div class="labelTitle">
      文章信息表
    </div>
    <div class="delBtn">
      <i-button type="info" @click="delCon=!delCon">删除</i-button>
      <i-button type="info" @click="goEdit">新增</i-button>
    </div>
    <div class="tab">
      <i-table
      border
      :columns="columns"
      :data="tabdata"
      @on-select="selectRow"
      @on-select-cancel="selectRow"
      @on-select-all="selectRow"
      @on-select-all-cancel="selectRow">
      </i-table>
    </div>
    <Modal v-model="delCon" draggable scrollable title="确认删除" @on-ok="delInfo">
        <div>您确定删除这条数据吗？</div>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data(){
    var self = this
    return {
      loading: false, //加载中
      columns: [{
        type: "selection",
        width: 60,
        align: "center"
      },{
        title: "文章名称",
        width: 200,
        align: "center",
        key: "articleTitle"
      },{
        title: "文章分类",
        width: 200,
        align: "center",
        key: "articleLabel"
      },{
        align: "center",
        title: "文章内容",
        key: "articleInfo"
      },{
        align: "center",
        title: "创建时间",
        width: 200,
        key: "subDate"
      },{
        title: "操作",
        align: "center",
        render(h,params){
          return h("div",
          [h("Button",{
            props:{
              type:"info",
              size: "small"
            },
            on: {
              click: ()=>{
                self.goEdit()
              }
            }
          },"编辑/查看")])
        }
      }], //表头
      tabdata: [],
      selectarr: [], //复选框数据
      delCon: false, //删除确认提示
    }
  },
  created:function(){
    this.initdata()
  },
  methods: {
    //初始化数据
    initdata(){
      this.loading = true
      this.remote({
        url: "/articleInfo",
        method: "get"
      })
      .then(res=>{
        this.loading = false;
        this.tabdata = res.data
      },err=>{
        this.loading = false;
      })
    },
    //选中事件
    selectRow(selection,row){
      this.selectarr = selection
    },
    //跳往新增页面
    goEdit(){
      this.$router.push({path: "/edit"})
    },
    //删除
    delInfo(){

    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  padding: 50px;
  .labelTitle{
    padding: 10px 0;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 700;
    border-bottom: 1px solid #ccc;
  }
  .delBtn{
    padding: 10px 0;
    button{
      margin: 0 20px 0 0;
    }
  }
}
</style>

