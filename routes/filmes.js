const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Utilização do GET em uma rota de filmes'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Utilização do POST em uma rota de filmes'
    });
});

router.get('/:id_filme', (req, res, next) => {
    const id = req.params.id_filmes
    res.status(200).send({
        mensagem: 'ID',
        id_filmes : id

    });
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Utilização do PATCH em uma rota de filmes'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Utilização do DELETE em uma rota de filmes'
    });
});

module.exports = router;