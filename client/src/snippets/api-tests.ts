it('should show a signup successful message on post to api', () => {
    cy.visit('http://localhost:5173');
    fillForm();

    cy.get('[data-cy="submit"]').click();
    cy.contains('Registration Complete').should('be.visible');
});

it('should show a signup successful message on POST to API', () => {
    // Mock the registration POST request
    cy.intercept('POST', '/register', {
        statusCode: 200, // Simulating a successful response
        body: { message: 'Registration successful' },
        delay: 1000,
    }).as('postRegister');

    // Visit the page
    cy.visit('http://localhost:5173');

    // Fill out the form (assuming you have a fillForm function)
    fillForm();

    // Submit the form
    cy.get('[data-cy="submit"]').click();

    // Wait for the mocked request to complete
    cy.wait('@postRegister');

    // Assert the successful registration message
    cy.contains('Registration successful').should('be.visible');
});


// FAILURE:
it('should show an error message on failed registration', () => {
    // Mock the registration POST request with an error response
    cy.intercept('POST', '/register', {
        statusCode: 400, // Simulate a bad request
        body: { error: 'Email already exists' },
    }).as('postRegisterError');

    cy.visit('http://localhost:5173');

    // Fill out the form
    fillForm();

    // Submit the form
    cy.get('[data-cy="submit"]').click();

    // Wait for the error response
    cy.wait('@postRegisterError');

    // Assert that the error message is shown
    cy.contains('Registration failed').should('be.visible');
});