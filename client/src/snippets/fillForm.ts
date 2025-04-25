
export const fillForm = () => {
    cy.get('input[name="fullName"]').type('The Hulk');
    cy.get('input[name="email"]').type('greenmachine@test.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    cy.get('#agreeToTerms').check();
};