describe("Simulando Mouseover", () => {
  it("Deve exibir o texto ao passar o mouse sobre o elemento", () => {
    cy.login();
    cy.contains("Isso é Mouseover!").should("not.exist");
    cy.get('[data-cy="instagram-link"]').realHover(); //usando o comando da biblioteca cypress-real-events
    cy.contains("Isso é Mouseover!").should("exist");
  });
});
