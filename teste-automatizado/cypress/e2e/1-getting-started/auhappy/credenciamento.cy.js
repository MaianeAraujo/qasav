it('Cadastrar Novo Fornecedor', ()=>{
    cy.visit('http://localhost:8080/sav-web-1.0/login.faces')

    // Cadastro pessoa física
    cy.get('img[id="j_idt12"]').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.wait(450)
    cy.get('input[id="cpfCnpjCred"]').click().type('945.920.280-23')
    cy.get('button[id="j_idt19"]').click()
    cy.get('input[id="nomeCompleto"]').click().type('Roberto Severino Costa')
    cy.wait(450)
    cy.get('input[id="vetResponsavel"]').click().type('Roberto Severino Costa')
    cy.get('input[id="crmv"]').click().type('11345')
    cy.get('label[id="estadoDoCRMV_label"]').click()
    cy.get('li[id="estadoDoCRMV_11"]').click()
    cy.wait(450)
    cy.get('input[id="foneCelular"]').click().type('(65) 98796-3608')
    cy.get('input[id="emailPF"]').type('roberto.costa@gmail.com')
    cy.get('label[id="tipoFornecedorConfig_label"]').click()
    cy.get('li[id="tipoFornecedorConfig_1"]').click()
    cy.get('label[id="procSite_label"]').click()
    cy.wait(450)
    cy.get("#procSite_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(1) > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").click()
    cy.get("#procSite_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(3) > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").click()
    cy.get("#procSite_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(6) > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").click()
    cy.get("#procSite_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(9) > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").click()
    cy.get("#procSite_panel > div.ui-widget-header.ui-corner-all.ui-selectcheckboxmenu-header.ui-helper-clearfix > a").click()
    cy.get('input[id="cep"]').type('78135-022')
    
    cy.wait(800)
    cy.get('input[id="numEndereco"]').type('180')
    cy.get('#tpEnderecoCombo_label').click()
    cy.get('#tpEnderecoCombo_3').click()
    cy.get('#dcComplemento').click().type('casa')
    cy.get('input[id="numEndereco"]').type('180')
    cy.wait(5000)
    cy.get('input[id="cpf_cnpj"]').click().type('94592028023')
    cy.get('button[id="j_idt165"]').click()
    cy.get('button[id="j_idt165"]').click()
    cy.get('label[id="tpContabancaria_label"]').click()
    cy.get('li[id="tpContabancaria_1"]').click()
    cy.get('label[id="banco_label"]').click()
    cy.get('li[id="banco_82"]').click()
    cy.get("#titular").type('Roberto Severino Costa')
    cy.get('input[id="numeroAgencia"]').type('92881120-7')
    cy.get('id="digitoAgencia"').type('7')
    cy.get('input[id="numeroConta"]').type('0167')
    cy.get('input[id="digitoConta"]').type('0')
    cy.get('input[id="contaPadrao_input"]').click()
    cy.get('button[id="j_idt215"]').click()









    




















    


  



  







})