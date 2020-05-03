import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';

import MinDeSalud from 'assets/images/minsalud.png';
import { useStyles } from './styles';

const Quarantine = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container
      data-automation-id="quarantine-container"
      className={classes.container}
      maxWidth="sm"
    >
      <Grid alignItems="center" direction="column" container>
        <Grid lg={12} item>
          <img
            className={classes.welcomeImage}
            src={MinDeSalud}
            alt="welcome"
          />
        </Grid>
        <Typography
          data-automation-id="quarantine-title"
          align="center"
          variant="h5"
        >
          Aislamiento domiciliario
        </Typography>
        <Typography
          data-automation-id="quarantine-message"
          className={classes.text}
          align="center"
        >
          Realice un automonitoreo de temperatura y síntomas y, en caso de
          desarrollar falta de aire, consultar inmediatamente.
        </Typography>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          disableElevation
          onClick={() => history.replace('/')}
          data-automation-id="quarantine-button"
        >
          Hacer Nuevo Test
        </Button>
      </Grid>
    </Container>
  );
};

Quarantine.displayName = 'Quarantine';

export default Quarantine;
