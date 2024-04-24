/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */


  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      //LOGIN
      cy.visit('')
      cy.get('.icon-user-unfollow').click()
      cy.login('aluno_ebac@teste.com', 'teste@teste.com')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
      //BUSCANDO PRODUTO PELO NOME NA BUSCA
      cy.buscarProd('Abominable Hoodie')
      cy.get('.product_title').should('contain', 'Abominable Hoodie')
      cy.get('.product_title').should('be.visible')
      //Add ao Carrinho
      cy.prodCarrinho('XL', 'Green', 3)
      //BUSCANDO PRODUTO PELO NOME NA BUSCA 2
      cy.buscarProd('Eos V-Neck Hoodie')
      cy.get('.product_title').should('contain', 'Eos V-Neck Hoodie')
      cy.get('.product_title').should('be.visible')
      //Add ao Carrinho
      cy.prodCarrinho('S', 'Orange', 4)  
      ////////////////////////////////////////////////////////

      //BUSCANDO PRODUTO PELA LISTA 1
      cy.buscarProdLista('Arcadio Gym Short')
      cy.get('.product_title').should('contain', 'Arcadio Gym Short')
      cy.get('.product_title').should('be.visible')
      //Add ao carrinho
      cy.prodCarrinho('34', 'Red', 2)
      //BUSCANDO PRODUTO PELA LISTA 2
      cy.buscarProdLista('Argus All-Weather Tank')
      cy.get('.product_title').should('contain', 'Argus All-Weather Tank')
      cy.get('.product_title').should('be.visible')
      cy.prodCarrinho('M', 'Gray', 1)
      //FINALIZANDO COMPRA
      cy.finalizaCompra('Leonardo', 'Da Silva', "Brasil", 'Av Paulista', '1374', 'São Paulo', 'São Paulo',
    '01310-100', '999129904', 'leonardo@ebac.com', 'cheque')
      cy.get('.woocommerce-notice').should('contain', 'Obrigado')   
                   
        
  });


})