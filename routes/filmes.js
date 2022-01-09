const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const mysql = require('../mysql').pool;

const jsonParser = bodyParser.json();

router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            'SELECT * FROM filmes;',
            (error, result, fields) => {
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(200).send({ resultado: result });
            }
        )
    });
});

router.get('/:id_filme', (req, res, next) => {
    const id = req.params.id_filme;
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            'SELECT * FROM filmes WHERE filme_id = ?;', [id],
            (error, result, fields) => {
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(200).send({ resultado: result });
            }
        )
    });
});

router.post('/', jsonParser, (req, res, next) => {    
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            'INSERT INTO filmes (filme_id, title, release_year, language, lenght, rating) VALUES (?, ?, ?, ?, ?, ?);', [req.body.filme_id, req.body.title, req.body.release_year, req.body.language, req.body.lenght, req.body.rating],
            (error, result, fields) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error, response: null });
                }
                return res.status(202).send({ mensagem: "Filme inserido com sucesso" });
            }
        )
    });
});

router.put('/', jsonParser, (req, res, next) => {    
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            `UPDATE filmes 
                SET title          = ?, 
                    release_year   = ?, 
                    language       = ?, 
                    lenght         = ?, 
                    rating         = ?   
                    WHERE filme_id = ?`, [req.body.title, req.body.release_year, req.body.language, req.body.lenght, req.body.rating, req.body.filme_id],
            (error, result, fields) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error, response: null });
                }
                return res.status(201).send({ mensagem: "Filme atualizado com sucesso" });
            }
        )
    });
});

router.delete('/:id_filme', (req, res, next) => {
    const id = req.params.id_filme;
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            `DELETE FROM filmes WHERE filme_id = ?`, [id],
            (error, result, fields) => {
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(202).send({mensagem: "Filme removido com sucesso" });
            }
        )
    });
});

module.exports = router;