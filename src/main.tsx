import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store';
import { MaterialToastContainer } from '@/components/core';

// APP
import App from '@/app';

// GLOBAL STYLES
import 'nprogress/nprogress.css';
import '@/styles/library/bundle.scss';
import '@/styles/global.scss';
import 'material-react-toastify/dist/ReactToastify.css';

// APP ROOT
const root = document.getElementById('app-root') as HTMLElement;

render(
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <StrictMode>
        <App />
        <MaterialToastContainer />
      </StrictMode>
    </PersistGate>
  </Provider>,
  root,
);
