// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('Login',()=> {
    cy.visit('https://merokinmel-ordering.ekbana.net/')
    cy.fixture('collection.json').then((data) => {
        cy.get('.container > .topbar-register > [href="https://merokinmel-ordering.ekbana.net/login"]').click()
        cy.get(':nth-child(1) > .sign-popup-wrapper > .sign-popup-inner > .sign-form > .row > :nth-child(1) > .brd-rd3').type(data.users_data.email)
        cy.get(':nth-child(1) > .sign-popup-wrapper > .sign-popup-inner > .sign-form > .row > :nth-child(2) > .brd-rd3').type('123Admin@')
        cy.get('.row > :nth-child(3) > .red-bg').click()
    })
})