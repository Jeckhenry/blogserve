<!-- -->
<template>
    <div class="edit">
        <div class="labelTitle">
        文章信息编辑<Button @click="goback" type="success">返回文章页</Button>
        </div>
        <div class="title">
            <label for="">文章名称：</label>
            <Input type="text" clearable style="width:300px;" placeholder="请输入文章名称" size="large" v-model="title"/>
        </div>
        <div class="title">
            <label for="">文章分类：</label>
            <Select v-model="label" style="width:300px;" size="large">
                <Option value="html">html</Option>
            </Select>
        </div>
        <div class="article">
            <label for="">文章内容：</label>
            <div class="wangedit">
                <i-editor v-model="content" :autosize="{minRows:20}"></i-editor>
            </div>
        </div>
        <div class="submit">
            <Button type="info" style="width:10%;">提交</Button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: "",
                label: "",
                content:  ""
            }
        },
        methods:{
            goback(){
                this.$router.back(-1)
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