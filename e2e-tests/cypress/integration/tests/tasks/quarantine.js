/* eslint-disable */

import values from '../../../fixtures/values';
import * as QuarantinePage from '../app-objects/quarantine';

export const checkQuarantinePage = () => {
  QuarantinePage.getMessage().should('have.text', values.quarantine.message);
  QuarantinePage.getButton().should('have.text', values.quarantine.button);
  QuarantinePage.getTitle().should('have.text', values.quarantine.title);
};
