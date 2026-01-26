import { dataHojeFormatada } from "../support/utils";

describe("Login", () => {

  it("Deve logar com sucesso", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katana123");

    cy.get('[data-cy="user-name"]') //propriedade data-cy no elemento html para facilitar o acesso no cypress
      .should("be.visible")
      .and("have.text", "Fernando Papito");

    cy.get('[data-cy="welcome-message"]')
      .should("be.visible")
      .and(
        "have.text",
        "Olá QA, esse é o seu Dojo para aprender Automação de Testes.",
      );

      cy.getCookie('login_date').should('exist')

      cy.getCookie('login_date').should((cookie)=> {
        expect(cookie.value).to.eq(dataHojeFormatada())
      })

      cy.window().then((win) => {
        const token = win.localStorage.getItem('token')
        expect(token).to.exist //ou .to.match(/^[a-fA-F0-9]{32}$/) pega o token e garante que ele é um 
        // md5 no formato correto, ele nao valida apenas a existencia e sim o formato
      })
  });

  it("Não deve logar com uma senha inválida", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "wrongpassword");
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });

  it("Não deve logar com um email inválido", () => {
    cy.start();
    cy.submitLogin("404@webdojo.com", "katana123");
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
});
