const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    console.log( 'in GET /movies' );
    let query = `SELECT * FROM movies ORDER BY movies.id ASC;`;
    pool.query(query)
    .then( (result) => {
        res.send(result.rows);
    }).catch( (error) => {
        console.log(error);
        res.sendStatus(500);
    });
}); // end GET request

router.put('/:id', (req, res) => {
    console.log( 'in PUT /movies' );
    let movieId = req.params.id;
    let query = `
    UPDATE movies 
    SET title = $1, description = $2 
    WHERE id = $3;`; 
    pool.query(query, [req.body.title, req.body.description, movieId])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
}); // end PUT route


module.exports = router;