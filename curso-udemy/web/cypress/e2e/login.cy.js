describe("Login", () => {
  it("shoud login with success", () => {
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
  });

  it("should not login with an invalid password", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "wrongpassword");
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });

  it("should not login with an invalid email", () => {
    cy.start();
    cy.submitLogin("404@webdojo.com", "katana123");
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
});
