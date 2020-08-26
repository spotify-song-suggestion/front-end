describe("Test form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/login");
  });

  it("adds text to inputs", function () {
    cy.get('[for="username"] > input')
      .type("johnDoe@doe.com")
      .should("have.value", "johnDoe@doe.com");

    cy.get('[for="password"] > input')
      .type("i<3Lambda")
      .should("have.value", "i<3Lambda");

    cy.contains("Submit").click();
  });
});
