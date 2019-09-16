<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>内容管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/articles/index">
              <i class="el-icon-notebook-2"></i>
              文章列表</el-menu-item>
              <el-menu-item index="/articles/create">
              <i class='el-icon-circle-plus-outline'></i>
              新建文章</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="header">
          <h2>Simple Blog Management System</h2>
        </el-header>

        <el-main>
          <!--router-view用来承载真正每一个路由对应页面的组件内容-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.header{
  background: rgba(135,255,255,0.7);
  color: rgba(255,255,255,0.7);
  text-align:center;
  line-height: 60px;
  font-size:18px
}
.el-aside {
  color: #333;
}
</style>
