import "cypress-real-events"; //importar os recursos dessa biblioteca
import "./actions/consultancy.actions";
import { dataHojeFormatada } from "./utils";

Cypress.Commands.add("start", () => {
  cy.visit("/");
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
Cypress.Commands.add("login", (ui = false) => {
  if ((ui === true)) {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katana123");
  } else {
    const token = "e1033d63a53fe66c0fd3451c7fd8f617";
    const loginDate = dataHojeFormatada();

    cy.setCookie("login_date", loginDate);

    cy.visit('/dashboard', {
      onBeforeLoad(win) {
        win.localStorage.setItem("token", token);
      },
    });
  }
});
