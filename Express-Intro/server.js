const express = require('express')
const app = express ()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.get('/books/:booksID',function (req,res) {
    let bookID = req.params.booksID
    let toReturn = data[bookID]
    res.send(toReturn)
})

app.get('/surf',function (req,res) {
    let params = req.query
    res.send(params)
})

app.get('/life', function (req,res) {
    const justTheNum = "43"
    res.send(justTheNum)
})

app.get('/try/:userId',function (req,res) {
    console.log(req.params.userId);
    const userId = req.params.userId
    res.send(`hey this is the number ${userId} has ckalcla`)
})

app.get('/details',function(req,res){
    let params = req.query
    console.log(params.city);
    res.send(params)
})



const port = 3000
app.listen (port, function(){
    console.log("server is running on port "+ port );
})

