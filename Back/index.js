const express = require("express")
const morgan = require("morgan")
const bodyParser = require('body-parser')
const connection = require('./src/Config/Db.js')
const Commandes = require("./src/routes/Commandes")
const cors = require("cors")
const app = express()

app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/Commandes", Commandes)

app.get('/', (req, res) => {
    res.send("je test '/' ")
}) // il envoie mes reponse vers url



let server = app.listen(3000, () =>{
    console.log('listen on port', server.address().port)
})