describe("iFrame", () => {
  it("Deve poder tocar o video de exemplo", () => {
    cy.login();
    cy.contains("Video").click();

    //think time
    cy.wait(3000) //espera o iframe ser carregado, pois o suporte é limitado para iframes no cypress
    //não é uma boa abordagem, mas pra esses casos é necessário

    cy.get('iframe[title="Video Player"]')
      .should("exist")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .as("iframePlayer");

    cy.get("@iframePlayer").find(".play-button").click();

    cy.get("@iframePlayer").find(".pause-button").should("be.visible");
  });
});
