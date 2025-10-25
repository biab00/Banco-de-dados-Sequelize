const Sequelize = require("sequelize")
const db = require("../config/bd_SEQUELIZE")

//definindo a Tabela USER com sequelize
const User = db.define("livros", {
    id:{
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync() // Criar a tabela se não existir

//Funções do sequelize
const Todos = () => User.findAll()

const add = (params) => User.create(params)

const buscar_id = (id) => User.findByPk(id)

const delet = async(id) => {
    await User.destroy({
        where: {
            id: id
        }
    });
}

const atualizar = async(params) => {
    await User.update(
        {
            titulo: params.titulo,
            autor: params.autor
        },
        {
            where: {
                id: params.id
            }
        }
    )
}

module.exports = {User, Todos, add, delet, buscar_id, atualizar};