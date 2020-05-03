import React from 'react';
import { Field } from 'react-final-form';
import MuiTextField from '@material-ui/core/TextField';

const TextField = ({
  name,
  placeholder,
  validate,
  required,
  type,
  style,
  defaultValue,
  inputProps,
  ...props
}) => (
  <Field name={name} validate={validate} defaultValue={defaultValue}>
    {({
      input: { value, onChange, onBlur, onFocus },
      meta: { touched, error },
    }) => (
      <MuiTextField
        {...props}
        value={value}
        inputProps={inputProps}
        helperText={touched ? error : null}
        placeholder={placeholder}
        error={touched && !!error}
        required={required}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        variant="filled"
        style={style}
        type={type}
        fullWidth
      />
    )}
  </Field>
);

TextField.displayName = 'TextField';

export default TextField;
