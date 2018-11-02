<template>
    <div class="notfound">
        <div class="img">
            <span></span>
        </div>
        <div class="msg">
            <p>404 not found</p>
            <p>您访问的页面不存在！返回 &nbsp; <router-link to='/'>登陆页面</router-link> </p>
        </div>
    </div>
</template>

<script>
    export default {
        // name: 'notfound'
    }
</script>

<style scoped lang='scss'>
.notfound{
    height: 100vh;
    width: 400px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    margin: 0 auto;
    margin-top: -10vh;
    .img{
       width: 100%;
    }
    a{
        text-decoration: none;
    }
    span{
        display: inline-flex;
        width: 330px;
        height: 200px;
        background: url('../assets/img/404.png') no-repeat
    }
    .msg{
        width: 100%;
        line-height: 20px;
        a{
            font-weight: bold;
        }
    }
}
</style>