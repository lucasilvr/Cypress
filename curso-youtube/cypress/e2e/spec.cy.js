/*describe("Teste de Login", () => {
  it("passes", () => {
    cy.visit("https://rdsl-site-hom.rededorlabs.com/paciente/home");
    cy.get("#root menu-component.hydrated").click();
    cy.get("#root div.sc-pRtcU").click();
    cy.get('[data-testid="file-upload"]')
      .click()
      .selectFile("cypress/fixtures/laudo.pdf");
    cy.get("#root cura-button.hydrated").click();
  });
});*/

describe("Teste de login", () => {
  it("Login com sucesso", () => {
    cy.visit("https://front.serverest.dev/login");
    cy.get('[data-testid="email"]').click();
    cy.get('[data-testid="email"]').type('lucas@gmail.com');
    cy.get('[data-testid="senha"]').type('123');
    cy.get('[data-testid="entrar"]').click();
    cy.get('#root h4').contains('Produtos');
  })

  it.only("Logincom erro", () => {
    cy.visit("https://front.serverest.dev/login");
    cy.get('[data-testid="email"]').click();
    cy.get('[data-testid="email"]').type('erro@gmail.com');
    cy.get('[data-testid="senha"]').type('1234');
    cy.get('[data-testid="entrar"]').click();
    cy.get('#root span:nth-child(2)').contains('Email e/ou senha inválidos');

  })

});

/* cy.get('[data-testid="file-input"]')
  .selectFile('cypress/fixtures/laudo.pdf')
  */



