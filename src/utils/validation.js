/* eslint-disable */
import { setIn } from 'final-form';
import { string, object, number, bool } from 'yup';

export const validationSchema = object().shape({
  email: string()
    .max(254, 'El Correo Electrónico no puede superar los 254 caracteres')
    .email('El Correo Electrónico no es válido')
    .required('El Correo Electrónico es requerido'),
  age: number()
    .nullable(true)
    .transform((v, o) => (o === '' ? null : v))
    .notRequired()
    .when('isOver60yearsOld', {
      is: true,
      then: number()
        .min(60, 'La Edad debe ser mayor o igual a 60 años')
        .max(110, 'La Edad debe ser menor a 110 años'),
      otherwise: number()
        .min(0, 'La Edad debe ser mayor o igual a 0')
        .max(110, 'La Edad debe ser menor a 110 años'),
    }),
  dni: string()
    .max(12, 'El DNI o Número de pasaporte no puede superar los 12 caracteres')
    .required('El DNI o Número de pasaporte es requerido'),
  phone: string()
    .matches(new RegExp('^\\d+$'), 'El Teléfono solo acepta números')
    .max(20, 'El Teléfono no puede superar los 20 caracteres')
    .required('El Teléfono es requerido'),
  bodyTemperature: number()
    .min(34, 'La temperatura no puede estar por debajo de los 34 grados')
    .max(42, 'La temperatura no puede superar los 42 grados')
    .default(37)
    .notRequired(),
  address: string()
    .max(250, 'El Domicilio no puede superar los 250 caracteres')
    .nullable(true)
    .notRequired(),
  localidad: string()
    .max(50, 'La localidad no puede superar los 50 caracteres')
    .nullable(true)
    .notRequired(),
  provincia: number(),
  cancer: bool().notRequired(),
  hepatic: bool().notRequired(),
  diabetes: bool().notRequired(),
  soreThroat: bool().notRequired(),
  isPregnant: bool().notRequired(),
  kidneyDisease: bool().notRequired(),
  isOver60yearsOld: bool().notRequired(),
  respiratoryDisease: bool().notRequired(),
  cardiologicDisease: bool().notRequired(),
  difficultyBreathing: bool().notRequired(),
});

export const validate = async (values) => {
  try {
    await validationSchema.validate(values, { abortEarly: false });
  } catch (err) {
    return err.inner.reduce(
      (formErrors, { path, message }) => setIn(formErrors, path, message),
      {}
    );
  }
};
