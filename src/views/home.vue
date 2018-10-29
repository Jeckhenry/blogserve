<template>
  <div class="home">
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
      columns: [{
        type: "selection",
        width: 60,
        align: "center"
      },{
        title: "文章名称",
        width: 200,
        align: "center",
        key: "name"
      },{
        title: "文章分类",
        width: 200,
        align: "center",
        key: "label"
      },{
        align: "center",
        title: "文章内容",
        key: "article"
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
          },"编辑/查看"),h("Button",{
            props:{
              type:"warning",
              size: "small"
            },
            style:{
              marginLeft: "10px",
              letterSpacing: "2px"
            },
            on: {
              click: ()=>{
                self.delCon = !self.delCon
              }
            }
          },"删除")])
        }
      }], //表头
      tabdata: [{
        id: 100,
        name: "html",
        label: "HTML",
        article: "html是一门标记语言"
      },{
        id: 101,
        name: "html",
        label: "HTML",
        article: "html是一门标记语言"
      },{
        id: 102,
        name: "html",
        label: "HTML",
        article: "html是一门标记语言"
      },{
        id: 103,
        name: "html",
        label: "HTML",
        article: "html是一门标记语言"
      }],
      selectarr: [], //复选框数据
      delCon: false, //删除确认提示
    }
  },
  methods: {
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

