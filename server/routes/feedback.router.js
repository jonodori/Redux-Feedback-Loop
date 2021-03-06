const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) => {
    console.log('GET /api/feedback');
    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error => {
        console.log('Error GET /api/feedback', error)
        res.sendStatus(500);
    }))
})

router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding Feedback`, newFeedback);
    
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4)`;
                pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments]) 
        .then(result => {
        res.sendStatus(201);
        })
        .catch(error => {
        console.log(`Error adding new feedback`, error);
        res.sendStatus(500);
        });
    });

router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/feedback', error);
        res.sendStatus(500);
    })
});


module.exports = router;

