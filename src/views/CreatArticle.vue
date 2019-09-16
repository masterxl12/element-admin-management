<template>
  <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.content"></el-input>
    </el-form-item>
    <el-form-item label="创建时间">
        <el-date-picker v-model="article.time" type="datetime" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="选择日期时间"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" round native-type="submit">立即创建</el-button>
      <el-button type="info" round @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>>
<script>
export default {
  data() {
    return {
      article: {
        title: "",
        content: "",
        time:""
      }
    };
  },
  methods: {
    saveArticle() {
      this.$http.post("articles", this.article).then(res => {
        this.$message({
          message: "文章创建成功",
          type: "success"
        });
        this.$router.push("/articles/index"); //创建文章成功后跳转到文章列表页
        // console.log(res.data);
      });
    },
    cancel(){
        this.$router.push("/articles/index")
    }
  }
};
</script>