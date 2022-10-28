// Itor Carlos Souza Queiroz

//Função para gerar as tabelas quando a página for carregada (não queria colocar as tabelas direto no html)
const carrega = () => {
    const tableMaterias = document.createElement('table');
    const theadMaterias = document.createElement('thead');
    const tbodyMaterias = document.createElement('tbody');
    
    tableMaterias.id = "tableMaterias"

    const rowMaterias = document.createElement('tr');
    
    const headCodigoMateria = document.createElement('th');
    headCodigoMateria.innerHTML = "Codigo da matéria";
    
    const headPeriodo = document.createElement('th');
    headPeriodo.innerHTML = "Periodo";
    
    const headCargaHoraria = document.createElement('th');
    headCargaHoraria.innerHTML = "CH";
    
    const headFrequencia = document.createElement('th');
    headFrequencia.innerHTML = "Frequencia (%)";
    
    const headNota = document.createElement('th');
    headNota.innerHTML = "Nota";
    
    rowMaterias.appendChild(headCodigoMateria);
    rowMaterias.appendChild(headPeriodo);
    rowMaterias.appendChild(headCargaHoraria);
    rowMaterias.appendChild(headFrequencia)
    rowMaterias.appendChild(headNota)
    
    theadMaterias.appendChild(rowMaterias);

    tableMaterias.appendChild(theadMaterias);
    tableMaterias.appendChild(tbodyMaterias);
    
    const tableDadosGerais = document.createElement('table');
    const theadDadosGerais = document.createElement('thead');
    const tbodyDadosGerais = document.createElement('tbody');
    
    const rowDadosGerais = document.createElement('tr');
    
    const headCargaHorariaTotal = document.createElement('th');
    headCargaHorariaTotal.id = "cargaHorariaTotal"
    headCargaHorariaTotal.innerHTML = "Carga Horaria Total";
    
    const headMediaGeralPonderadaCH = document.createElement('th');
    headMediaGeralPonderadaCH.id = "mediaGeralPonderadaCH"
    headMediaGeralPonderadaCH.innerHTML = "Media Geral Ponderada";
    
    const headDesvioPadrao = document.createElement('th');
    headDesvioPadrao.id = "desvioPadrao"
    headDesvioPadrao.innerHTML = "Desvio Padrão";
    
    const headMateriasAprovadas = document.createElement('th');
    headMateriasAprovadas.id = "materiasAprovadas"
    headMateriasAprovadas.innerHTML = "Materias Aprovadas";
    
    const headMateriasReprovadas = document.createElement('th');
    headMateriasReprovadas.id = "materiasReprovadas"
    headMateriasReprovadas.innerHTML = "Materias Reprovadas";

    const headMediaPonderadaPorDepartamento = document.createElement('th')
    headMediaPonderadaPorDepartamento.id = "mediaPonderadaDepartamento"
    headMediaPonderadaPorDepartamento.innerHTML = "Media Ponderada Por Departamento"

    const headTempoCursoPeriodo = document.createElement('th');
    headTempoCursoPeriodo.id = "tempoCursoPeriodo"
    headTempoCursoPeriodo.innerHTML = "Tempo Curso Periodo";
    
    rowDadosGerais.appendChild(headCargaHorariaTotal)
    rowDadosGerais.appendChild(headMediaGeralPonderadaCH)
    rowDadosGerais.appendChild(headDesvioPadrao)
    rowDadosGerais.appendChild(headMateriasAprovadas)
    rowDadosGerais.appendChild(headMateriasReprovadas)
    rowDadosGerais.appendChild(headMediaPonderadaPorDepartamento)
    rowDadosGerais.appendChild(headTempoCursoPeriodo)
    
    const tdCargaHorariaTotal  = document.createElement('td')
    tdCargaHorariaTotal.id = "tdCargaHorariaTotal"
    tdCargaHorariaTotal.innerHTML = ""
    
    const tdMediaGeralPonderadaCH  = document.createElement('td')
    tdMediaGeralPonderadaCH.id = "tdMediaGeralPonderadaCH"
    tdMediaGeralPonderadaCH.innerHTML = ""
    
    const tdDesvioPadrao  = document.createElement('td')
    tdDesvioPadrao.id = "tdDesvioPadrao"
    tdDesvioPadrao.innerHTML = ""
    
    const tdMateriasAprovadas  = document.createElement('td')
    tdMateriasAprovadas.id = "tdMateriasAprovadas"
    tdMateriasAprovadas.innerHTML = ""
    
    const tdMateriasReprovadas  = document.createElement('td')
    tdMateriasReprovadas.id = "tdMateriasReprovadas"
    tdMateriasReprovadas.innerHTML = ""

    const tdMediaPonderadaPorDepartamento = document.createElement('td')
    tdMediaPonderadaPorDepartamento.id = "tdMediaPonderadaPorDepartamento"
    tdMediaPonderadaPorDepartamento.innerHTML = ""

    const tdTempoCursoPeriodo  = document.createElement('td')
    tdTempoCursoPeriodo.id = "tdTempoCursoPeriodo"
    tdTempoCursoPeriodo.innerHTML = ""
    
    theadDadosGerais.appendChild(rowDadosGerais)
    tbodyDadosGerais.appendChild(tdCargaHorariaTotal)
    tbodyDadosGerais.appendChild(tdMediaGeralPonderadaCH)
    tbodyDadosGerais.appendChild(tdDesvioPadrao)
    tbodyDadosGerais.appendChild(tdMateriasAprovadas)
    tbodyDadosGerais.appendChild(tdMateriasReprovadas)
    tbodyDadosGerais.appendChild(tdMediaPonderadaPorDepartamento)
    tbodyDadosGerais.appendChild(tdTempoCursoPeriodo)

    tableDadosGerais.appendChild(theadDadosGerais)
    tableDadosGerais.appendChild(tbodyDadosGerais)
    document.getElementById("tabelaDadosGerais").appendChild(tableDadosGerais)
    document.getElementById("tabela").appendChild(tableMaterias)
}


//função para gerar uma nova linha na tabela
const createRow = () => {
    const rowMateriaNova = document.createElement('tr')

    const tbodyMaterias = document.getElementById("tableMaterias")

    const rowInformationCodigoMateria = document.createElement('td')
    const codigoMateria = document.getElementById('codigoMateria').value
    rowInformationCodigoMateria.innerHTML = codigoMateria.toString().toUpperCase()
    

    const rowInformationPeriodo = document.createElement('td')
    const periodo = document.getElementById("periodo").value
    rowInformationPeriodo.innerHTML = periodo
    

    const rowInformationCargaHoraria = document.createElement('td')
    const cargaHoraria = document.getElementById("carga_horaria").value
    rowInformationCargaHoraria.innerHTML = cargaHoraria
    
    
    const rowInformationFrequencia = document.createElement('td')
    const frequencia = document.getElementById("frequencia").value
    rowInformationFrequencia.innerHTML = frequencia
    

    const rowInformationNota = document.createElement('td')
    const nota = document.getElementById("nota").value
    rowInformationNota.innerHTML = nota

    if(verificaDados(codigoMateria, periodo, nota, cargaHoraria, frequencia)){
        rowMateriaNova.appendChild(rowInformationCodigoMateria)
        rowMateriaNova.appendChild(rowInformationPeriodo)
        rowMateriaNova.appendChild(rowInformationCargaHoraria)
        rowMateriaNova.appendChild(rowInformationFrequencia)
        rowMateriaNova.appendChild(rowInformationNota)
        tbodyMaterias.appendChild(rowMateriaNova)

        //limpa os campos de input apos salvar os dados na tabela

        document.getElementById('codigoMateria').value = ""

        document.getElementById('periodo').value = ""

        document.getElementById('carga_horaria').value = ""
        
        document.getElementById('frequencia').value = ""

        document.getElementById
        ('nota').value = ""

    }
    else{
        openModel()
    }
}


//Função usada para validar os dados, caso algum dado não esteja correta, chama um modal e informa o que há de errado
const verificaDados = (codigoMateria, periodo, nota, cargaHoraria, frequencia) => {

    //const bodyModal = document.getElementById('modal-body')

    const modalBody = document.getElementById("modal-content")

    const divVerificaDados = document.createElement('div')
    divVerificaDados.id = "div_verificaDados"

    if(codigoMateria == ""){
        const pCodigoMateria = document.createElement('p')
        pCodigoMateria.className = "valuesVerification"
        pCodigoMateria.innerHTML = "Codigo da matéria não pode ser nulo!"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pCodigoMateria)

        return false
    }

    if(periodo == ""){
        const pPeriodo = document.createElement('p')
        pPeriodo.className = "valuesVerification"
        pPeriodo.innerHTML = "Periodo não pode ser nulo!"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pPeriodo)

        return false
    }

    if(nota == ""){
        const pNota = document.createElement('p')
        pNota.className = "valuesVerification"
        pNota.innerHTML = "Nota não pode ser nulo!"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pNota)

        return false
    }

    if(nota < 0 || nota > 10){
        const pNota = document.createElement('p')
        pNota.className = "valuesVerification"
        pNota.innerHTML = "Nota tem que ser entre 0 e 10"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pNota)

        return false
    }

    if(frequencia < 0 || frequencia > 10){
        const pFrequencia = document.createElement('p')
        pFrequencia.className = "valuesVerification"
        pFrequencia.innerHTML = "Frequência tem que ser entre 0 e 10"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pFrequencia)

        return false
    }

    if(isNaN(nota)){
        const pNota = document.createElement('p')
        pNota.className = "valuesVerification"
        pNota.innerHTML = "Nota tem que ser um número!"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pNota)

        return false
    }

    if(cargaHoraria == ""){
        const pCargaHoraria = document.createElement('p')
        pCargaHoraria.className = "valuesVerification"
        pCargaHoraria.innerHTML = "Carga Horaria não pode ser vazia!"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pCargaHoraria)

        return false
    }

    if(isNaN(cargaHoraria)){
        const pCargaHoraria = document.createElement('p')
        pCargaHoraria.className = "valuesVerification"
        pCargaHoraria.innerHTML = "Carga Horaria tem que ser número"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pCargaHoraria)

        return false
    }

    if(frequencia == ""){
        const pFrequencia = document.createElement('p')
        pFrequencia.className = "valuesVerification"
        pFrequencia.innerHTML = "Frequência não pode ser vazia!"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pFrequencia)

        return false
    }

    if(isNaN(frequencia)){
        const pFrequencia = document.createElement('p')
        pFrequencia.className = "valuesVerification"
        pFrequencia.innerHTML = "Frequência tem que ser um número"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pFrequencia)

        return false
    }

    if(frequencia < 0 || frequencia > 100){
        const pFrequencia = document.createElement('p')
        pFrequencia.className = "valuesVerification"
        pFrequencia.innerHTML = "Frequência tem que ser entre 0 e 100"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pFrequencia)

        return false
    }

    if(cargaHoraria < 0){
        const pCargaHoraria = document.createElement('p')
        pCargaHoraria.className = "valuesVerification"
        pCargaHoraria.innerHTML = "Carga Horaria tem que ser maior que 0"
        modalBody.appendChild(divVerificaDados)
        divVerificaDados.appendChild(pCargaHoraria)

        return false
    }

    return true
}

//Função que realiza e mostra todos os dados relacionados as materias informadas na tabela
const geraDados = () => {
    
    const quantidadeLinhas = document.getElementsByTagName('tr').length - 2

    const listaMaterias = acessaDadosTabela(quantidadeLinhas)()

    const listaMateriasAprovadas = materiasAprovadas(listaMaterias)
    const listaMateriasReprovadas = materiasReprovadas(listaMaterias)

    const cargaHorariaTotal = somaCargaHoraria(listaMaterias)

    const mediaPonderadaPorD_ = mediaPonderadaPorDiciplina(listaMaterias)(filtrarMateriaParaMedia(listaMaterias).length)()

    console.log(mediaPonderadaPorD_)

    const mediaGeralPonderadaCH = mediaPonderada(listaMaterias)
    
    const mediaNotas = calculaMediaNotas(listaMaterias.map(element => element.nota))

    const valorDesvioPadrao = desvioPadrao(mediaNotas)(listaMaterias)

    const tempoCursoPeriodo = tempoCursoPeriodos(listaMaterias)

    exibeConteudo(cargaHorariaTotal, mediaGeralPonderadaCH, listaMateriasAprovadas, listaMateriasReprovadas, valorDesvioPadrao, mediaPonderadaPorD_, tempoCursoPeriodo)
    
}


//função que coloca os valores calculados em geraDados no HTML
const exibeConteudo = (cargaHorariaTotal, mediaGeralPonderadaCH, listaMateriasAprovadas, listaMateriasReprovadas, valorDesvioPadrao, mediaPonderadaPorD_, tempoCursoPeriodo) => {

    const cargaHorariaTotalElement = document.getElementById('tdCargaHorariaTotal')
    cargaHorariaTotalElement.innerHTML = cargaHorariaTotal

    const cargaMediaGeralPonderadaCHElement = document.getElementById('tdMediaGeralPonderadaCH')
    
    if(!isNaN(mediaGeralPonderadaCH)){
        cargaMediaGeralPonderadaCHElement.innerHTML = mediaGeralPonderadaCH.toFixed(3)
    }
    else {
        cargaMediaGeralPonderadaCHElement.innerHTML = 0
    }

    const listaMateriasAprovadasNoRepeat = [...new Set(listaMateriasAprovadas.map(element => element.codigoMateria))]

    const listaMateriasReprovadasNoRepeat = [...new Set(listaMateriasReprovadas.map(element => element.codigoMateria))]


    const tdMateriasAprovadas = document.getElementById('tdMateriasAprovadas')
    tdMateriasAprovadas.innerHTML = listaMateriasAprovadasNoRepeat.reduce((acc,x) => acc + x + ", ","").slice(0, -2)

    const tdMateriasReprovadas = document.getElementById('tdMateriasReprovadas')
    tdMateriasReprovadas.innerHTML = listaMateriasReprovadasNoRepeat.reduce((acc,x) => acc + x + ", ","").slice(0, -2)

    const tdDesvioPadrao = document.getElementById('tdDesvioPadrao')

    if(!isNaN(valorDesvioPadrao)){
        tdDesvioPadrao.innerHTML = valorDesvioPadrao.toFixed(5)
    }
    else {
        tdDesvioPadrao.innerHTML = 0
    }

    const tdTempoCursoPeriodo = document.getElementById('tdTempoCursoPeriodo')
    tdTempoCursoPeriodo.innerHTML = tempoCursoPeriodo

    const tdMediaPonderadaPorDepartamento = document.getElementById('tdMediaPonderadaPorDepartamento')
    tdMediaPonderadaPorDepartamento.innerHTML = mediaPonderadaPorD_.reduce((acc,x) => acc + x + ", ","").slice(0, -2)

    

}

//Pega todos os elementos do tipo tr, separa as informações e com cada linha monta um objeto referente as informações anteriormente pegas. 
const acessaDadosTabela = (n = 2) => (array = []) => {

    if(n == 0) return array
    else{

        const dados = document.getElementsByTagName('tr')[n].outerText.split("\t")

        const object = {
            "codigoMateria":dados[0],
            "periodo": dados[1],
            "cargaHoraria": Number(dados[2]),
            "frequencia": Number(dados[3]),
            "nota": Number(dados[4]),
            "aprovado": (Number(dados[4]) >= 5 ? true: false)
        }
        return acessaDadosTabela(n-1)([...array,object])

    }

}


//Funções Aux   
const eliminarNumeros = string => string.replace(/[0-9]/g,'')//elimina as string
const somaCargaHoraria = lista => lista.reduce((acc,x) => acc + x.cargaHoraria,0)//soma as cargas horaria
const materiasAprovadas = lista => lista.filter(({aprovado}) => aprovado == true)//retorna as materias com status de aprovado
const materiasReprovadas = lista => lista.filter(({aprovado}) => aprovado == false) //retorna as materias com status de reprovado

const desvioPadrao = media => lista => {//calcula o desvio padrão
    if(lista == []){
        return 0
    }
    else{
        const valores = lista.map(({nota}) => Math.pow(media - nota,2))
        const somaValores = valores.reduce((acc,x) => acc + x,0)/lista.length
        const desvio = Math.sqrt(somaValores)
        return desvio
    }
}

const calculaMediaNotas = lista => {//retorna a media das notas
    if(lista == []){
        return 0
    }
    else{
        const listaNotas = [...lista]//garantir a imutabilidade ao máximo 
        const soma = listaNotas.reduce((acc,x) => acc + x,0)/lista.length
        return soma
    }
}

const filtrarMateriaParaMedia = (lista) =>{//separa as materias por departamento
    const eliminarNumero = (str) => str.replace(/[0-9]/g, '')
    const listaCodigo = lista.map((element)=>element.codigoMateria)
    const listaSemNum = listaCodigo.map((element)=> eliminarNumero(element))
    return [...new Set(listaSemNum)]

}

const mediaPonderadaPorDiciplina = (lista) => (n) => (array = []) =>{//calcula a media de cda departamento
    if(n==0){
        return array
    }
    else{
        const eliminarNumero = (string) => string.replace(/[0-9]/g, '')
        const listaFiltrada = lista.filter((element)=> eliminarNumero(element.codigoMateria) == filtrarMateriaParaMedia(lista)[n-1])
        const str = `${filtrarMateriaParaMedia(lista)[n-1]}: ${mediaPonderada(listaFiltrada)}`
        return mediaPonderadaPorDiciplina(lista)(n-1)([...array,str])
    }
}

const mediaPonderada = (lista) =>{
    const listaMultiplicada = lista.map((element) => element.cargaHoraria*element.nota)
    const somaFinal = listaMultiplicada.reduce((acc, element) => acc+element, 0)
    if(isNaN(somaFinal)) return 0 
    else return somaFinal/somaCargaHoraria(lista).toFixed(3)
}

const tempoCursoPeriodos = (lista) =>{
    const listaPeriodo = lista.map((materia)=> materia.periodo)
    const listaSemRepeticoesPeriodo = [...new Set(listaPeriodo)]

    return listaSemRepeticoesPeriodo.length
}

// Logica para exibir o modal

const modal = document.getElementById("myModal");


const span = document.getElementsByClassName("close")[0];

//Função pra exibir o modal
const openModel = () => {
    modal.style.display = "block"
}

//Função pra fechar o modal
span.onclick = function(){
    modal.style.display = "none"
    const modalBody = document.getElementById("modal-content")
    const div_verificaDados = document.getElementById('div_verificaDados')
    modalBody.removeChild(div_verificaDados)
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    const modalBody = document.getElementById("modal-content")
    const div_verificaDados = document.getElementById('div_verificaDados')
    modalBody.removeChild(div_verificaDados)
  }
} 
