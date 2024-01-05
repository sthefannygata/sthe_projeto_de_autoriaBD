const express = require('express');
const router = express.Router();
const db = require('../util/db');
const verificarToken = require('../util/VerificaToken');

/**
 * Executa uma consulta no banco de dados e envia uma resposta.
 * @param {string} sql - A consulta SQL a ser executada.
 * @param {Array} params - Os parâmetros para a consulta SQL.
 * @param {Object} res - O objeto de resposta do Express.
 * @param {string} erroMsg - Mensagem de erro para ser enviada em caso de falha.
 */
function executarConsultaAtor(sql, params, res, erroMsg) {
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(500).json({ erro: erroMsg, detalhes: err });
    } else {
      res.status(200).json(result);
    }
  });
}

// Rota para buscar todas as gêneros       //executarConsulta
router.get('/', (req, res) => {
  executarConsultaAtor('SELECT * FROM gênero', [], res, "Erro na consulta de gêneros");
});

// Rota para buscar uma gênero específica
router.get("/:id", (req, res) => {
  const id = req.params.id;
  executarConsultaAtor('SELECT * FROM gênero WHERE CodGenero = ?', [id], res, "Erro na consulta de gênero");
});

// Rota para criar uma nova gênero
router.post('/', (req, res) => {
  const { NomeGenero} = req.body;
  executarConsultaAtor('INSERT INTO gênero (NomeGenero) VALUES ( ?)', [NomeGenero], res, "Erro no cadastro de gênero!");
});

// Rota para deletar uma gênero
router.delete("/:id", (req, res) => {
  const gêneroId = req.params.id;
  executarConsultaAtor('DELETE FROM gênero WHERE CodGenero = ?', [gêneroId], res, 'Erro ao deletar gênero');
});

// Rota para atualizar uma gênero
router.put('/', (req, res) => {
  const { id, NomeGenero} = req.body;
  executarConsultaAtor('UPDATE gênero SET NomeGenero = ? WHERE CodGenero = ?', [NomeGenero, id], res, "Erro ao atualizar gênero");
});

module.exports = router;