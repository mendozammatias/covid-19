/* eslint-disable */

import * as formTask from './tasks/form';
import * as diagnosticTask from './tasks/diagnostic';
import * as quarantineTask from './tasks/quarantine';

context('Corona-App', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseURL'));
    cy.fixture('users').as('users');
  });

  it('Test 1 - Caso feliz', function () {
    const [firstUser] = this.users;

    cy.log(`Clearing all forms values`);

    formTask.clearForm();

    cy.log(`Completing form with new values`);

    formTask.completeForm(firstUser);

    cy.log(`Checking if correctly redirected to good diagnostic page`);

    diagnosticTask.checkGoodDiagnosticPage();
  });

  it('Test 2 - Cuarentena', function () {
    const [_, secondUser] = this.users;

    cy.log(`Clearing all forms values`);

    formTask.clearForm();

    cy.log(`Completing form with new values`);

    formTask.completeForm(secondUser);

    cy.log(`Checking if correctly redirected to quarantine page`);

    quarantineTask.checkQuarantinePage();
  });
});
