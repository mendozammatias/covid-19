import React from 'react';
import { Field } from 'react-final-form';
import Grid from '@material-ui/core/Grid';

import CheckBox from 'components/CheckBox';

const GroupCheckBoxField = ({
  name,
  PositiveBtnProps = {
    'data-automation-id':'positiveBtn'
  },
  NegativeBtnProps = {
    'data-automation-id':'negativeBtn'
  },
}) => (
  <Field name={name}>
    {({ input: { value, onChange } }) => (
      <Grid direction="row" container spacing={2}>
        <Grid xs={6} sm={6} md={6} item style={{ marginTop: 20 }} >
          <CheckBox
            {...PositiveBtnProps}
            title="SI"
            checked={value === true}
            onPress={() => onChange(true)}
          />
        </Grid>
        <Grid xs={6} sm={6} md={6} item style={{ marginTop: 20 }}>
          <CheckBox
            {...NegativeBtnProps}
            title="NO"
            checked={value === false}
            onPress={() => onChange(false)}
          />
        </Grid>
      </Grid>
    )}
  </Field>
);

GroupCheckBoxField.displayName = 'GroupCheckBoxField';

export default GroupCheckBoxField;
