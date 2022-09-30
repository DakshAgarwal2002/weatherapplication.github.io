const express=require('express');
const path=require('path')
const app=express();
const hbs=require('hbs')
const port=process.env.PORT||8500
const static_path=path.join(__dirname)
const tempelate_path=path.join(__dirname,"/tempelates/views")
const partial_path=path.join(__dirname,"/tempelates/partials")
app.use(express.static(static_path))

app.set('view engine','hbs')
app.set('views',tempelate_path)
hbs.registerPartials(partial_path)

app.get("/",(req,res)=>{
    // res.send("Hello this is Home page")
    res.render('index')
})
app.get("/about",(req,res)=>{
    // res.send("Hello this is About page")
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('404error')
})
app.listen(port,()=>{
    console.log(`Port listening ${port}`)
})