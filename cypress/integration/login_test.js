describe("Test form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/login");
    
  });

  it("Renders page", function () {
    cy.visit("http://localhost:3000/login");
  });

  it("Buttons disabled", function () {
    cy.get("button[type=submit]").as("submitBtn");
    cy.get("@submitBtn").should("be.disabled");
  })

  it("accepts input", () => {
    const user = "testuser1";
    const pass = "mypassword";
    cy.get('[for="username"] > input').type(user).should("have.value", user);
    cy.get('[for="password"] > input').type(pass).should("have.value", pass);
  });

  it("Buttons clickable with info", function () {
    cy.get('[for="username"] > input')
      .type("testuser1")
      .should("have.value", "testuser1");

    cy.get('[for="password"] > input')
      .type("mypassword")
      .should("have.value", "mypassword");

    cy.get("button[type=submit]").click();
  
    // new page renders with submission
    cy.url().should("include", "/search");
  });
});
