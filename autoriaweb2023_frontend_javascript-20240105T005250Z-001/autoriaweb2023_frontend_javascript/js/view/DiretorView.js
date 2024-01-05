/**
 * Renderiza o formulário para criar uma nova Diretor.
 * @return {string} HTML do formulário de criação de Diretor.
 */ 
//renderizarFormulario
// título para Nome_diretor
function renderizarFormularioDiretor() {
    return `
            <form class="mt-3" id="formulario_Diretor">
                <div class="form-group">
                    <label for="Diretor_Nome_diretor">Título do Diretor:</label>
                    <input type="text" class="form-control" id="Diretor_Nome_diretor_formulario"> 
                </div>
                <button type="submit" class="btn btn-primary mt-2">Salvar</button>
            </form>
        `;
  }
  
  /**
   * Renderiza o formulário para atualizar uma Diretor existente.
   * @param {Object} Diretor - A Diretor a ser atualizado.
   * @return {string} HTML do formulário de atualização de Diretor.
   */
  function renderizarFormularioDiretorAtualizar(Diretor) {
      return `
              <form class="mt-3" id="formulario_Diretor_atualizar">
                  <input type="hidden" class="form-control" id="Diretor_id_formulario" value="${Diretor.id}">
                  <div class="form-group">
                      <label for="Diretor_Nome_diretor">Título do Diretor:</label>
                      <input type="text" class="form-control" id="Diretor_Nome_diretor_formulario" value="${Diretor.Nome_diretor}">
                  </div>
                  <button type="submit" class="btn btn-primary mt-2">Salvar</button>
              </form>
          `;
  }
  
    /**
   * Renderiza a tabela de Diretor.
   * @param {Array} Diretor - Lista de Diretor a serem exibidos.
   * @return {string} HTML do tabela de Diretor.
   */
  //renderizarTabela
  function renderizarTabelaDiretor(Diretores) {
    let tabela = `
            <table class="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Título do Diretor</th>
                    </tr>
                </thead>
                <tbody>
        `;
  
    Diretores.forEach((Diretor) => {
      tabela += `
                <tr>
                    <td>${Diretor.Nome_diretor}</td>
                    <td>
                      <button class="excluir-btn" diretor-id=${Diretor.id}>Excluir</button>
                      <button class="atualizar-btn" diretor-atualizar-id=${Diretor.id}>Atualizar</button>
                    </td>
                </tr>
            `;
    });
  
    tabela += `
                </tbody>
            </table>
        `;
  
    return tabela;
  }
  
  const DiretorView = {
      renderizarFormularioDiretor,
      renderizarTabelaDiretor,
      renderizarFormularioDiretorAtualizar
  };
  
  export default DiretorView;
  