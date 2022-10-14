import { Fragment } from 'react';
import { Route } from 'react-router-dom';

// MIDDLEWARES

// LAYOUTS

// PAGES
import { HomePage, PreviewPage } from '@/pages/main.pages';

const MainRoutes = () => {
  return (
    <Fragment>
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/preview/:slug/:id" element={<PreviewPage />} />
      </Route>
    </Fragment>
  );
};

export { MainRoutes as default };
