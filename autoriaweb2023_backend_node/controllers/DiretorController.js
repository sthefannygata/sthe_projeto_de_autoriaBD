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
function executarConsulta(sql, params, res, erroMsg) {
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(500).json({ erro: erroMsg, detalhes: err });
    } else {
      res.status(200).json(result);
    }
  });
}

// Rota para buscar todas as diretors      executarConsulta
router.get('/', (req, res) => {
  executarConsulta('SELECT * FROM diretor', [], res, "Erro na consulta de diretors");
});

// Rota para buscar uma diretor específica
router.get("/:id", (req, res) => {
  const id = req.params.id;
  executarConsulta('SELECT * FROM diretor WHERE CodDiretor = ?', [id], res, "Erro na consulta de diretor");
});

// Rota para criar uma nova diretor
router.post('/', (req, res) => {
  const { Nome_diretor} = req.body;
  executarConsulta('INSERT INTO diretor (Nome_diretor) VALUES ( ?)', [Nome_diretor], res, "Erro no cadastro de diretor!");
});

// Rota para deletar uma diretor
router.delete("/:id", (req, res) => {
  const diretorId = req.params.id;
  executarConsulta('DELETE FROM diretor WHERE CodDiretor = ?', [diretorId], res, 'Erro ao deletar diretor');
});

// Rota para atualizar uma diretor
router.put('/', (req, res) => {
  const { id, Nome_diretor} = req.body;
  executarConsulta('UPDATE diretor SET Nome_diretor = ? WHERE CodDiretor = ?', [Nome_diretor, id], res, "Erro ao atualizar diretor");
});

module.exports = router;