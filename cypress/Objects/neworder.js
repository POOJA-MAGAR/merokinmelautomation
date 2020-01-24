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

export function confirmorder(){
    cy.get('.menu-sec > .red-bg').click({force:true})
    
}