import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form as FinalForm } from 'react-final-form';
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Container,
  Button,
} from '@material-ui/core';

import { validate } from 'utils/validation';
import { isRiskPatient, hasFever } from 'utils';
import { getProvinces, sendForm } from 'services';

import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import CheckBoxField from 'components/CheckBoxField';
import ConfirmationDialog from 'components/ConfirmationDialog';
import GroupCheckBoxField from 'components/GroupCheckBoxField';

import { useStyles } from './styles';

const Form = ({ initialValues, subscription }) => {
  const history = useHistory();
  const classes = useStyles();

  const [showDialog, setShowDialog] = useState(false);
  const [open, setOpen] = useState(false);

  const [provinces, setProvinces] = useState([]);
  const [location, setLocation] = useState({
    located: false,
    latitude: '',
    longitude: '',
  });

  useEffect(() => {
    getProvinces().then(setProvinces);

    navigator.geolocation.getCurrentPosition(
      (ctx) => {
        setLocation({
          located: true,
          latitude: ctx.coords.latitude,
          longitude: ctx.coords.longitude,
        });
      },
      (err) => {
        console.warn(`Geo ERROR(${err.code}): ${err.message}`);
      }
    );
  }, []);

  const saveValues = async (ctx) => {
    try {
      await sendForm({
        ...ctx,
        recaptchaToken: '',
        location,
      });

      if (hasFever(ctx)) {
        if (isRiskPatient(ctx)) {
          const province = provinces[ctx.provincia];
          history.replace(`/diagnostico/${province.path}`);
        } else {
          history.replace('/cuarentena');
        }
      } else {
        history.push('/diagnostico-bueno');
      }
    } catch (err) {
      setOpen(false);
    }
  };

  return (
    <>
      <FinalForm
        validate={validate}
        onSubmit={saveValues}
        subscription={subscription}
        initialValues={initialValues}
        render={({ handleSubmit, hasValidationErrors }) => (
          <Container maxWidth="xs" className={classes.container}>
            <Grid direction="column" container>
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <Typography align="left" className={classes.text} gutterBottom>
                  ¿Cuál es su temperatura corporal?
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} md={12} item>
                <TextField
                  inputProps={{
                    min: 34,
                    max: 42,
                    step: 0.1,
                  }}
                  type="number"
                  name="bodyTemperature"
                  data-automation-id="form-body-temperature"
                  className={classes.field}
                />
              </Grid>
            </Grid>
            <Grid direction="row" container>
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <Typography align="left" className={classes.text} gutterBottom>
                  ¿Tenés tos o dolor de garganta?
                </Typography>
              </Grid>
              <GroupCheckBoxField name="soreThroat" />
            </Grid>
            <Grid direction="row" container>
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <Typography align="left" className={classes.text} gutterBottom>
                  ¿Tenés dificultad respiratoria o falta de aire?
                </Typography>
              </Grid>
              <GroupCheckBoxField name="difficultyBreathing" />
            </Grid>
            <Grid
              direction="row"
              spacing={2}
              container
              data-automation-id="divCntrSalud"
            >
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <Typography align="left" className={classes.text} gutterBottom>
                  Situación de salud
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} item>
                <CheckBoxField
                  name="isOver60yearsOld"
                  placeholder="Mayor de 60 años"
                />
              </Grid>
              <Grid xs={6} sm={6} md={6} item>
                <CheckBoxField
                  name="isPregnant"
                  placeholder="Estoy embarazada"
                />
              </Grid>
              <Grid xs={6} sm={6} md={6} item>
                <CheckBoxField name="cancer" placeholder="Cáncer" />
              </Grid>
              <Grid xs={6} sm={6} md={6} item>
                <CheckBoxField name="diabetes" placeholder="Diabetes" />
              </Grid>
              <Grid xs={6} sm={6} md={6} item>
                <CheckBoxField
                  name="hepatic"
                  placeholder="Enfermedad Hepática"
                />
              </Grid>
              <Grid xs={6} sm={6} md={6} item>
                <CheckBoxField
                  name="kidneyDisease"
                  placeholder="Enfermedad renal crónica"
                />
              </Grid>
              <Grid xs={6} sm={6} md={6} item>
                <CheckBoxField
                  name="respiratoryDisease"
                  placeholder="Enfermedad respiratoria"
                />
              </Grid>
              <Grid xs={6} sm={6} md={6} item>
                <CheckBoxField
                  name="cardiologicDisease"
                  placeholder="Enfermedad Cardiológica"
                />
              </Grid>
            </Grid>
            <Grid direction="column" container>
              <Grid xs={12} sm={12} md={12} item className={classes.field}>
                <TextField
                  name="age"
                  label="Edad"
                  placeholder="Edad"
                  type="number"
                  data-automation-id="form-age"
                  inputProps={{
                    min: 0,
                    max: 110,
                    step: 1,
                  }}
                />
              </Grid>
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <TextField
                  required
                  name="dni"
                  type="number"
                  label="DNI o Número de pasaporte"
                  placeholder="DNI o Número de pasaporte"
                  data-automation-id="form-dni"
                />
              </Grid>
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <TextField
                  required
                  name="email"
                  type="email"
                  label="Correo Electrónico"
                  placeholder="Correo Electrónico"
                  data-automation-id="form-email"
                />
              </Grid>
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <TextField
                  required
                  type="tel"
                  name="phone"
                  label="Teléfono"
                  placeholder="Teléfono"
                  data-automation-id="form-phone"
                />
              </Grid>
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <TextField
                  name="address"
                  label="Dirección"
                  placeholder="Dirección"
                  data-automation-id="form-address"
                />
              </Grid>
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <TextField
                  name="localidad"
                  label="Localidad"
                  placeholder="Localidad"
                  data-automation-id="form-localidad"
                />
              </Grid>
              <Grid xs={12} sm={12} md={12} className={classes.field} item>
                <SelectField
                  label="Provincia"
                  name="provincia"
                  valueOption="id"
                  options={provinces}
                  labelOption="province"
                  data-automation-id="form-province"
                />
              </Grid>
              <Grid xs={12} sm={12} md={12} item>
                <Typography
                  className={classes.requiredText}
                  color="textSecondary"
                >
                  (*) Campo Requerido
                </Typography>
              </Grid>
            </Grid>
            <Button
              fullWidth
              disableElevation
              color="secondary"
              variant="contained"
              disabled={hasValidationErrors}
              className={classes.submitButton}
              onClick={() => setShowDialog(true)}
              data-automation-id="form-submit-button"
            >
              confirmar
            </Button>
            <ConfirmationDialog
              open={showDialog}
              onAccept={handleSubmit}
              onClose={() => setShowDialog(false)}
            />
          </Container>
        )}
      />
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="error-dialog-title"
        open={open}
      >
        <DialogTitle id="error-dialog-title">Error</DialogTitle>
        <DialogContent>
          Parece que ha habido un error. Por favor, vuelva a enviar el
          formulario.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Form.displayName = 'Form';
Form.defaultProps = {
  initialValues: {
    age: '',
    dni: '',
    email: '',
    phone: '',
    address: '',
    localidad: '',
    bodyTemperature: 37,
    provincia: 0,
    cancer: false,
    hepatic: false,
    diabetes: false,
    soreThroat: false,
    isPregnant: false,
    kidneyDisease: false,
    isOver60yearsOld: false,
    respiratoryDisease: false,
    cardiologicDisease: false,
    difficultyBreathing: false,
  },
  subscription: {
    active: false,
    dirty: false,
    dirtyFields: false,
    dirtyFieldsSinceLastSubmit: false,
    dirtySinceLastSubmit: false,
    error: false,
    errors: false,
    hasSubmitErrors: false,
    initialValues: false,
    invalid: false,
    modified: false,
    pristine: false,
    submitError: false,
    submitErrors: false,
    submitFailed: false,
    submitting: false,
    submitSucceeded: false,
    touched: false,
    valid: false,
    validating: false,
    values: false,
    visited: false,
  },
};

export default Form;
