const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {
    let query = `SELECT name FROM movies 
    JOIN movie_genre ON movies.id = movie_genre.movie_id 
    JOIN genres ON movie_genre.genre_id = genres.id
    WHERE movies.id = $1 ORDER BY title;`;
    pool.query(query, [req.params.id])
    .then( (result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch( (error) => {
        console.log(error);
        res.sendStatus(500);
    });
}); // end GET route

module.exports = router;