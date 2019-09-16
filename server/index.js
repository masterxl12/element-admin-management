const express = require('express');
const cors = require('cors')
const app = express()

// 引入cors解决前端请求后端数据的跨域问题
app.use(cors());
app.use(express.json()) // 识别客户端提交的json
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/element-admin', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true
})
// 定义数据模型，文档结构(字段，属性)
const Article = mongoose.model('Article', new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    time:{
        type:String
    }
}))

// 用于展示数据
app.get('/', async (req, res) => {
    res.send('index')
})

// 新增文章
app.post('/api/articles',async(req,res)=>{
    const article = await Article.create(req.body);
    res.send(article)
})

// 文章列表
app.get('/api/articles',async(req,res)=>{
    const articles = await Article.find();
    // console.log(req.params);
    res.send(articles)
})

// 文章详情接口
app.get('/api/articles/:id',async (req,res)=>{
    const article = await Article.findById(req.params.id);
    res.send(article)
})

//修改文章
app.put('/api/articles/:id',async(req,res)=>{
    const artcile = await Article.findByIdAndUpdate(req.params.id,req.body);
    res.send(artcile)
}) 

// 删除文章
app.delete('/api/articles/:id',async(req,res)=>{
    await Article.findByIdAndDelete(req.params.id);
    res.send({
        status:true
    })
})

app.listen(3001, () => {
    console.log("http://localhost:3001")
})