describe('Cadastro nova regional', () => {
    it.skip('Cadastro pessoa física', () =>{
        cy.visit('http://localhost:8080/sav-web-1.0/login.faces')
        

        cy.get('input[id="loginInpt"]').type('admin')
        cy.get('input[id="pwd"]').type('1')
        cy.get('button[id="buttonEntrar"]').click()
        
        cy.get('.menu-button').should('be.visible').click()
        cy.wait(450)
        cy.get('li[id="menuform:optCadastros"]').click()
        cy.get('li[id="menuform:reg"]').click()
        cy.get('button[id="incluirRegional"]').click()

        cy.get('label[for="pessoaFisicaJuridica:0"]').click()
        cy.get('input[id="cpf"]').click().type('61147443653')
        cy.get('input[id="nomeCompleto"]').click().type('Vicente de Paulo Barros')
        cy.get('input[id="docIdentidade"]').click().type('472033803')
        
        cy.get('input[id="contato2"]').click().type('Marcos Eduardo Abi Rached Silva')
        cy.get('input[id="foneCelular"]').click().type('31993610013')
        cy.get('input[id="email"]').click().type('vicente.barros@gmail.com')
        cy.wait(450)

        cy.contains('a', "Incluir endereço").click()
        cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').click()
        cy.get('li[id="enderecoForm:tpEnderecoCombo_2"]').click()
        cy.wait(450)
        cy.get('input[id="enderecoForm:cep"]').click().type('30350080')
        cy.get('input[id="enderecoForm:numEndereco"]').type('871')
        cy.get('label[id="enderecoForm:estadoCombo_label"]').click()
        cy.get('li[id="enderecoForm:estadoCombo_13"]').click()
        cy.wait(450)
        cy.get('label[id="enderecoForm:cidadeCombo_label"]').click()
        cy.get('li[id="enderecoForm:cidadeCombo_138"]').click()
        cy.get('button[id="enderecoForm:btnOk"]').click()
        cy.get('#btnSalvar > .ui-button-text').click()


    })


    it('Cadastro pessoa jurídica', () =>{
        cy.visit('http://localhost:8080/sav-web-1.0/login.faces')
        

        cy.get('input[id="loginInpt"]').type('admin')
        cy.get('input[id="pwd"]').type('1')
        cy.get('button[id="buttonEntrar"]').click()
        
        cy.get('.menu-button').should('be.visible').click()
        cy.wait(450)
        cy.get('li[id="menuform:optCadastros"]').click()
        cy.get('li[id="menuform:reg"]').click()
        cy.get('button[id="incluirRegional"]').click()

        cy.get('input[id="cnpj"]').click().type('86537345000102')
        cy.get('input[id="razaoSocial"]').click().type('Petzlandia')
        cy.get('input[id="inscEstadual"]').click().type('545961779556')
        cy.get('input[id="contato"]').click().type('Fabíola Aguida de Abreu Santos')
        cy.get('input[id="fone1"]').click().type('12989327105')
        cy.get('input[id="emailPJ"]').click().type('presidencial@gmail.com')

        cy.contains('a', "Incluir endereço").click()
        cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').click()
        cy.get('li[id="enderecoForm:tpEnderecoCombo_3"]').click()
        cy.wait(450)
        cy.get('input[id="enderecoForm:cep"]').click().type('12226721')
        cy.get('input[id="enderecoForm:numEndereco"]').click().type('540')
        cy.get('button[id="enderecoForm:btnOk"]').click()
        cy.wait(450)
        cy.get('button[id="btnSalvar"]').click()




    })    

})