import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

const Loading = () => (
  <Grid
    alignContent="center"
    alignItems="center"
    direction="column"
    justify="center"
    container
    style={{ height: '100vh' }}
  >
    <CircularProgress />
  </Grid>
);

Loading.displayName = 'Loading';

export default Loading;
