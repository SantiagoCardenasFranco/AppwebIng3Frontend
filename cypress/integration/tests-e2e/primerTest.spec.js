context('Tests e2e', () => {

        it("Registro", () =>{
          cy.visit('http://localhost:4200/usuarios');
          cy.get('#nombre-registro').then(elem => {
            elem.val('santiago30');
        });
          cy.get('#apellido-registro').then(elem => {
          elem.val('Cardenas Franco');
        });
          cy.get('#correo-registro').then(elem => {
          elem.val('algo@gmail.com');
        });
          cy.get('#password-registro').then(elem => {
          elem.val('w3Unpo<code>t0d0');
        });
          cy.get('.demo-button').click();
        })

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

        it("Usuarios", () =>{
          cy.visit('http://localhost:4200/listarUsuario');
        })


});