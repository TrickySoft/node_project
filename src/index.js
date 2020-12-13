const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;
const staticPath = path.join(__dirname, "../public")
const registerPartials = path.join(__dirname, "../public/partials")
app.use(express.static(staticPath))
app.set("view engine", "hbs")
 app.set("views", staticPath)
 hbs.registerPartials(registerPartials);
app.get("", (req, res)=>{
    res.render("index")
})

app.get("/doctors", (req, res)=>{
    res.render("doctors")
})
app.get("/gallery", (req, res)=>{
    res.render("gallery")
})
app.get("/contact", (req, res)=>{
    res.render("contact")
})
app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("*", (req, res)=>{
    res.render("404")
})

app.listen(port, (error)=>{
    console.log(`server is listening to the ${port}`);
    console.log(error);
})