"use strict";

describe("Test form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/signup");
  });
  it("Renders Page", function () {
    cy.visit("http://localhost:3000/signup");
  });
  it("Buttons Disabled", function () {
    cy.get("button[type=submit]").as("submitBtn");
    cy.get("@submitBtn").should("be.disabled");
  });
  it("Accepts input", function () {
    var first = 'John';
    var last = 'Doe';
    var email = 'johnDoe@doejohn.com';
    var user = 'johnDoe';
    var pass = 'i<3Lambda';
    cy.get('[for="firstName"] > input').type(first).should("have.value", first);
    cy.get('[for="lastName"] > input').type(last).should("have.value", last);
    cy.get('[for="email"] > input').type(email).should("have.value", email);
    cy.get(':nth-child(4) > input').type(user).should("have.value", user);
    cy.get('[for="password"] > input').type(pass).should("have.value", pass);
  });
});