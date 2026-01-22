describe("Kanban Board", () => {
  it("Deve mover uma tarefa de To do para Done e atualizar o card", () => {
    cy.login();
    cy.contains("Kanban").click();
    // Cria um objeto DataTransfer (Web API do navegador)
    // Ele simula os dados transportados durante o drag & drop
    // NÃO é algo do Cypress, é nativo do browser
    const dataTransfer = new DataTransfer();
    // Localiza o card que:
    // - é uma div com draggable="true"
    // - contém o texto "Documentar API"
    cy.contains('div[draggable="true"]', "Documentar API")
      // Dispara manualmente o evento dragstart
      // Passando o mesmo dataTransfer para simular o início do arrasto
      .trigger("dragstart", { dataTransfer });

    cy.get(".column-done")
      // Dispara o evento drop na coluna Done
      // Usando o MESMO dataTransfer para conectar dragstart e drop
      .trigger("drop", { dataTransfer })
      .find("h3")
      .should("have.text", "Done (4)");

    cy.get(".column-done")
      .should("include.text", "Documentar API")
      .and("include.text", "Criar documentação da API com Swagger");
  });
});
