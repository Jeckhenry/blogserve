<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .blogTitle{
    color: #fff;
    width: 100px;
    height: 100px;
    text-align: center;
    background: #000;
    line-height: 100px;
    border-radius: 50%;
    margin: 20px auto 0;
    font-size: 16px;
    font-style: italic;
  }
  .user{
    text-align: center;
    padding: 20px 0;
    color: #fff;
    font-size: 12px;
    a{
      color: #fff;
      i{
        margin-right: 1px;
      }
      &:hover{
        color: #6BD089;
      }
    }
  }
  .menu_left{
    color: #fff;
    text-align: center;
    font-size: 13px;
    li{
      padding: 10px 0;
      a{
        color: #fff;
      }
      i{
        margin-right: 10px;
        margin-top: -2px;
      }
      &:hover{
        background: #57c5f7;
        color: #000;
        -webkit-transition: .3s ease-in-out;
        -moz-transition: .3s ease-in-out;
        -ms-transition: .3s ease-in-out;
        -o-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
      }
    }
  }
}
</style>
