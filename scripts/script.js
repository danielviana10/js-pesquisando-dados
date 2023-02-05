function procuraSobremesa(valorDoInput) {
    const textoPesquisa = valorDoInput.toLowerCase();
    const lista = listaDeSobremesas
    // console.log(texoPesquisa)
    // console.log(lista)

    const pesquisaFiltro = lista.filter((element) => {
        const filtroPrimeiraFase = element.nome.toLowerCase(textoPesquisa);
        const filtroSegundaFase = filtroPrimeiraFase.includes(textoPesquisa);
        
        return filtroSegundaFase
    })
    return pesquisaFiltro;
};