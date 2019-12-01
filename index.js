// Setup 
const express = require('express')
const app = express()
const path = require('path')
const port = 4000

// Static file path 
app.use(express.static(path.join(__dirname, '/assets')))

// Get methods
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.get('/aboutMe.html', (req,res) => res.sendFile(__dirname + '/aboutMe.html'))

app.get('/works.html', (req, res) => res.sendFile(__dirname + '/works.html'))

app.get('/contact.html', (req,res) => res.sendFile(__dirname + '/contact.html'))

app.get('/aboutMe', (req,res) => res.sendFile(__dirname + '/aboutMe.html'))

// Test 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))












