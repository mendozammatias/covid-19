import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Link,
} from '@material-ui/core';

const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const ConfirmationDialog = ({ open, onClose, onAccept }) => (
  <Dialog
    open={open}
    onClose={onClose}
    fullScreen={isMobile()}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title" variant="body1">
      Ministerio de Salud de la Nación
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Este formulario tiene caracter de declaración jurada, hacer una falsa
        declaración puede considerarse una contravención grave.
      </DialogContentText>
      <DialogContentText>
        Al confirmar acepto los{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`${process.env.PUBLIC_URL}/terminos.html`}
        >
          Términos y Condiciones
        </Link>{' '}
        de la Aplicación Covid-19 Ministerio de Salud así como a la Política de
        Privacidad establecida en el punto 5 de los{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`${process.env.PUBLIC_URL}/terminos.html`}
        >
          Términos y Condiciones
        </Link>
        .
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        variant="text"
        onClick={onClose}
        data-automation-id="dialog-close-button"
      >
        Cancelar
      </Button>
      <Button
        variant="text"
        onClick={onAccept}
        data-automation-id="dialog-accept-button"
      >
        OK, Enviar
      </Button>
    </DialogActions>
  </Dialog>
);

ConfirmationDialog.displayName = 'ConfirmationDialog';

export default ConfirmationDialog;
