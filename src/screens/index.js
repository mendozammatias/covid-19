import React from 'react';

export const Form = React.lazy(() =>
  import(/* webpackChunkName: "form" */ 'screens/Form')
);

export const Advices = React.lazy(() =>
  import(/* webpackChunkName: "advices" */ 'screens/Advices')
);

export const Quarantine = React.lazy(() =>
  import(/* webpackChunkName: "quarantine" */ 'screens/Quarantine')
);

export const Diagnosis = React.lazy(() =>
  import(/* webpackChunkName: "diagnosis" */ 'screens/Diagnosis')
);

export const GoodDiagnosis = React.lazy(() =>
  import(/* webpackChunkName: "good-diagnosis" */ 'screens/GoodDiagnosis')
);
