"use strict";

describe("Test form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/login");
  });
  it("adds text to inputs", function () {
    cy.get('[for="username"] > input').type("testuser1").should("have.value", "testuser1");
    cy.get('[for="password"] > input').type("mypassword").should("have.value", "mypassword");
    cy.contains("Login").click();
  });
});