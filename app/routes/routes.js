module.exports = app => {
    const registers = require('../controllers/register.controller.js');
    const router = require('express').Router();

    router.get('/', registers.findOne);
    router.get('/last-ten', registers.findLastTen);

    app.use('/api/v1', router);
};