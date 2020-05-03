import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';

import { getProvinceById } from 'services';
import MinDeSalud from 'assets/images/minsalud.png';
import { useStyles } from './styles';

const Diagnosis = () => {
  const [{ province, phones }, setProvince] = useState({});
  const urlParams = useParams();
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    getProvinceById(urlParams).then(setProvince);
  }, [urlParams]);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid alignItems="center" direction="column" container>
        <Grid lg={12} item>
          <img
            src={MinDeSalud}
            className={classes.welcomeImage}
            alt="welcome"
          />
        </Grid>
        <Typography variant="h5">Nivel de riesgo</Typography>
        <Typography align="center">
          Podés llamar a alguno de los siguientes números de organismos
          oficiales para que te cuenten cómo proceder y recibir asistencia
          médica y psicológica
        </Typography>
        <Typography className={classes.bold}>{province}</Typography>
        <Typography variant="h5">{phones && phones.join(' ')}</Typography>
        <Typography className={classes.bold}>
          Ministerio de Salud en Argentina
        </Typography>
        <Typography variant="h5">0800-222-1002</Typography>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => history.replace('/')}
          disableElevation
        >
          Hacer Nuevo Test
        </Button>
      </Grid>
    </Container>
  );
};

Diagnosis.displayName = 'Diagnosis';

export default Diagnosis;
