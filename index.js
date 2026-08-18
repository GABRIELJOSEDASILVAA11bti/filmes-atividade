import express from "express"
import cors from "cors"
import mysql2 from "mysql2"

const app = express()

app.use(express.json())

app.post("/adicionar-filme", (req, res)=>{

    const {titulo, genero} = req.body
    const insertCommand = "INSERT INTO filmes_gabrieljose(titulo, genero) VALUES (?,?)"

    sql.query(insertCommand, [titulo, genero], (error) =>{
        if(error){
            console.log(error)
        }

        res.status(201).json({message: "filme adicionado"})
    })
})

app.delete("/apagar-filme/:id", (req, res)=>{
    const {id} = req.params
    const deleteCommand = "DELETE FROM filmes_gabrieljose WHERE id = ?"

    sql.query(deleteCommand, [id], (error)=>{
        if(error){
            console.log(error)
        }

        res.json("Filme deletado")
        j
    })

})

const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password:"senhaAlunos",
    database: "alunos_filmes03MB"
})

app.listen(3000, ()=>{
    console.log("Servidor ligado")
})   