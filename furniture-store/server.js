const express = require ('express')
const app = express()
const path = require ('path')

const port = 3000

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name',function(req,res) {
    let name = req.params.name
    let priceToFound = "didnt fount anything"
    for (item in store) {
        if (store[item].name == name){
            priceToFound = {price: store[item].price.toString()}
        } 
    }
    res.send(priceToFound)

})

app.get('/buy/:name',function(req,res){
    let name = req.params.name
    for (item in store) {
        if (store[item].name == name){
            store[item].inventory -= 1 
            res.send(`item from ${store[item]} has been reduce by one, thank you for paying`)
        } 
    }
    res.send('item did not found')
})


app.get('/',function(req,res){
    res.send("Server is up and running smoothly")
})

app.listen(port,function() {
    console.log("server is running on port " + port);
})