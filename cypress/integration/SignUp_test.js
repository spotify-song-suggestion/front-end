describe("Test form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/signup");
  });

  it("adds text to inputs", function () {
    cy.get(":nth-child(1) > input").type("John").should("have.value", "John");

    cy.get('[for="lastName"] > input').type("Doe").should("have.value", "Doe");

    cy.get('[for="email"] > input')
      .type("johnDoe@doe.com")
      .should("have.value", "johnDoe@doe.com");

    cy.get('[for="password"] > input')
      .type("i<3Lambda")
      .should("have.value", "i<3Lambda");

    cy.get('[for="confirmPassword"] > input')
      .type("i<3Lambda")
      .should("have.value", "i<3Lambda");

    cy.contains("Submit").click();
  });
});
