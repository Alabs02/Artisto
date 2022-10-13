import { StrictMode } from 'react'
import { render } from 'react-dom'

// APP
import App from '@/app';

// GLOBAL STYLES
import '@/styles/library/bundle.scss';
import '@/styles/global.scss';

// APP ROOT
const root = document.getElementById('app-root') as HTMLElement;

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
