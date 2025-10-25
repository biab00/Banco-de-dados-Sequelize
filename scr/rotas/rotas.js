const express = require("express")
const rota = express.Router()

const controle = require("../controle/controle")

rota.get("/mostrar", controle.teste)
rota.get("/add", controle.add)
rota.get("/delete/:id", controle.delet)
rota.get("/buscar/:id", controle.buscar_id)
rota.get("/atualizar", controle.atualizar)
rota.get("/", controle.inicio)

module.exports = rota