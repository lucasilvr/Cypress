describe("consultancy", () => {
  it.only("should access consultacy page", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katana123");
    cy.goTo("Formulários", "Consultoria");
    //cy.get("#name").type("Lucas Silveira");  //o cypress detectou um id pq estava definido no html
    //ou fazer assim:
    cy.get('input[placeholder="Digite seu nome completo"]').type(
      "Lucas Silveira"
    );
    //cy.get('#email').type('papito@')
    //ou fazer assim:
    //cy.get('type="email"]').type() //tomar cuidado caso tenha outro campo de e-mail
    cy.get('input[placeholder="Digite seu email"]').type("papito@teste.com.br");

    cy.get('input[placeholder="(00) 00000-0000"]')
      .type("(11) 99999-9999")
      .should("have.value", "(11) 99999-9999");

    //cy.get('#consultancyType').select('In Company') ou pegar pelo value="InCompany" no html, ou label, ou texto
    //caso não tenha id, name ou outra propriedade no html, podemos pegar pelo label associado ao select
    // xpath: //label[text()="Tipo de Consultoria"]/..//select
    cy.contains("label", "Tipo de Consultoria")
      .parent()
      .find("select")
      .select("Individual");

    /* em vez de fazer assim:
    cy.contains("h4", "Formulários")
      .parent()
      .parent()
      .parent()
      .shoud("be.visible");
      fazemos:
      cy.contains("button", "Formulários").should("be.visible")
      */

    /* //span[text()="Pessoa Física"]/..//input
    cy.contains("span", "Pessoa Física")
      .parent()
      .find('input')
      .click() //.check()

      ou fazer dessa forma: o cypress consegue pegar o texto de um elemento filho, então só colocar o elemento pai
      */
    cy.contains("label", "Pessoa Física")
      .find("input")
      .click() //.check()
      .should("be.checked");

    cy.contains("label", "Pessoa Jurídica")
      .find("input")
      .should("not.be.checked");

    cy.contains("label", "CPF")
      .parent()
      .find("input")
      .type("12345678900")
      .should("have.value", "123.456.789-00");

    const discoveryChannels = [
      "Instagram",
      "YouTube",
      "LinkedIn",
      "Indicação de Amigo",
      "Udemy",
    ];

    discoveryChannels.forEach((channel) => {
      cy.contains("label", channel).find("input").check().should("be.checked");
    });

    cy.get('input[type="file"]').selectFile("./cypress/fixtures/document.pdf", {
      force: true,
    });
    cy.get(
      'textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]'
    ).type(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    );

    const techs = [
      "Cypress",
      "Selenium",
      "WebDriverIO",
      "Playwright",
      "Robot Framework",
    ];

    techs.forEach((tech) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(tech)
        .type("{enter}");

      cy.contains("label", "Tecnologias")
        .parent()
        .contains("span", tech)
        .should("be.visible");
    });

    cy.contains("label", "termos de uso").find("input").check();

    cy.contains("button", "Enviar formulário").click();

    cy.get(".modal", { timeout: 10000 })
      .should("be.visible")
      .find(".modal-content")
      .should("be.visible")
      .and(
        "have.text",
        "Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido."
      );
  });

  it("should validate consultancy form", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katana123");
    cy.goTo("Formulários", "Consultoria");
    cy.contains("button", "Enviar formulário").click();

    cy.contains("label", "Nome Completo *")
      .parent()
      .find("p")
      .should("be.visible")
      .should("have.text", "Campo obrigatório")
      .and("have.class", "text-red-400")
      .and("have.css", "color", "rgb(248, 113, 113)");

    cy.contains("label", "Email *")
      .parent()
      .find("p")
      .should("be.visible")
      .should("have.text", "Campo obrigatório")
      .and("have.class", "text-red-400")
      .and("have.css", "color", "rgb(248, 113, 113)");

    cy.contains("label", "termos de uso")
      .parent()
      .find("p")
      .should("be.visible")
      .should("have.text", "Você precisa aceitar os termos de uso")
      .and("have.class", "text-red-400")
      .and("have.css", "color", "rgb(248, 113, 113)");
  });
});
