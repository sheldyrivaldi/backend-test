const { DataTypes } = require('sequelize')
const db = require('../config/connection')

const user = db.define('user', {
    name: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE
    },
    age: {
        type: DataTypes.INTEGER
    },
    mobile: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    education: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    image1000: {
        type: DataTypes.STRING
    }
}, 
{
    timestamps: false
})

module.exports = user