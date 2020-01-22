import faker from 'faker'

export function importdata(){
    let data1 = {}
     let userinfo = {
         "email" : faker.internet.email(),
         "password" : faker.internet.password()
     }
      data1 = {...data1,...userinfo}
      var totaldata = {"users_data":data1}
      cy.writeFile("cypress/fixtures/collection.json",totaldata)  
}