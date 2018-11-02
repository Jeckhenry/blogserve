<template>
    <div>
        <Layout :style="{minHeight: '100vh'}">
            <Sider :style="{background: '#32353A'}">
                <div class="blogTitle">
                BLOG后管
                </div>
                <div class="user">
                您好！，管理员。 <a href="javascript:void(0)" @click="logout"><Icon type="ios-log-out"/>退出</a>
                </div>
                <div class="menu_left">
                <ul>
                    <li><Icon type="md-create"/> <router-link :to="{path: '/main/home'}">文章操作</router-link></li>
                    <li><Icon type="md-attach"/><router-link :to="{path: '/main/label'}">标签操作</router-link></li>
                    <li><Icon type="ios-search-outline"/><router-link :to="{path: '/main/search'}">文章查找</router-link></li>
                </ul>
                </div>
            </Sider>
            <Layout>
                <router-view/>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
    methods: {
        logout(){
            this.removelocastorage()
            this.$router.push({path: "/"})
        }
    }
};
</script>

<style scoped>
</style>