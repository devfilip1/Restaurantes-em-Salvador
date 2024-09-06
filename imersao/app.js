function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-busca").value;

    console.log(campoPesquisa);

    campoPesquisa = campoPesquisa.toLowerCase();
  
    let resultados = "";
    let titulo = "";
    let descricao = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa))
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">
                ${dado.descricao}
                </p>
        
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `
    }

    if (!resultados)
        resultados = "<p>Resultado não foi encontrado</p>"
    
    section.innerHTML = resultados    
}