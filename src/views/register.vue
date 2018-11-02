<template>
    <div>
        <Spin fix size='large' v-show="loading">
            <loading></loading>
        </Spin>
        <Row class="login">
            <Col span="6" offset="9" class="form_area">
                <div class="title">
                    BLOG后台管理系统用户注册
                </div>
                <Form ref="formValidate" :model="formVal" label-position="right" :label-width="100">
                    <FormItem label="用户名：">
                        <Input v-model="formVal.username" class="input"></Input>
                    </FormItem>
                    <FormItem label="密码：">
                        <Input v-model="formVal.passwd" class="input"></Input>
                    </FormItem>
                    <FormItem label="再次确认密码：">
                        <Input v-model="formVal.secpasswd" class="input"></Input>
                    </FormItem>
                    <FormItem style="text-align:right;">
                        <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
                        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                    </FormItem>
                    <FormItem style="text-align:right;" class="cantLogin">
                        <!-- <a href="javascript:void(0);">去登录</a> -->
                        <router-link :to="{path:'/'}">去登录</router-link>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                formVal: {
                    username: "",
                    passwd: "",
                    secpasswd: ""
                },
                loading: false,
            }
        },
        methods: {
            handleSubmit(){
                this.loading = true;
                this.remote({
                    url: "/login",
                    method:"post",
                    data: {
                        username: this.formVal.username,
                        passwd: this.formVal.passwd
                    }
                })
                .then(res=>{
                    this.loading = false;
                },err=>{
                    this.loading = false;
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
    .title{
        padding: 10px;
        font-size: 16px;
        font-weight: 800;
        font-style: italic;
        margin-bottom: 20px;
    }
    .form_area{
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
        }
    }
}
</style>