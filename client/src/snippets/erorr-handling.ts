export const testCases = [
    {
        name: 'missing email and password',
        fill: { fullName: 'Bruce Wayne' },
        expectedErrors: ['Email is required', 'Please enter your password', 'Please enter your password', 'You must agree to the terms and conditions'],
    },
    {
        name: 'missing full name and agreeToTerms',
        fill: { email: 'bruce@wayne.com', password: 'test123', confirmPassword: 'test123' },
        expectedErrors: ['Full Name is required', 'You must agree to the terms and conditions'],
    },
    {
        name: 'passwords don’t match',
        fill: {
            fullName: 'Clark Kent',
            email: 'clark@dailyplanet.com',
            password: 'superman123',
            confirmPassword: 'batman123',
            agreeToTerms: true
        },
        expectedErrors: ['Passwords do not match'],
    }
];

// it.each example

testCases.forEach(({ name, fill, expectedErrors }) => {
    it(`shows correct errors when ${name}`, () => {
        cy.visit('http://localhost:5173');

        if (fill.fullName) cy.get('input[name="fullName"]').type(fill.fullName);
        if (fill.email) cy.get('input[name="email"]').type(fill.email);
        if (fill.password) cy.get('input[name="password"]').type(fill.password);
        if (fill.confirmPassword) cy.get('input[name="confirmPassword"]').type(fill.confirmPassword);
        if (fill.agreeToTerms) cy.get('input#agreeToTerms').check();

        cy.get('[data-cy="submit"]').click();

        expectedErrors.forEach((error) => {
            cy.get('[data-cy="registrationForm"]').contains(error).should('be.visible');
        });
    });
}); */

it('positive tests: no errors when valid entries', () => {

    cy.get('[data-cy="registrationForm"]').within(() => {
        cy.get('input[name="fullName"]').type('Peter Parker');
        cy.get('input[name="email"]').type('peter@dailybugle.com');
        cy.get('input[name="password"]').type('webslinger');
        cy.get('input[name="confirmPassword"]').type('webslinger');
        cy.get('#agreeToTerms').check();
        cy.get('[data-cy="submit"]').click();

        // Assert no errors
        cy.contains('is required').should('not.exist');
        cy.contains('do not match').should('not.exist');
    });

})