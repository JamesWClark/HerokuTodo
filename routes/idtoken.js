const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const payload = req.payload;
    console.log('got it ok');
    res.sendStatus(201);
});

module.exports = router;