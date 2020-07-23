describe('My third test',function () {
   it('test routers',()=>{
       cy.visit('http://localhost:3000/')
       cy.get('#signIn').should('contain','登录').click()
       cy.url().should('eq','http://localhost:3000/SignUp')
       cy.get('#logo').click()
       cy.url().should('eq','http://localhost:3000/')
       cy.get('#add_entry').should('contain','创建词条')
           .click();
       cy.url().should('eq','http://localhost:3000/AddEntry')
       cy.get('#logo').click()
       cy.url().should('eq','http://localhost:3000/')
   })
})
