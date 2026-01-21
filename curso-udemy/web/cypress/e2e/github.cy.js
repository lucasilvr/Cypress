describe("Gerenciamento de Perfis no Github", () => {
  beforeEach(() => {
    cy.login();

    cy.goTo("Tabela", "Perfis do Github");
  });

  it("Deve poder cadastrar um novo perfil do Github", () => {
    cy.log("todo");
    cy.get('#name').type('Lucas Silveira');
  });
});
