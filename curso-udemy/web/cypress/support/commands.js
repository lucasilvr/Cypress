import "cypress-real-events"; //importar os recursos dessa biblioteca
import "./actions/consultancy.actions";

Cypress.Commands.add("start", () => {
  cy.viewport(1440, 900);
  cy.visit("http://localhost:3000");
});

Cypress.Commands.add("goToSignup", () => {
  cy.start();
  cy.get('a[href="/register"]').click(); //cy.contains("a", "Cadastre-se").click;
  cy.contains("h2", "Crie sua conta").should("be.visible");
});

Cypress.Commands.add("submitLogin", (email, password) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);

  cy.contains("button", "Entrar").click(); //pegando a tag html button com o texto Entrar
});

Cypress.Commands.add("goTo", (buttonName, pageTitle) => {
  cy.contains("button", buttonName).should("be.visible").click();

  cy.contains("h1", pageTitle).should("be.visible");
});

//Helpers
Cypress.Commands.add("login", () => {
  cy.start();
  cy.submitLogin("papito@webdojo.com", "katana123");
});
