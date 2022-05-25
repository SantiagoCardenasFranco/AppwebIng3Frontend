context('Login Tests', () => {

        it("The happy path should work", () => {
          cy.visit('http://localhost:4200/login');
          
          cy.get(".example-form").then($els => {
            cy.get($els[0]).type("Tester");
            cy.get($els[1]).type("user@realworld.io");
          });
        });
});