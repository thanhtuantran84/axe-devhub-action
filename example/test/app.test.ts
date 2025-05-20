import "mocha";

describe("App", () => {
  describe("home page", () => {
    it("has a title", () => {
      cy.visit("http://localhost:5012").title().should("eq", "Home | App");
    });

    it("has links in the header", () => {
      cy.visit("http://localhost:5012");
      cy.get("header").should("exist");
      cy.get('header a[href="/violations"]').should("exist");
    });
  });

  describe("violations page", () => {
    it("has a title", () => {
      cy.visit("http://localhost:5012/violations")
        .title()
        .should("eq", "Violations | App");
    });

    it("has links in the header", () => {
      cy.visit("http://localhost:5012/violations");
      cy.get("header").should("exist");
      cy.get('header a[href="/"]').should("exist");
    });

    it("has images of cats", () => {
      cy.visit("http://localhost:5012/violations");
      cy.get("img").should("have.length", 10);
    });
  });
});
