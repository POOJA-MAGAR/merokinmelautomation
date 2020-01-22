import * as dev from '../../Objects/Deliveryaddress.js'

context('newPolicy', () => {
       
    beforeEach(() => {
       cy.Login()
       
    });

   
   
       it('should create new delivery address', () => {
          dev.gotoDeliveryAddress()
       });    
   }) 