import * as dev from '../../Objects/Deliveryaddress.js'

context('deliveryAddress', () => {
       
    beforeEach(() => {
       cy.Login()
       
    });

   
   
       it('should create new delivery address', () => {
          dev.gotoDeliveryAddress()
       });    
   }) 