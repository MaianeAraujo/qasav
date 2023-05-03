it('Login', ()=> {
    cy.visit('http://localhost:8080/sav-web-1.0/inicio.faces')

    cy.get('input[id="loginInpt"]').type('admin')
  //  cy.xpath('//*[@name="loginInpt"]').type('admin')
    cy.get('input[id="pwd"]').type('1')
    cy.get('button[id="buttonEntrar"]').click()
    cy.wait(450)
    cy.get('.menu-button').should('be.visible').click()
    cy.get('li[id="menuform:optComercial"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li[id="menuform:optComercial"]').click()
    cy.get('li[id="menuform:leads"]').click()
    cy.get('button[id="novoBotao"]').click()
    cy.get('input[id="j_idt178:nome"]').type('Rafaela Aragão')
    cy.get('label[id="j_idt178:slteste_label"]').click()
    cy.get('li[id="j_idt178:slteste_1"]').click()
    cy.get('label[id="j_idt178:raca_label"]').click()
    cy.get('li[id="j_idt178:raca_5"]').click()
    cy.wait(450)
    cy.get('label[id="j_idt178:tipoLead_label"]').click()
    cy.get('li[data-label="Outro(s)"]').click()
    cy.wait(450)
    cy.get('label[id="j_idt178:estadoCombo_label"]').click()
    cy.get('li[data-label="Minas Gerais"]').click()
    cy.wait(450)    
    cy.get('label[id="j_idt178:cidadeCombo_label"]').click()
    cy.get('li[data-label="Belo Horizonte"]').click()
    cy.get('input[id="j_idt178:dataRetorno_input"]').click()
    cy.get('input[id="j_idt178:email"]').type('rafaela_aragao@gmail.com')
    cy.get('label[id="j_idt178:j_idt203"]').click()
    cy.get('input[id="j_idt178:fone1"]').type('31971635287')
    cy.wait(450) 
    cy.get('button[id="j_idt178:gerarLead"]').click()
    




    
    





 
    

})

