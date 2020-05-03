/* eslint-disable */

import * as form from '../app-objects/form';
import * as dialog from '../app-objects/dialog';

export const clearForm = () => {
  form.getBodyTemperature().clear().should('have.attr', 'value', '');
  form.getAge().clear().should('have.attr', 'value', '');
  form.getDni().clear().should('have.attr', 'value', '');
  form.getEmail().clear().should('have.attr', 'value', '');
  form.getPhone().clear().should('have.attr', 'value', '');
  form.getAddress().clear().should('have.attr', 'value', '');
  form.getLocalidad().clear().should('have.attr', 'value', '');
};

export const completeForm = (user) => {
  form.getBodyTemperature().type(user.bodyTemperature);
  form.getAge().type(user.age);

  // Required fields
  form.getDni().type(user.required.dni);
  form.getEmail().type(user.required.email);
  form.getPhone().type(user.required.phone);

  form.getAddress().type(user.address);
  form.getLocalidad().type(user.localidad);

  form.getProvince().click({ force: true });
  form.setSelectedProvince(user.province);

  form.getSubmitButton().click({ force: true });

  cy.wait(3000);

  dialog.getAcceptButton().click({ force: true });
};
