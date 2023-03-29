const User = require('../models/users.models');
const path = require('path');

const find = (req, res) => {
    User.findAll()
        .then(data => res.json(data))
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

const create = (req, res) => {
    let filePath500 = ""
    let filePath1000 = ""
    if(req.file){
        filePath500 = path.resolve(`./assets/${500}-${req.body.name}-${req.file.originalname}`.split(' ').join('-'));
        filePath1000 = path.resolve(`./assets/${1000}-${req.body.name}-${req.file.originalname}`.split(' ').join('-'));
    }
    User.create({
        name: req.body.name,
        date: req.body.date,
        age: parseInt(req.body.age),
        mobile: req.body.mobile,
        city: req.body.city,
        education: req.body.education,
        image: filePath500,
        image1000: filePath1000
    })
    .then(() => {
        res.status(200).json({
            message: 'User created'
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
};

const findById = (req, res) => {
    User.findByPk(req.params.id)
    .then(data => {
        if (data === null){
            res.status(404).json({
                message: 'User not found'
            });
        } else {
            res.status(200).json(data);
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
};
const updateById = (req, res) => {
    let filePath500 = ""
    let filePath1000 = ""
    if(req.file){
        filePath500 = path.resolve(`./assets/${500}-${req.body.name}-${req.file.originalname}`.split(' ').join('-'));
        filePath1000 = path.resolve(`./assets/${1000}-${req.body.name}-${req.file.originalname}`.split(' ').join('-'));
    }
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then((data) => {
      res.status(200).json({
        message: 'User updated'
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
  };

module.exports = {
    create,
    find,
    findById,
    updateById
};
