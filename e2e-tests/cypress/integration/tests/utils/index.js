/* eslint-disable */

export const getElement = (el, id) => cy.get(`${el}[data-automation-id=${id}`);
export const getFormElement = (id) =>
  getElement('div', id).children('div').children('input');
