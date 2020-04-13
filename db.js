const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/todos.db'
})

const Todos = db.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING(200),
        allowNull: true
        
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    due: {
        type: Sequelize.DATE
    },
    status: {
        type: Sequelize.STRING(200),
        allowNull:true
    }
   
})

module.exports = {
    db, Todos
}