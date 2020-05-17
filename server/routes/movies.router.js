const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    let query = `SELECT * FROM movies;`;
    pool.query(query)
    .then( (result) => {
        res.send(result.rows);
    }).catch( (error) => {
        console.log(error);
        res.sendStatus(500);
    });
}); // end GET request

module.exports = router;