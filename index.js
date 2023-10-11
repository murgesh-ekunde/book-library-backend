import express from 'express';
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'murgesh2111',
    database:"test"
})

app.use(express.json)

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

app.post ("/books", (req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
    const values = [req.body.title, req.body.desc, req.body.cover]

    cb.query(q,[values], (err,data)=>{
        if (err) return res.json(err)
        return res.json("Book has been created successfully")
    })
})
app.listen(8080, () =>{
    console.log("Connected to backend")
})