import React from 'react';
import { Field } from 'react-final-form';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { InputLabel } from '@material-ui/core';

const SelectField = ({
  placeholder,
  label,
  valueOption = 'value',
  labelOption = 'label',
  options = [],
  name,
  ...rest
}) => (
  <Field name={name}>
    {({ input: { value, onChange } }) => (
      <FormControl variant="filled" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          {...rest}
          value={value}
          onChange={(ev) => onChange(ev.target.value)}
        >
          {options.map((option, idx) => (
            <MenuItem
              key={idx}
              value={option[valueOption]}
              data-automation-id="form-list-province"
            >
              {option[labelOption]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )}
  </Field>
);

SelectField.displayName = 'SelectField';

export default SelectField;
