/// <reference types= "cypress" />

describe("Liveet Admin",  () => {
   
    it("Validate an Admin can Login with Valid Credentials",  () => {

        cy.visit("https://admin-stg.liveet.co/event-admin/auth/signin")
        //username
        cy.get(':nth-child(3) > .form-control')
        .type("quales05")
        //password
        cy.get(':nth-child(5) > .form-control')
        .type("quales")
        //Login
        cy.get('.btn').click()
        //Login Assertion
        cy.get('.notification').should("be.visible")
    });
     
    it("Validate a new admin profile can be created with all modules access",  () => {
         //Admin Tab
        cy.get(':nth-child(13) > .nav-link').click()
        //create Staff
        cy.get('[style="display: flex; justify-content: flex-end; margin-bottom: 5px;"] > .btn').click()
        //admin fullname
        cy.get('#admin_fullname').type("BENSON")
        //Admin Username
        cy.get('#admin_username').type("BEN10")
        //Admin Email
        cy.get('#admin_email').type("Ben10@omnitrix.com")
        //Admin Password
        cy.get('#admin_password').type("FOURARMS")
        //Modules Access
       

    });
  });
  