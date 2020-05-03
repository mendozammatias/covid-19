import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Link, Typography } from '@material-ui/core';

import QuedateEnCasa from 'assets/images/quedateencasa.jpg';
import { useStyles } from './styles';

const GoodDiagnosis = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container
      maxWidth="xs"
      className={classes.container}
      data-automation-id="diagnostic-container"
    >
      <img
        alt="quedate en casa"
        src={QuedateEnCasa}
        className={classes.stayAtHomeImg}
      />
      <div className={classes.content}>
        <Typography
          className={classes.text}
          data-automation-id="diagnostic-message"
        >
          El distanciamiento social es fundamental para cuidarte y cuidar a los
          demás. Por eso te pedimos que te quedes en casa. Ante cualquier
          síntoma compatible con el coronavirus Covid-19 comunicate al:
        </Typography>
        <Typography
          align="center"
          variant="h5"
          data-automation-id="diagnostic-phone"
        >
          0800-222-1002
        </Typography>
        <Typography align="center" variant="body2">
          Más información en
        </Typography>
        <Link
          href="https://www.argentina.gob.ar/salud/coronavirus-COVID-19"
          target="_blank"
          rel="noreferrer noopener"
          data-automation-id="diagnostic-link"
        >
          <Typography
            align="center"
            variant="body2"
            paragraph
            data-automation-id="diagnostic-link-content"
          >
            www.argentina.gob.ar/coronavirus
          </Typography>
        </Link>
        <Button
          fullWidth
          color="primary"
          onClick={() => history.replace('/')}
          variant="contained"
          disableElevation
          data-automation-id="diagnostic-button"
        >
          Hacer Nuevo Test
        </Button>
      </div>
    </Container>
  );
};

GoodDiagnosis.displayName = 'GoodDiagnosis';

export default GoodDiagnosis;
