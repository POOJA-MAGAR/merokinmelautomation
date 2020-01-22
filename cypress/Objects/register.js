import f from "faker"
import * as dataObj from '../Objects/importdata'

export function registerfrontend() {
    dataObj.importdata()
    cy.visit('https://merokinmel-ordering.ekbana.net/')
    cy.get('.container > .topbar-register > .sign-btn').click()
    cy.fixture('collection.json').then((data) => {

        cy.get(':nth-child(2) > .sign-popup-wrapper > .sign-popup-inner > .sign-form > .row > :nth-child(1) > .brd-rd3').type(data.users_data.email)
        cy.get(':nth-child(2) > .sign-popup-wrapper > .sign-popup-inner > .sign-form > .row > :nth-child(2) > .brd-rd3').type(f.name.firstName())
        cy.get(':nth-child(2) > .sign-popup-wrapper > .sign-popup-inner > .sign-form > .row > :nth-child(3) > .brd-rd3').type(f.name.lastName())
        cy.get(':nth-child(4) > .brd-rd3').type(f.phone.phoneNumber())
        cy.get(':nth-child(5) > .brd-rd3').type('123Admin@')
        cy.get(':nth-child(6) > .brd-rd3').type('123Admin@')
        cy.get(':nth-child(7) > .red-bg').click()
    })
}


export function loginfrontend() {
    cy.visit('https://merokinmel-ordering.ekbana.net/')
    cy.fixture('collection.json').then((data) => {
        cy.get('.container > .topbar-register > [href="https://merokinmel-ordering.ekbana.net/login"]').click()
        cy.get(':nth-child(1) > .sign-popup-wrapper > .sign-popup-inner > .sign-form > .row > :nth-child(1) > .brd-rd3').type(data.users_data.email)
        cy.get(':nth-child(1) > .sign-popup-wrapper > .sign-popup-inner > .sign-form > .row > :nth-child(2) > .brd-rd3').type('123Admin@')
        cy.get('.row > :nth-child(3) > .red-bg').click()
    })
}
export function eyesOpen() {
    cy.eyesOpen({
        appName: 'merokinmel',
        testName: 'merokinmel_order_new',
        browser: { width: 1024, height: 768, name: 'chrome' },
    });
}

export function neworder() {
    //cy.get('[style="cursor:default;"]').click({force:true})
    cy.then(() => {
        Cypress.$('.sub-dropdown').first().css({ "opacity": "1", "visibility": "visible" })
    })
    cy.get(':nth-child(1) > .sub-dropdown > :nth-child(2) > a').click({ force: true })
    cy.get(':nth-child(1) > .custom-top-restaurant > .brd-rd50').click({ force: true })
    cy.get('#heading216 > .d-flex > .title3 > .w-100').click({ force: true })
    cy.get('#collapse216 > :nth-child(3) > .featured-restaurant-box > .featured-restaurant-info > form > .ord-btn > .qty-wrap > .input-group > :nth-child(5) > .btn').click({force:true})
    cy.get('#collapse216 > :nth-child(3) > .featured-restaurant-box > .featured-restaurant-info > form > .ord-btn > .qty-wrap > .button-rdx').click({ force: true })
    cy.eyesCheckWindow('new_order_complete');
    cy.eyesClose({ });

}

 
