export function gotoDeliveryAddress(){
    
    cy.get('.topbar-register > .red-clr').click()
    cy.get('.nav > :nth-child(2) > a').click()
    cy.get('#remove-cart-form-0 > .rmv-item > .fa').click()//delete an existing address
    cy.get('#btn-si').click()
    cy.get('.brd-rd2').click()
    cy.get('#addressModal > .modal-dialog > .modal-content > form > .modal-body > .row > :nth-child(1) > .fm-input-text').type('Sanepa')
    cy.then(() => {
        Cypress.$('#map_latitude').prop({ "value":"29.87" })
        Cypress.$('#map_longitude').prop({"value":"19.87"})
        Cypress.$('#delivery-submit').prop({"disabled":false})
    })
    cy.get('#delivery-submit').click({force:true})
    }