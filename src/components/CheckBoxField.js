import React from 'react';
import { Field } from 'react-final-form';

import CheckBox from 'components/CheckBox';

const CheckBoxField = ({ name, placeholder, ...rest }) => (
  <Field name={name}>
    {({ input: { value, onChange } }) => (
      <CheckBox
        {...rest}
        checked={value}
        title={placeholder}
        onPress={() => onChange(!value)}
      />
    )}
  </Field>
);

CheckBoxField.displayName = 'CheckBoxField';

export default CheckBoxField;
