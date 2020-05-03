/* eslint-disable */

import { getElement } from '../utils';

export const getAcceptButton = () =>
  getElement('button', 'dialog-accept-button');
export const getCloseButton = () => getElement('button', 'dialog-close-button');
