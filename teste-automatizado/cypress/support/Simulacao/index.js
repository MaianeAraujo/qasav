import { elemento } from "../MenuCustons/elementos";
import { elementos } from "./elementos";




class SimulacaoUI {
    selecionarSimulacaoWeb() {
        cy.wait(500)
        cy.get(elementos.selectMenuSimulacao).click()
    }

    clicarBotaoNovaSimulacao() {
        cy.get(elementos.buttonNovaSimulacao).click()
    }

    preencherDadosNovaSimulacao(nomeRegional, nomeConsultor, especie, nomeRaca, nomeProponente, municipio, emailProponente) {
        cy.get(elementos.selectRegional).click()
        cy.get(elementos.inputNomeRegional).type(nomeRegional)
        cy.get(elementos.searchResultRegional)
            .click()
            .wait(500)
        cy.get(elementos.selectConsultor).click()
        cy.get(elementos.inputNomeConsultor).type(nomeConsultor)
        cy.get(elementos.searchResultConsulor).click()
            .wait(500)
        cy.get(elementos.selectEspecie).click()
        cy.get(elementos.searchResultEspecie)
            .contains(especie)
            .click()
            .wait(500)
        cy.get(elementos.selectRaca).click()
        cy.get(elementos.insertNomeRaca).type(nomeRaca)
        cy.get(elementos.searchResultRaca).click()
        cy.get(elementos.insertNascimento).type("02/2022")
            .wait(1000)
        cy.get(elementos.inputValorAdesao).type("14000")
        cy.get(elementos.insertNomeProponente).type(nomeProponente)
            .wait(500)
        cy.get(elementos.insertMunicipio).click()
        cy.get(elementos.inertNomeMunicipio).type(municipio)
        cy.get(elementos.searchResultNomeMunicipio)
            .contains(municipio)
            .click()
        cy.get(elementos.insertEmail).type(emailProponente)
            .wait(450)
        cy.get(elementos.insertTelCelular).type("31983495287")
            .wait(600)
    }

    clicarBotaoSalvar() {
        cy.get(elementos.buttonSalvarSimulacao).click({ force: true })
    }

    esperarSalvar() {
        cy.intercept("POST", "**/paginas/simulacao/controle.faces**")
            .as('salvar')
    }

    abrirNovaAdesao() {
        cy.wait(500)
        cy.get(elementos.insertPesquisarNomeProponente).type("BERNITA BOSCO")
            .wait(500)
        cy.get(elementos.buttonPesquisarNomeProponente).click()
        cy.get('[class="ui-widget-content ui-datatable-even"]')
            .contains("BERNITA BOSCO")
            .next()
            .next()
            .next()
            .contains("Abrir adesão")
            .click({ force: true })
            .wait(500)

    }

    selecionarPlano() {
        cy.wait(500)
        cy.contains('div[class="p-3 h-full"]', "Au! Love")
            .find("button")
            .click()
            .wait(500)


    }

    preencherDadosAnimal(nomePet, sexoAnimal) {
        cy.get(elementos.inputNomePet).type(nomePet)
        cy.get(elementos.inputDescPelagem).type("branco e marrom")
        cy.get(elementos.selectSexoPet).click()
        cy.get(elementos.inputSexoAnimal).type(sexoAnimal)
        cy.get(elementos.searchResultSexoAnimal)
            .contains(sexoAnimal)
            .click()
            .wait(450)
        cy.get(elementos.inputPesoPet).click().type("8")
        cy.get(elementos.buttonConfDadosAnimal).click()
    }

    preencherDadosContratante(cpf, sexoTutor, boleto) {
        cy.get(elementos.inputCpf).type(cpf)
        cy.get(elementos.inputRgContratante).type("18797349")
        cy.get(elementos.selectSexoContratante).click()
        cy.get(elementos.inputSexoContratante).type(sexoTutor)
        cy.get(elementos.searchResulSexoContratante)
            .contains(sexoTutor)
            .click()
            .wait(450)
        cy.get(elementos.inputProfissao)
            .click()
            .type("Recepcionista de banco")
            .click()
        cy.get(elementos.inputTelefone)
            .click()
            .type("3132999999")
        cy.get(elementos.inputDataNascimento)
            .click()
            .type("18041995")
            .wait(450)
        cy.get(elementos.selectFormaPagamento).click()
        cy.get(elementos.inputFormaPagamento).type(boleto)
        cy.get(elementos.searchResultFormaPagamento)
            .contains(boleto)
            .click()
        cy.get(elementos.buttonConfDadosContratante).click()
        cy.get(elementos.inputCep)
            .click()
            .type("32044260")
            .wait(1000)
        cy.get(elementos.inputComplemento)
            .click()
            .type("ap 202 bl 01")
        cy.get(elementos.inputNumeroLogradouro)
            .type("88")
        cy.get(elementos.buttonConfEndereco)
            .contains("Confirmar endereço")
            .click()
    }

    clicarSelecionarArquivos(nomeArquivo) {
        cy.contains("Selecionar arquivos").click()
        cy.get(elementos.selectArquivo)
            .attachFile(nomeArquivo)
        cy.get(elementos.selectTipoArquivo).click()
        cy.get(elementos.searchResultTipoArquivo).click()
        cy.get(elementos.selectOptionsAquivo)
            .contains("Documento de identificação (CNH, RG, CPF)")
            .click()
        cy.get(elementos.buttonConfArquivos).click()
        cy.get(elementos.buttonAlertaArquivo).click()
    }






}

class SimulacaoAPI { }
const Simulacao = {
    simulacaoUI: new SimulacaoUI(),
    simulacaoAPI: new SimulacaoAPI(),
};
export default Simulacao;