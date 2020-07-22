describe('My third test',function () {
    it('test register success',()=>{
        cy.visit('http://localhost:3000/')
        cy.get('#signIn').should('contain','登录').click()
        cy.url().should('eq','http://localhost:3000/SignUp')
        cy.get('#register').should('contain','现在注册!')
            .click()
        cy.get('#signIn_email').type('2529230361@qq.com')
            .should('have.value','2529230361@qq.com')
        cy.get('#signIn_username').type('12345678')
            .should('have.value','12345678')
        cy.get('#signIn_password').type('1234567')
            .should('have.value','1234567')
        cy.get('#signIn_confirm').type('1234567')
            .should('have.value','1234567')
        cy.get('.ant-btn.login-form-button')
            .should('have.attr','type','submit')
            .click()
        cy.url().should('eq','http://localhost:3000/')
        cy.get('#signIn').should('contain','登录').click()
        cy.url().should('eq','http://localhost:3000/SignUp')
        cy.get('#normal_login_username').type('12345678')
            .should('have.value','12345678')
        cy.get('#normal_login_password').type('1234567')
            .should('have.value','1234567')
        cy.get('.ant-btn.login-form-button')
            .should('have.attr','type','submit')
            .click()
        cy.url().should('eq','http://localhost:3000/')
        cy.get('#username').should('contain','Hi,')
    })

    it('test register failure case one',()=>{
        cy.visit('http://localhost:3000/')
        cy.get('#signIn').should('contain','登录').click()
        cy.url().should('eq','http://localhost:3000/SignUp')
        cy.get('#register').should('contain','现在注册!')
            .click()
        cy.get('#signIn_email').type('2529230361@qq.com')
            .should('have.value','2529230361@qq.com')
        cy.get('#signIn_username').type('wy122963')
            .should('have.value','wy122963')
        cy.get('#signIn_password').type('1234567')
            .should('have.value','1234567')
        cy.get('#signIn_confirm').type('1234567')
            .should('have.value','1234567')
        cy.get('.ant-btn.login-form-button')
            .should('have.attr','type','submit')
            .click()
        cy.url().should('eq','http://localhost:3000/SignUp')
        cy.get('#signIn_email')
            .should('have.value','2529230361@qq.com')
        cy.get('#signIn_username')
            .should('have.value','wy122963')
        cy.get('#signIn_password')
            .should('have.value','1234567')
        cy.get('#signIn_confirm')
            .should('have.value','1234567')
            .wait(2000)
    })
    it('test register failure case two',()=>{
        cy.visit('http://localhost:3000/')
        cy.get('#signIn').should('contain','登录').click()
        cy.url().should('eq','http://localhost:3000/SignUp')
        cy.get('#register').should('contain','现在注册!')
            .click()
        cy.get('#signIn_email').type('2529230361')
            .should('have.value','2529230361')
        cy.get('#signIn_username').type('wy12296')
            .should('have.value','wy12296')
        cy.get('#signIn_password').type('12345678')
            .should('have.value','12345678')
        cy.get('#signIn_confirm').type('12345678')
            .should('have.value','12345678')
        cy.get('.ant-btn.login-form-button')
            .should('have.attr','type','submit')
            .click()
        cy.url().should('eq','http://localhost:3000/SignUp')
        cy.get('#signIn_email')
            .should('have.value','2529230361')
        cy.get('#signIn_username')
            .should('have.value','wy12296')
        cy.get('#signIn_password')
            .should('have.value','12345678')
        cy.get('#signIn_confirm')
            .should('have.value','12345678')
            .wait(2000)
    })
    it('test register failure case three',()=>{
        cy.visit('http://localhost:3000/')
        cy.get('#signIn').should('contain','登录').click()
        cy.url().should('eq','http://localhost:3000/SignUp')
        cy.get('#register').should('contain','现在注册!')
            .click()
        cy.get('#signIn_email').type('2529230361@qq.com')
            .should('have.value','2529230361@qq.com')
        cy.get('#signIn_username').type('wy12296')
            .should('have.value','wy12296')
        cy.get('#signIn_password').type('12345678')
            .should('have.value','12345678')
        cy.get('#signIn_confirm').type('1234567')
            .should('have.value','1234567')
        cy.get('.ant-btn.login-form-button')
            .should('have.attr','type','submit')
            .click()
        cy.url().should('eq','http://localhost:3000/SignUp')
        cy.get('#signIn_email')
            .should('have.value','2529230361@qq.com')
        cy.get('#signIn_username')
            .should('have.value','wy12296')
        cy.get('#signIn_password')
            .should('have.value','12345678')
        cy.get('#signIn_confirm')
            .should('have.value','1234567')
    })
})
