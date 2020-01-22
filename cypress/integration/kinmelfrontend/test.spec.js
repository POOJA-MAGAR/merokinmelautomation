describe('', () => {
    
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'merokinmel',
      testName: 'merokinmel_batch_1st',
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
  });

   it('test ', () => {
    cy.visit('https://merokinmel-ordering.ekbana.net/')
    cy.eyesCheckWindow('dasboard');
    cy.get('.container > .topbar-register > .sign-btn').click()
    cy.eyesCheckWindow('register_page')
    cy.eyesClose({timeout: 120000,})
   }); 
});