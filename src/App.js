import WebFontLoader from 'webfontloader';
import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from 'theme';
import Loading from 'components/Loading';
import { Form, Advices, Quarantine, Diagnosis, GoodDiagnosis } from 'screens';

const App = () => {
  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: ['Encode Sans'],
      },
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/diagnostico/:province" component={Diagnosis} />
            <Route path="/diagnostico-bueno" component={GoodDiagnosis} />
            <Route path="/cuarentena" component={Quarantine} />
            <Route path="/consejos" component={Advices} />
            <Route path="/" component={Form} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

App.displayName = 'App';

export default App;
