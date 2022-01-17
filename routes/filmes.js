const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const mysql = require('../mysql').pool;

const jsonParser = bodyParser.json();

/**
 * @swagger
 * components:
 *   schemas:
 *     Filmes:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - release_year
 *         - language
 *         - lenght
 *         - rating 
 *       properties:
 *         id:
 *           type: int
 *           description: Id do filme
 *         title:
 *           type: string
 *           description: Titulo do filme
 *         release_year:
 *           type: int
 *           description: Ano de lançamento
 *         language:
 *           type: string
 *           description: Lingua do filme
 *         lenght:
 *           type: int
 *           description: Duração do filme
 *         rating:
 *           type: double
 *           description: Nota do filme 
 *       example:
 *         filme_id: 1
 *         title: The Shawshank Redemption
 *         release_year: 1994
 *         language: Inglês 
 *         lenght: 142
 *         rating: 9.3
 */

/**
 * @swagger
 * tags:
 *   name: Filmes
 *   description: API Filmes
 */

/**
 * @swagger
 * /filmes:
 *   get:
 *     summary: Retorna a lista de filmes
 *     tags: [Filmes]
 *     responses:
 *       200:
 *         description: A lista de filmes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Filmes'
 *       500:
 *         description: Some server error
 */

router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            'SELECT * FROM Filme;',
            (error, result, fields) => {
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(200).send({ resultado: result });
            }
        )
    });
});

/**
 * @swagger
 * /filmes/{id_filme}:
 *   get:
 *     summary: Retorna um filme especifico
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id_filme
 *         schema:
 *           type: string
 *         required: true
 *         description: O id do filme
 *     responses:
 *       200:
 *         description: Filme especifico
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Filmes'
 *       400:
 *         description: Filme não encontrado
 *       500:
 *         description: Some server error
 */
router.get('/:id_filme', (req, res, next) => {
    const id = req.params.id_filme;
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            'SELECT * FROM Filme WHERE id = ?;', [id],
            (error, result, fields) => {
                console.log(result.length);
                if (error) {
                    return res.status(500).send({ error: error });
                }
                if (result.length == 0){
                    return res.status(404).send();
                }
                return res.status(200).send({ resultado: result });
            }
        )
    });
});

/**
 * @swagger
 * /filmes:
 *   post:
 *     summary: Insere um filme
 *     tags: [Filmes]
 *     requestBody:       
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filmes'
 *      
 *     responses:
 *       200:
 *         description: Filme especifico
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Filmes'
 *       500:
 *         description: Some server error
 */
router.post('/', jsonParser, (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            'INSERT INTO Filme (id, title, release_year, language, lenght, rating) VALUES (?, ?, ?, ?, ?, ?);', [req.body.filme_id, req.body.title, req.body.release_year, req.body.language, req.body.lenght, req.body.rating],
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

/**
 * @swagger
 * /filmes:
 *   put:
 *     summary: Atualiza um filme
 *     tags: [Filmes]
 *     requestBody:       
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Filmes'
 *      
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Filmes'
 *       500:
 *         description: Some server error
 */
router.put('/', jsonParser, (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            `UPDATE Filme 
                SET title          = ?, 
                    release_year   = ?, 
                    language       = ?, 
                    lenght         = ?, 
                    rating         = ?   
                    WHERE id = ?`, [req.body.title, req.body.release_year, req.body.language, req.body.lenght, req.body.rating, req.body.id],
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

/**
 * @swagger
 * /filmes/{id_filme}:
 *   delete:
 *     summary: Deleta um filme
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id_filme
 *         schema:
 *           type: string
 *         required: true
 *         description: O id do filme
 *      
 *     responses:
 *       200:
 *         description: Filme removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                 $ref: '#/components/schemas/Filmes'
*       500:
 *         description: Some server error
 */
router.delete('/:id_filme', (req, res, next) => {
    const id = req.params.id_filme;
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            `DELETE FROM Filme WHERE id = ?`, [id],
            (error, result, fields) => {
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(202).send({ mensagem: "Filme removido com sucesso" });
            }
        )
    });
});

module.exports = router;