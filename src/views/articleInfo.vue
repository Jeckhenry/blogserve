<!-- 文章信息 -->
<template>
    <div class="info">
        <div class="labelTitle">
            文章信息<Button @click="goback" type="success">返回搜索页</Button>
        </div>
        <div class="arInfo">
            <div>
                <span>文章名称：</span>html
            </div>
            <div>
               <span>文章分类：</span>HTML
            </div>
            <div class="main">
                <div>
                    <span>文章内容：</span> 
                </div>
                <div>
                    htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml
                    htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml
                    htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml
                    htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goback(){
                this.$router.back(-1)
            }
        }
    }
</script>

<style scoped lang="scss">
.info{
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
  .arInfo{
      margin-top: 20px;
      background: #fff;
      padding: 10px 20px;
      border-radius: 10px;
      font-size: 16px;
      &>div{
          padding: 5px 0;
          span{
              font-weight: 700;
          }
      }
      .main{
          &>div{
              padding: 5px 0;
          }
      }
  }
}
</style>