<template>
  <div class="list">
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="160"></el-table-column>
      <el-table-column prop="content" label="文章内容" width="500"></el-table-column>
      <el-table-column prop="time" label="创建时间" width="300"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <!-- {{scope.row}} -->
          <el-button @click="edit(scope.row._id)" type="primary" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    dataUpdate() {
        this.$http.get("articles").
        then(res => {
            this.articles = res.data;
        })
    },
    edit(id) {
        this.$router.push(`/articles/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`articles/${id}`).then(() => {
        this.$message({
          message: "文章删除成功",
          type: "success"
        });
        this.dataUpdate() // 文章删除后重新再获取页面数据
      });
    }
  },
  created() {
      this.dataUpdate()
    }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>