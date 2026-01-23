describe("Gerenciamento de Perfis no Github", () => {
  beforeEach(() => {
    cy.login();
    cy.goTo("Tabela", "Perfis do GitHub");
  });

  it("Deve poder cadastrar um novo perfil do Github", () => {
    cy.get("#name").type("Lucas Silveira");
    cy.get("#username").type("qapapito");
    cy.get("#profile").type("QA");

    cy.contains("button", "Adicionar Perfil").click();

    cy.get("#name").type("Lucas Silveira");
    cy.get("#username").type("papitodev");
    cy.get("#profile").type("QA");

    cy.contains("button", "Adicionar Perfil").click();

    cy.contains("table tbody tr", "papitodev")
      .should("be.visible")
      .as("tProfile");

    cy.get("@tProfile").contains("td", "Lucas Silveira").should("be.visible");

    cy.get("@tProfile").contains("td", "QA").should("be.visible");
  });

  it("Deve poder remover um perfil do Github", () => {
    //definir uma massa de teste pra automatizar, objeto javascript
    const profile = {
      name: "Lucas Silveira",
      username: "papito123",
      desc: "QA",
    };

    cy.get("#name").type(profile.name);
    cy.get("#username").type(profile.username);
    cy.get("#profile").type(profile.desc);

    cy.contains("button", "Adicionar Perfil").click();

    cy.contains("table tbody tr", profile.username)
      .should("be.visible")
      .as("trProfile");

    cy.get("@trProfile").find('button[title="Remover perfil"]').click();

    cy.contains("table tbody", profile.username).should("not.exist");
  });

  it("Deve validar o link do github", () => {
    //definir uma massa de teste pra automatizar, objeto javascript
    const profile = {
      name: "Lucas Silveira",
      username: "papitodev",
      desc: "QA",
    };

    cy.get("#name").type(profile.name);
    cy.get("#username").type(profile.username);
    cy.get("#profile").type(profile.desc);

    cy.contains("button", "Adicionar Perfil").click();

    cy.contains("table tbody tr", profile.username)
      .should("be.visible")
      .as("trProfile");

    //eu não preciso garantir que a pagina esteja funcionando, preciso garantir apenas o link
    cy.get("@trProfile")
      .find("a")
      .should("have.attr", "href", "https://github.com/" + profile.username)
      .and('have.attr', 'target', '_blank')

  });
});
