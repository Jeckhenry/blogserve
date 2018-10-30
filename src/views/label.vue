<template>
  <div class="label">
    <Spin fix size='large' v-show="loading">
        <loading></loading>
    </Spin>
    <div class="labelTitle">
      标签信息表
    </div>
    <div class="delBtn">
      <i-button type="info" @click="showDel">删除</i-button>
      <i-button type="info" @click="addEdit=!addEdit;labelInfo='';infoId='';title='新增提示'">新增</i-button>
    </div>
    <div class="infotab">
      <i-table border ref="selectab" 
      :columns="columns"
      :data="infodata" 
      @on-select="selectRow"
      @on-select-cancel="selectRow"
      @on-select-all="selectRow"
      @on-select-all-cancel="selectRow">
      </i-table>
    </div>
    <Modal v-model="delCon" draggable scrollable title="确认删除" @on-ok="delInfo">
        <div>您确定删除这些数据吗？</div>
    </Modal>
    <Modal v-model="addEdit" draggable scrollable @on-ok="delInfo">
        <div slot="header">
           {{title}}
        </div>
        <div>
          <Input v-model="labelInfo" placeholder="请输入标签名称" type="text" clearable />
        </div>
        <div slot="footer">
          <Button @click="addEdit=!addEdit">取消</Button>
          <Button type="info" @click="edit">确定</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    data(){
      var self = this
      return{
          columns:  [
              {
                  type: 'selection',
                  width: 60,
                  align: 'center',
                  
              },
              {
                  title: '标签类名',
                  key: 'labelname',
                  align: "center"
              },
              {
                  title: '操作',
                  align: 'center',
                  render(h, params){
                    var me = this;
                    return h("Button", {
                      props: {
                        type: "info",
                        size: "small"
                      },
                      style: {
                        width: "10%"
                      },
                      on: {
                        click: ()=>{
                          self.title = "修改提示"
                          self.labelInfo = params.row.labelname
                          self.infoId = params.row.id
                          self.addEdit = !self.addEdit
                        }
                      }
                    },"编辑")
                  }
              }
          ],
          infodata: [],
          infoId: "",//数据id
          selectArr: [], //复选框数据
          delCon: false, //删除提示框 
          addEdit: false, //修改/新增
          labelInfo: '', //输入的标签信息
          rowInfo: {}, //当前编辑行数据
          title: "新增提示", //提示框title
          loading: false, //loading加载
          ids: [], //存放shujuid
      }
    },
    created: function(){
      this.initdata()
    },
    methods:{
      initdata(){
        this.loading = true;
        this.remote({
          url: "/labelInfo",
          method: "GET"
        }).then(res=>{
          this.infodata = res.data;
          this.infodata.forEach((val,index)=>{
            if(val.isUse){
              val._disabled = true
            }
          })
          this.loading = false;
        },err=>{
          this.loading = false;
        })
      },
      selectRow(selection,row){
        //复选框事件
        this.selectArr = selection
      },
      //删除事件
      showDel(){
        this.ids = [];
        if(this.selectArr.length < 1){
          this.$Message.warning("请选中数据")
        }else{
          this.delCon = true;
        }
      },
      delInfo(){
        this.selectArr.forEach((val,index)=>{
          this.ids.push(val.id)
        })
        var len = this.ids.length;
        let ids = ''
        this.ids.forEach((val,index)=>{
          if(index < len-1){
            ids += val + ","
          }else{
            ids += val;
          }
        })
        this.remote({
          url: "/delLabel",
          method: "POST",
          data: {
            ids: this.ids
          }
        })
        .then(res=>{
          if (res.code == 200) {
            this.$Message.success("删除成功")
            this.initdata()
          }else{
            this.$Message.success("删除失败")
            this.initdata()
          }
        },err=>{
          console.log(err)
        })
      },
      //编辑+新增
      edit(){
        if (this.labelInfo == ""){
          this.$Message.warning("标签名称不能为空")
          return
        }
        var msg = "";
        if (this.infoId) {
          msg = "修改"
        }else{
          msg = "新增"
        }
        this.$Modal.confirm({
          render: (h)=>{
            return h("p",{
              props:{
                style:{
                  textAlign: "center"
                }
              }
            },"您确认"+msg+"吗？")
          },
          onOk: ()=>{
            this.addEdit=!this.addEdit
            this.loading = true;
            this.remote({
              url: "/addLabel",
              method: "POST",
              data: {
                labelName: this.labelInfo,
                id: this.infoId
              }
            })
            .then(res=>{
              this.initdata()
              this.loading = false;
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.label{
  padding: 50px;
  position: relative;
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