/* eslint-disable */

import { getFormElement, getElement } from '../utils';

export const getBodyTemperature = () => getFormElement('form-body-temperature');
export const getAge = () => getFormElement('form-age');
export const getDni = () => getFormElement('form-dni');
export const getEmail = () => getFormElement('form-email');
export const getPhone = () => getFormElement('form-phone');
export const getAddress = () => getFormElement('form-address');
export const getLocalidad = () => getFormElement('form-localidad');
export const getProvince = () => getElement('div', 'form-province');
export const getProvinceList = () => getElement('li', 'form-list-province');
export const getSubmitButton = () => getElement('button', 'form-submit-button');
export const setSelectedProvince = (selectedProvince) =>
  getElement('div', 'form-province').each(
    (li) => selectedProvince === li.text() && li.click()
  );
