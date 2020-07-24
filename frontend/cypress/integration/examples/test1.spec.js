describe('My First Test', function() {

  it('Test visit', function() {
    cy.visit('http://localhost:3000/')
  })
  it('test search',()=>{
    cy.get('.ant-input').should('have.attr','placeholder','输入词条')
        .type('肺气肿').should('have.value','肺气肿')
    cy.get('.ant-btn.ant-input-search-button').should('have.attr','type','button')
        .click()
    cy.url().should('contain','Details')
    cy.get('.bk-title.bk-font36').should('contain','肺气肿')
  })

})
