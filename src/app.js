const express= require('express');
const app=express();
const path  = require('path');
const port = process.env.PORT || 3000;

//public static path
const static_path  = path.join(__dirname,"../public")
const static_csspath  = path.join(__dirname,"../public/css")
const static_jspath  = path.join(__dirname,"../public/js")
const staticViewPath = path.join(__dirname,"../views")

// console.log(staticViewPath);
app.set('views',staticViewPath);
app.set('view engine','hbs');
app.use(express.static(static_csspath));
app.use(express.static(static_jspath));
app.use(express.static(static_path));


app.get('/', (req,res)=>{
    // app.use(express.static(static_path));
    res.render("");
})

app.get('/about', (req,res)=>{
    res.render("about");
})

app.get('/weather', (req,res)=>{
    res.render("weather");
})

app.get('/*', (req,res)=>{
    res.render("404Error");
})

app.listen(port,()=>{
    console.log(`listening to port ${port}...`)
})
