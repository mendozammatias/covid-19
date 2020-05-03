import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

import { getAdvices } from 'services';
import MinDeSalud from 'assets/images/minsalud.png';
import { useStyles } from './styles';

const Advices = () => {
  const [advices, setAdvices] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAdvices().then(setAdvices);
  }, []);

  return (
    <Container maxWidth="xs">
      <Grid spacing={0} alignItems="center" direction="column" container>
        <Grid lg={12} item>
          <img
            src={MinDeSalud}
            className={classes.welcomeImage}
            alt="welcome"
          />
        </Grid>
        {advices.map((advice, idx) => (
          <Grid key={`advice_${idx}`} lg={12} item>
            <Card title={advice.titulo} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  align="center"
                  className={classes.cardTitle}
                  variant="subtitle1"
                  paragraph
                >
                  {advice.titulo}
                </Typography>
                <img
                  className={classes.thumbnail}
                  src={advice.thumbnail}
                  alt="thumbnail"
                />
                <Typography className={{ marginBottom: 10, marginTop: 10 }}>
                  {advice.Bajada}
                </Typography>
              </CardContent>
              {advice.Link && (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    window.location.href = advice.link;
                  }}
                  disableElevation
                >
                  Ver
                </Button>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Advices.displayName = 'Advices';

export default Advices;
