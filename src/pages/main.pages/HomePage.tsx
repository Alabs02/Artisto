import React, { Fragment } from 'react';

// SECTIONS
import { HeaderSection, ArtCollectionSection } from '@/sections';

const HomePage = (): JSX.Element => {
  return (
    <Fragment>
      <HeaderSection />

      <ArtCollectionSection />
    </Fragment>
  );
};

export { HomePage as default };
