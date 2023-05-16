/// <reference types="cypress"/>
import simulacao, { simulacaoUI } from "../../../support/Simulacao";

import massaDadosFactory from "../factories/MassaDadosFactory";
// import moment from "moment/moment";
import { menuUI } from "../../../support/MenuCustons"






describe('Simulação de Plano', () => {
    var dados = massaDadosFactory.massaDados();

    beforeEach(() => {
        cy.clearLocalStorage()
        cy.viewport(1440, 800);
        cy.visit('http://localhost:8080/sav-web-1.0/login.faces')

        var loginUsuario = {
            nome: 'admin',
            senha: '1',
        }
        cy.get('input[id="loginInpt"]').type(loginUsuario.nome)
         cy.get('input[id="pwd"]').type(loginUsuario.senha)
         cy.get('button[id="buttonEntrar"]').click()


    

    })

    it('Nova simulação', () => {
        menuUI.acessarMenu()
        menuUI.menuComercial()
        simulacaoUI.selecionarSimulacaoWeb()
        simulacaoUI.clicarBotaoNovaSimulacao()
        simulacaoUI.preencherDadosNovaSimulacao(
            dados.regionais.regional03,
            dados.consultorRegional03.consultor02,
            dados.especie.canino,
            dados.racaCanino.raca03,
            dados.inserirNomeProponente.nomeCompletoP,
            dados.municipios.municipioMG,
            dados.emails.emailProponente)
        simulacaoUI.clicarBotaoSalvar()
        simulacaoUI.esperarSalvar()
        
        
               

    })

    it('Abrir Adesao', () => {
        menuUI.acessarMenu()
        menuUI.menuComercial()
        simulacaoUI.selecionarSimulacaoWeb()
        simulacaoUI.abrirNovaAdesao(dados.inserirNomeProponente.nomeCompletoP)
        simulacaoUI.selecionarPlano(dados.planos.auLove)
        simulacaoUI.preencherDadosAnimal(dados.nomeParaPet.nomeComPet,
            dados.sexoPet.sexo02)
        simulacaoUI.preencherDadosContratante(dados.dadosPessoais.cpf,
            dados.sexoContratante.feminino,
            dados.formaPagamento.boleto)
        simulacaoUI.clicarSelecionarArquivos(dados.enviarArquivos.arquivoPDF)
       
        

    })

    

    
})

    







    
