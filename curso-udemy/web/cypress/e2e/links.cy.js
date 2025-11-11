describe("Links abrindo nova guia/janela", () => {
  it("Validando o atributo do link do Instagram", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katana123");
    cy.contains("Formulários").click();

    cy.contains("a", "termos de uso").invoke("removeAttr", "target").click();

    cy.contains(
      "Ao acessar e usar nossos serviços, você concorda em cumprir estes termos de uso. Se você não concordar com algum aspecto destes termos, não utilize nossos serviços."
    ).should("be.visible");
  });
});
