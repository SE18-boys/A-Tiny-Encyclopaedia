describe('My First Test', function() {

  it('Test visit', function() {
    cy.viewport(1400,800)
    cy.visit('http://localhost:3000/')
  })
  it('test accurate search',()=>{
    cy.viewport(1400,800)
    cy.get('.ant-input').should('have.attr','placeholder','输入词条')
        .type('肺气肿').should('have.value','肺气肿')
    cy.get('.ant-btn.ant-input-search-button').should('have.attr','type','button')
        .click()
    cy.url().should('contain','Details')
    cy.get('.bk-title.bk-font36.content-title').should('contain','肺气肿')
    cy.get('.content-summary').first().children().first().should('contain','肺气肿是指终末细支气管远端(呼吸细支气管，肺泡管、肺泡囊和肺泡)的气道弹性减退，过度膨胀，充气和肺容积增大或同时伴有气道壁破坏的病理状态。按其发病原因肺气肿有如下几种类型：老年性肺气肿，代偿性肺气肿，间质性肺气肿，灶性肺气肿，旁间隔性肺气肿，阻塞性肺气肿。')
    cy.get('.ant-input').should('have.attr','placeholder','请输入查询词条').first()
        .type('心脏病').should('have.value','心脏病')
    cy.get('.ant-input-suffix')
        .click()
    cy.url().should('contain','Details')
    cy.get('.bk-title.bk-font36').should('contain','心脏病')
  })
  it("Test fuzzy search",()=>{
    cy.viewport(1400,800)
    cy.visit('http://localhost:3000/')
    cy.get('.ant-input').should('have.attr','placeholder','输入词条')
        .type('心脏').should('have.value','心脏')
    cy.get('.ant-btn.ant-input-search-button').should('have.attr','type','button')
        .click()
    cy.get('#穿透性心脏外伤').should('contain','穿透性心脏外伤')
        .click()
    cy.url().should('contain','Details')
    cy.get('.bk-title.bk-font36').should('contain','穿透性心脏外伤')
    cy.visit('http://localhost:3000/')
    cy.get('.ant-input').should('have.attr','placeholder','输入词条')
        .type('血管').should('have.value','血管')
    cy.get('.ant-btn.ant-input-search-button').should('have.attr','type','button')
        .click()
    cy.get('#see_all').should('contain','查看全部')
        .click()
    cy.get('#骨血管瘤').should('contain','骨血管瘤')
        .click()
    cy.url().should('contain','Details')
    cy.get('.bk-title.bk-font36').should('contain','骨血管瘤')

  })

})
