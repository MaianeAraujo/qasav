/// <reference types="cypress"/>
import { menuUI } from "../../../support/MenuCustons"
import massaDadosFactory from "../factories/MassaDadosFactory";
import simulacao, { simulacaoUI } from "../../../support/Simulacao";
import { elementos } from "../../../support/Simulacao/elementos";



describe('Analisar cadastro', () => {

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

    it('Acessar tela cadastro', () => {
        menuUI.acessarMenu()
        menuUI.menuPosVendas()
        simulacaoUI.selecionarAnaliseCadastral()
        cy.get(elementos.selectMenuPVendas).click()
        cy.get(elementos.inputNomeDoTutor)
            .click()
            .type("BRANDYN")
        cy.get(elementos.buttonPesquisarAnaliseCadastral)
        .click()
        .wait(500)
        cy.get(elementos.buttonAcoesAnaliseCadastral).click()
        cy.xpath('//*[. ="Analisar"][@tabindex="-1"]').click()
        cy.xpath('//*[. ="Ações"][@class="ui-button-text ui-c"]').click()
        cy.get(elementos.selectAprovar)
            .click()
            .wait(500)
        cy.get(elementos.inputObservacaoAprovar)
            .click()
            .type("teste")
        cy.contains("button", "APROVAR").click()
        

    })





})