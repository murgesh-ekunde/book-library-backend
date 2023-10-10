import express from 'express';
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'murgesh2111',
    database:"test"
})

app.get ("/", (req, res)=>{
    res.json("this is get response")
})

app.get ("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.listen(8080, () =>{
    console.log("Connected to backend")
})