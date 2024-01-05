import DiretorView from "../view/DiretorView.js";
import { API_BASE_URL } from "../config/config.js";

/**
 * Renderiza o formulário de Diretor.
 * @param {HTMLElement} componentePrincipal - Elemento principal onde o formulário será renderizado.
 */ //renderizarDiretorFormulario
function renderizarDiretorFormulario(componentePrincipal) {
  componentePrincipal.innerHTML = DiretorView.renderizarFormularioDiretor();
  document.getElementById("formulario_Diretor").addEventListener("submit", cadastrarDiretor);
}
//descricaodescricaodescricaodescricaodescricaodescricaodescricaodescricaodescricaodescricao
/**
 * Cadastra uma nova Diretor.
 * @param {Event} event - Evento do formulário.
 */
async function cadastrarDiretor(event) {
  event.preventDefault();
  const DiretorValor = document.getElementById("Diretor_Nome_diretor_formulario").value;
  const novaDiretor = { Nome_diretor: DiretorValor};
 //diretor
  try {
    await fetch(`${API_BASE_URL}/diretor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaDiretor),
    }); //renderizarListaDiretor
    const componentePrincipal = document.querySelector("#conteudo_principal");
    await renderizarListaDiretor(componentePrincipal);
  } catch (error) {
    console.error("Erro ao adicionar Diretor:", error);
  }
}
/**
 * Renderiza a lista de diretor.
 * @param {HTMLElement} componentePrincipal - Elemento principal onde a lista será renderizada.
 */
async function renderizarListaDiretor(componentePrincipal) {
  try {
    const response = await fetch(API_BASE_URL + "/diretor");
    const diretorBD = await response.json(); 

    const diretor = diretorBD.map((row) => {
      return {
        id: row.CodDiretor,
        Nome_diretor: row.Nome_diretor,
      };
    });
    componentePrincipal.innerHTML = DiretorView.renderizarTabelaDiretor(diretor);
    inserirEventosExcluir();
    inserirEventosAtualizar();
  } catch (error) {
    console.error("Erro ao buscar diretor:", error);
  }
}

/**
 * Adiciona eventos de clique aos botões de exclusão de Diretor.
 * Cada botão, quando clicado, aciona a função de exclusão de Diretor correspondente.
 */
function inserirEventosExcluir() {
  const botoesExcluir = document.querySelectorAll(".excluir-btn");
  botoesExcluir.forEach((botao) => {
    botao.addEventListener("click", function () {
      const DiretorId = this.getAttribute("diretor-id");
      excluirDiretor(DiretorId);
    });
  });
}

/**
 * Adiciona eventos de clique aos botões de atualização de Diretor.
 * Cada botão, quando clicado, aciona a função de buscar a Diretor específica para atualização.
 */
function inserirEventosAtualizar() {
  const botoesAtualizar = document.querySelectorAll(".atualizar-btn");
  botoesAtualizar.forEach((botao) => {
    botao.addEventListener("click", function () {
      const DiretorId = this.getAttribute("diretor-atualizar-id");
      buscarDiretor(DiretorId);
    });
  });
}

/**
 * Exclui uma Diretor específica com base no ID.
 * Após a exclusão bem-sucedida, a lista de diretor é atualizada.
 * @param {string} id - ID da Diretor a ser excluída.
 */
async function excluirDiretor(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/diretor/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Erro ao excluir a Diretor");
    const componentePrincipal = document.querySelector("#conteudo_principal");
    renderizarListaDiretor(componentePrincipal);
  } catch (error) {
    console.error("Erro ao excluir a Diretor:", error);
  }
}

/**
 * Busca uma Diretor específica para atualização, com base no ID.
 * Após encontrar a Diretor, renderiza o formulário de atualização.
 * @param {string} id - ID da Diretor a ser buscada.
 */
async function buscarDiretor(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/diretor/${id}`);
    const diretorBD = await response.json();
    if (diretorBD.length <= 0) return;

    const Diretor = diretorBD.map(row => ({
      id: row.CodDiretor,
      Nome_diretor: row.Nome_diretor,
    }))[0];

    const componentePrincipal = document.querySelector("#conteudo_principal");
    componentePrincipal.innerHTML = DiretorView.renderizarFormularioDiretorAtualizar(Diretor);
    document.getElementById("formulario_Diretor_atualizar").addEventListener("submit", atualizarDiretor);
  } catch (error) {
    console.error("Erro ao buscar diretor:", error);
  }
}

/**
 * Atualiza uma Diretor específica.
 * A função é acionada pelo evento de submit do formulário de atualização.
 * @param {Event} event - O evento de submit do formulário.
 */
async function atualizarDiretor(event) {
  event.preventDefault();

  const idValor = document.getElementById("Diretor_id_formulario").value;
  const DiretorValor = document.getElementById("Diretor_Nome_diretor_formulario").value;
  const Diretor = {id: idValor, Nome_diretor: DiretorValor};

  try {
    const response = await fetch(`${API_BASE_URL}/diretor`, {
      method: "PUT",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(Diretor),
    });

    if (!response.ok) {
      throw new Error("Falha ao atualizar a Diretor");
    }
    const componentePrincipal = document.querySelector("#conteudo_principal");
    renderizarListaDiretor(componentePrincipal);
  } catch (error) {
    console.error("Erro ao atualizar Diretor:", error);
  }
}

const DiretorController = {
  renderizarDiretorFormulario,
  cadastrarDiretor,
  renderizarListaDiretor,
  excluirDiretor,
};

export default DiretorController;
