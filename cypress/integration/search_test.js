describe("test form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/search");
  });

  it("Adds text to inputs", function () {
    cy.get("#artistName")
      .type("Lyric Dubuque")
      .should("have.value", "Lyric Dubuque");

    cy.get("#songTitle")
      .type("Dynamic Integration Analyst")
      .should("have.value", "Dynamic Integration Analyst");
  });
});
