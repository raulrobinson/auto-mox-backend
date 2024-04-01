const db = require('../models/index.js');
const Register = db.registers;

exports.findOne = (req, res) => {
    Register.findOne({
        order: [['FECHA', 'DESC']]
    }).then(data => {
        if (data) {
            console.log(data.id)
            res.send({ total: 1, response: data });
        } else {
            res.status(404).send({
                message: `No se puede encontrar el ultimo registro`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: 'Error al recuperar el ultimo registro'
        })
    })

    // Register.findByPk(id)
    //     .then(data => {
    //         if (data) {
    //             res.send(data);
    //         } else {
    //             res.status(404).send({
    //                 message: `Cannot find Register with id=${id}.`
    //             });
    //         }
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: "Error retrieving Register with id=" + id
    //         });
    //     });
};

exports.findLastTen = (req, res) => {
    Register.findAll({
        order: [['FECHA', 'DESC']],
        limit: 10
    }).then(data => {
        if (data) {
            console.log('Retrieve registers: ' + data.length)
            res.send({ total: data.length, response: data });
        } else {
            res.status(404).send({
                message: `No se puede encontrar el ultimo registro`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: 'Error al recuperar el ultimo registro'
        })
    })
}