describe("test form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/search");
  });

  it("Adds text to inputs", function () {
    cy.get("[#artistName]").type("artist").should("have.value", "artist");

    cy.get("[#songTitle]").type("song").should("have.value", "song");
  });
});
