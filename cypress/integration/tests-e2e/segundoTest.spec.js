context('Tests e2e parte 2', () => {

    it("Login", () => {
      cy.visit('http://localhost:4200/login');
      cy.get('#nombre-login').then(elem => {
        elem.val('santiago30');
    });
      cy.get('#password-login').then(elem => {
      elem.val('w3Unpo<code>t0d0');
  });
      cy.get('.demo-button').click();
    });

    it("Productos", () =>{
      cy.visit('http://localhost:4200/productos');
    })


});