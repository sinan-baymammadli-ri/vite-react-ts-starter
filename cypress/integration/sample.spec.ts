describe("My First Test", () => {
  it("Has hello message", () => {
    cy.visit("/");
    cy.contains("Hello Vite");
  });
});
