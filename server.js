require('dotenv').config()
const express = require('express')
const fs = require('fs')
const { v4: uuidv4} = require('uuid')
const { match } = require("assert")
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('assets'))
app.use(express.static('css'))
app.use(express.static('javascript'))


app.set('view engine','ejs')
app.set('views','./views')

//bodyparser
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //set true biar yg di bosy sepenuhnya terkirim

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/game', (req, res) => {
    res.render('game')
})

// app.get("/login", (req,res) => {
//     const usersData = fs.readFileSync('data/data.json', 'utf-8')
//     const users= JSON.parse(usersData)
    
//     function login(inputUsername,inputPassword){
//         let logData = users.filter((logUsername) => logUsername.username.match(inputUsername))
//         console.log({logData})
//     }
//     login("halo","")
//     res.render('index')
// })

app.post("/login", (req,res) => {
    const { username, password } = req.body //masih bentuk string
    const data = fs.readFileSync('data/data.json')
    const parsedData = JSON.parse(data) //bentuk JSON
    const userFound = parsedData.find((user) => user.username == username)
    if(!userFound) {
        res.redirect("login")
        console.log("No Username")
    }else if (userFound.password == password) {
        res.redirect("home")
    }
    // else {
    //     res.redirect("login")
    //     alert("No Username")
    // }
})

app.post("/register", (req, res) => {
    const { username, password } = req.body //masih bentuk string
    const data = fs.readFileSync('data/data.json')
    const parsedData = JSON.parse(data) //bentuk JSON
    const newUser = {
        id: uuidv4(),
        username,
        password
    }
    parsedData.push(newUser)
    fs.writeFileSync('data/data.json', JSON.stringify(parsedData, null, 2))
    res.redirect('/login')
})

app.listen(PORT, () => {
    console.log(`jalan guys di PORT ${PORT}`)
})