<template>
    <div class="search">
        <div class="labelTitle">
            文章查找
        </div>
        <div class="delBtn">
            <Input type="text" style="width:500px;" placeholder="请输入文章名称进行查找" clearable size="large">
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
                    width: 350,
                    align: "center",
                    key: "name"
                },{
                    title: "文章分类",
                    width: 350,
                    align: "center",
                    key: "label"
                },{
                    title: "操作",
                    align: "center",
                    render(h,params){
                        return h("Button",{
                            props: {
                                type: "info",
                                size: "small"
                            },
                            on: {
                                click: ()=>{
                                    self.$router.push({path: "/articleInfo"})
                                }
                            }
                        },"查看")
                    }
                }],
                dataTab: [{
                    name: "html",
                    id: 100,
                    label: "HTML",
                },{
                    name: "html",
                    id: 100,
                    label: "HTML",
                },{
                    name: "html",
                    id: 100,
                    label: "HTML",
                },{
                    name: "html",
                    id: 100,
                    label: "HTML",
                }]
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