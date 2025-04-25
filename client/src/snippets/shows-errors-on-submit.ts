it('should show validation errors after form is submitted', () => {
    cy.get('[data-cy="submit"]').submit();

    cy.contains('Full Name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Please enter your password').should('have.length', 2); // password + confirmPassword
    cy.contains('You must agree to the terms and conditions').should('be.visible');
});