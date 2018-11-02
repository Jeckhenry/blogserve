<template>
    <div class="search">
        <Spin fix size='large' v-show="loading">
            <loading></loading>
        </Spin>
        <div class="labelTitle">
            文章查找
        </div>
        <div class="delBtn">
            <Input type="text" v-model="title" :search="true" @on-enter="search" style="width:500px;" placeholder="请输入文章名称进行查找" clearable size="large">
                <Icon type="ios-search" slot="suffix"/>
            </Input>
        </div>
        <!-- 搜索结果 -->
        <div class="results">
            <div class="resTitle">
                搜索结果如下：
            </div>  
            <div class="resBody">
                <i-table
                border
                :columns="columns"
                :data="dataTab">
                </i-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            var self = this;
            return{
                columns: [{
                    type: "index",
                    title: "序号",
                    width: 100,
                    align: "center",
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
                    title: "文章内容",
                    align: "center",
                    key: "articleInfo"
                },{
                    title: "创建时间",
                    width: 200,
                    align: "center",
                    key: "subDate"
                },{
                    title: "操作",
                    align: "center",
                    width: 200,
                    render(h,params){
                        return h("Button",{
                            props: {
                                type: "info",
                                size: "small"
                            },
                            on: {
                                click: ()=>{
                                    self.$router.push({name:"edit",params: {article:params.row}})
                                }
                            }
                        },"编辑/查看")
                    }
                }],
                dataTab: [],
                loading: false, //
                title: ""
            }
        },
        methods:{
            //搜索方法
            search(){
                this.loading = true
                this.remote({
                    url: "/searcharticle",
                    method: "post",
                    data: {
                        title: this.title
                    }
                })
                .then(res=>{
                    this.loading = false
                    if (res.code == 200){
                        this.dataTab = res.data
                    }
                },err=>{
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.search{
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
  .results{
      padding: 10px;
      .resTitle{
          font-size: 16px;
          padding: 10px 0;
      }
      .resBody{

      }
  }
}
</style>