cy.get('input[name="fullName"]').focus().blur();
cy.get('input[name="email"]').focus().blur();
cy.get('input[name="password"]').focus().blur();
cy.get('input[name="confirmPassword"]').focus().blur();
cy.get('input#agreeToTerms').focus().blur();

// Assert no validation messages are shown
cy.contains('Full Name is required').should('not.exist');
cy.contains('Email is required').should('not.exist');
cy.contains('Please enter your password').should('not.exist');
cy.contains('You must agree to the terms and conditions').should('not.exist');