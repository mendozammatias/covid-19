/* eslint-disable */

import { getElement } from '../utils';

export const getContainer = () => getElement('div', 'diagnostic-container');
export const getButton = () => getElement('button', 'diagnostic-button');
export const getMessage = () => getElement('p', 'diagnostic-message');
export const getPhone = () => getElement('h5', 'diagnostic-phone');
export const getLink = () => getElement('a', 'diagnostic-link');
