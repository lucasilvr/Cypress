describe("studio", () => {
  it("Exemplo do Cypress Studio", () => {
    cy.visit("https://example.cypress.io");
    /* ==== Generated with Cypress Studio ==== */
    cy.get("h1").should("be.visible").and("have.text", "Kitchen Sink");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Shoud login with success", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000");
    cy.get("#email").clear("p");
    cy.get("#email").type("papito@webdojo.com");
    cy.get("#password").clear("k");
    cy.get("#password").type("katana123");
    cy.get(".bg-\\[\\#8257E5\\]").click(); //recurso que não é recomendado usar
    cy.get('[data-cy="logged-user"]').click();
    cy.get('[data-cy="user-name"]').should("have.text", "Fernando Papito");
    /* ==== End Cypress Studio ==== */
  });
});
