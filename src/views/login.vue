<template>
    <div>
        <Spin fix size='large' v-show="loading">
            <loading></loading>
        </Spin>
        <Row class="login">
            <Col span="6" offset="9" class="form_area">
                <div class="title">
                    BLOG后台管理系统
                </div>
                <Form ref="formValidate" :model="formVal" label-position="right" :label-width="80">
                    <FormItem label="用户名：">
                        <Input v-model="formVal.username" class="input" style="width:80%;"></Input>
                    </FormItem>
                    <FormItem label="密码：">
                        <Input v-model="formVal.passwd" type="password" class="input" style="width:80%;"></Input>
                    </FormItem>
                    <FormItem style="text-align:right;">
                        <Button type="primary" @click="handleSubmit('formValidate')">登录</Button>
                        <Button @click="handleReset('formValidate')" style="margin-left: 8px;margin-right:36px;">重置</Button>
                    </FormItem>
                    <!-- <FormItem style="text-align:right;" class="cantLogin">
                        <a href="javascript:void(0);">忘记密码？</a>   
                        <router-link :to="{path:'/register'}">去注册</router-link>
                    </FormItem> -->
                </Form>
            </Col>
        </Row>
    </div>
</template>

<script>
    import md5 from "js-md5"
    export default {
        data(){
            return {
                formVal: {
                    username: "",
                    passwd: ""
                },
                loading: false,
            }
        },
        methods: {
            handleSubmit(){
                this.loading = true;
                this.remote({
                    url: "/cookie",
                    method:"post",
                    data: {
                        username: this.formVal.username,
                        passwd: md5(this.formVal.passwd)
                    }
                })
                .then(res=>{
                    this.loading = false;
                    if (res){
                        this.locastorage(res.data)
                        this.$Message.success("登陆成功")
                        this.$router.push({path: "/main"})
                    }
                },err=>{
                    this.loading = false;
                })
            },
            handleReset(){
                this.remote({
                    url: "/cookie",
                    method: "get"
                })
                .then(res=>{
                    console.log(res)
                },err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.login{
    height: 100vh;
    background:#f5f7f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .form_area{
        .title{
            padding: 10px;
            font-size: 16px;
            font-weight: 800;
            font-style: italic;
            margin-bottom: 20px;
        }
        text-align: center;
        margin-top: -20vh;
        border: 1px solid #ccc;
        padding: 20px 20px 0;
        border-radius: 10px;
        font-size: 18px;
    }
    .cantLogin{
        & a:first-child{
            color: #2d8cf0;
        }
        & a:nth-of-type(2){
            color: #666;
            margin-right: 36px;
        }
    }
}
</style>