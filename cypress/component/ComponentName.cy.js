import Button from "../../packages/ui/Button.tsx";

describe("ComponentName.cy.js", () => {
  it("playground", () => {
    cy.mount(<Button />);
    cy.get("button").should("have.text", "Boop");
  });
});
