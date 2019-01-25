const express = require('express')
const sendEmail = require('./authMailer')
const mailer  = require('nodemailer')


const Router = express.Router()
const connection = require('../Config/Db.js')
Router.get('/', (req,res) => {
    res.send("Mes commande '/Commandes' ")
})
Router.get('/showOrder', (req, res) => {
    const sql = "SELECT * from `order`"
    connection.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        return res.status(200).send(result)
    })
    //res.send("Toutes mes commandes '/Commandes/showOrder'")
})

Router.post('/addOrder', (req, res) => {
    console.log("req BODY", req.body)
    const sql = "INSERT INTO `order` (name, firstName, address, phone, deliveryDate, deliveryHours, email) VALUES (?,?,?,?,?,?,?);"
    const values = [req.body.name, req.body.firstName, req.body.address, req.body.phone, req.body.deliveryDate, req.body.deliveryHours, req.body.email]
    connection.query(sql, values, (err, result) => {
        if(err) throw err
        return res.status(200).send(result)
    })
    //res.send("Toutes mes commandes '/Commandes/showOrder'")
})

Router.put('/updateOrder/:id', (req,res) => {
    // console.log('req body', req.body)
    // console.log('req params', req.params)
    const id = req.params.id
    const sql = "UPDATE `order` SET name = ?, firstName = ?, address = ?, phone = ?, deliveryDate = ?, deliveryHours = ?, email = ? WHERE id = ?"
    const values = [req.body.name, req.body.firstName, req.body.address, req.body.phone, req.body.deliveryDate, req.body.deliveryHours, req.body.email, id]
    console.log(values)
    connection.query(sql, values, (err, result) => {
        if(err) throw err
        return res.status(200).send(result)
    })
})

Router.delete('/deleteOrder/:id', (req,res) => {
    console.log('req params', req.params)
    const id = req.params.id
    const sql = "DELETE FROM `order` WHERE id = ?"
    const values = [id]
    connection.query(sql, values, (err, result) => {
        if(err) throw err 
        return res.status(200).send(result)
    })
})

Router.get('/showOrder/:id', (req, res) => {
    console.log("req params", req.params.id)
    const id = req.params.id
    const sql = "SELECT * FROM `order` WHERE id = ?"
    const values = [id]
    connection.query(sql, values, (err, result) => {
        if(err) throw err
        return res.status(200).send(result[0])
    })
})

Router.get('/accepter/:id', (req, res) => {
    console.log("req params", req.params, req.body)
    const id = req.params.id
    const sql = "SELECT * FROM `order` WHERE id = ?"
    const values = [id]
    connection.query(sql, values, (err, result) => {
        console.log(result)
        if(err) throw err
        sendEmail(result[0].email, result[0].name, result[0].deliveryDate, result[0].deliveryHours)

        return res.status(200).send(result[0])
    })
})


module.exports = Router