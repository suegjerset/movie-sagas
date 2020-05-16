const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    let query = `SELECT movies.id, title, description, genres.name FROM movies
    JOIN movie_genre ON movies.id = movie_genre.movie_id
    JOIN genres ON movie_genre.genre_id = genres.id
    GROUP BY movies.id, genres.name
    ORDER BY movies.id ASC;`;
    pool.query(query).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;