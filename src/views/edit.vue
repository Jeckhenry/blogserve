<!-- -->
<template>
    <div class="edit">
        <Spin fix size='large' v-show="loading">
            <loading></loading>
        </Spin>
        <div class="labelTitle">
        文章信息编辑<Button @click="goback" type="success">返回文章页</Button>
        </div>
        <div class="title">
            <label for="">文章名称：</label>
            <Input type="text" clearable style="width:300px;" placeholder="请输入文章名称" size="large" v-model="title"/>
        </div>
        <div class="title">
            <label for="">文章分类：</label>
            <Select :label-in-value="true" v-model="label.id" style="width:300px;" size="large" @on-change="change">
                <Option :value="item.id" v-for="(item,index) of labelArr" :key="index">
                    {{item.labelname}}
                </Option>
            </Select>
        </div>
        <div class="article">
            <label for="">文章简洁：</label>
            <div class="wangedit">
                <i-editor v-model="contentreview" :autosize="{minRows:10}"></i-editor>
            </div>
        </div>
        <div class="article">
            <label for="">文章内容：</label>
            <div class="wangedit">
                <i-editor v-model="content" :autosize="{minRows:20}"></i-editor>
            </div>
        </div>
        <div class="submit">
            <Button type="info" style="width:10%;" @click="submit">提交</Button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: "",
                label: {
                    labelname:"",
                    id: ""
                },
                content:  "",
                labelArr: [], //存放标签信息
                loading: false, //loading
                article: {}, //存放路由跳转携带的参数
                articleId: '', //文章id
                contentreview: ""
            }
        },
        created: function(){
            if(this.$route.params.article){
                localStorage.setItem("mid_blog_cbim",JSON.stringify(this.$route.params.article))
                this.article = this.$route.params.article
            }else{
                this.article = JSON.parse(localStorage.getItem("mid_blog_cbim"))
            }
            this.title = this.article.articleTitle
            this.label.labelname = this.article.articleLabel
            this.label.id = this.article.labelId
            this.content = this.article.articleInfo
            this.articleId = this.article.articleId
            this.contentreview = this.article.articleReview
            this.loading = true;
            this.remote({
                url: "/labelInfo",
                method: "get"
            })
            .then(res=>{
                this.labelArr = res.data
                this.loading = false;
            },err=>{
                this.loading = false;
            })
        },
        methods:{
            //下拉框数据
            change(params){
                this.label.labelname = params.label;
            },
            goback(){
                this.$router.back(-1)
            },
            //提交数据
            submit(){
                var msg = ""
                if (this.articleId){
                    msg = "修改"
                }else{
                    msg = "新增"
                }
                if(!this.title || !this.label || !this.content){
                   this.$Message.warning("文章名称，文章分类，文章内容不能为空")
                   return
                }
                this.$Modal.confirm({
                    render: (h)=>{
                        return h("div",{
                            props: {
                                style: {
                                    textAlign: "center"
                                }
                            }
                        },"确认"+msg+"吗？")
                    },
                    onOk: ()=>{
                        this.loading = true;
                        this.remote({
                            url: "/addArticle",
                            method: "POST",
                            data: {
                            articleName: this.title,
                            articleLabel: this.label.labelname,
                            articleInfo: this.content,
                            labelId: this.label.id,
                            articleId: this.articleId,
                            articleReview: ""
                            }
                        })
                        .then(res=>{
                            this.loading = false;
                            if(res.code == 200){
                                this.$Message.success("操作成功")
                                this.$router.push({path: "/main/home"})
                            }else{
                                this.$Message.success("操作失败")
                            }
                        },err=>{
                            this.loading = false;
                        })
                    }
                })
                
                
            }
        }
    }
</script>

<style scoped lang="scss">
.edit{
    padding: 50px;
    .labelTitle{
        padding: 10px 0;
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: 700;
        border-bottom: 1px solid #ccc;
        clear: both;
        button{
            float: right;
            margin-right: 20px;
        }
    }
    .title{
        padding: 20px;
        label{
            font-size: 16px;
            margin-right: 10px;
        }
    }
    .article{
        padding: 20px;
        label{
            font-size: 16px;
            margin-right: 10px;
        }
    }
    .submit{
        padding: 20px 60px;
        text-align: right;
    }
}
</style>