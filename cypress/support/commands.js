Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('#rememberme').click()
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('buscarProd', (nomeProd) => {
    cy.visit('produtos/')
    cy.get('[class="tbay-search form-control input-sm"]').eq(1).type(nomeProd)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
});

Cypress.Commands.add('buscarProdLista', (nomeProd) => {
    cy.visit('produtos/')
    cy.get('.products > .row').contains(nomeProd).click()
});

Cypress.Commands.add('prodCarrinho', (tamanho, cor, quantidade) => {
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
});

Cypress.Commands.add('finalizaCompra', (nome, sobrenome, país, nomeEnd, 
numEnd, cidade, estado, cep, telefone, email, pagamento) => {
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#select2-billing_country-container').contains(país)
    cy.get('#billing_address_1').clear().type(nomeEnd)
    cy.get('#billing_address_2').clear().type(numEnd)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').contains(estado)
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#billing_email').clear().type(email)
    cy.get('#payment_method_' + pagamento).click()
    cy.get('#terms').click()
    cy.get('#place_order').click()

})


    

