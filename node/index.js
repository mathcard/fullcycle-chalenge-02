const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)




app.get('/', (req,res) => {
    const sql = `INSERT INTO people(name) values('Matheus')`
    connection.query(sql)
    connection.end()
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})