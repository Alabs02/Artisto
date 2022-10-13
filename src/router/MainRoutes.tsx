import { Fragment } from 'react';
import { Route } from 'react-router-dom';

// MIDDLEWARES

// LAYOUTS

// PAGES
import { Home } from '@/pages/main.pages';

const MainRoutes = () => {
  return (
    <Fragment>
      <Route>
        <Route index element={<Home />} />
      </Route>
    </Fragment>
  );
}

export { MainRoutes as default };