/* eslint-disable */

import values from '../../../fixtures/values';
import * as DiagnosticPage from '../app-objects/diagnostic';

export const checkGoodDiagnosticPage = () => {
  DiagnosticPage.getLink().should('have.attr', 'href', values.diagnostic.link);
  DiagnosticPage.getMessage().should('have.text', values.diagnostic.message);
  DiagnosticPage.getButton().should('have.text', values.diagnostic.button);
  DiagnosticPage.getPhone().should('have.text', values.diagnostic.phone);
};
