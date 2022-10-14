import React, { Fragment } from 'react';

// COMPONENTS
import { NavBar } from '@/components/navigation';
import { HeaderMedia, Button } from '@/components/core';

// STATIC IMAGES
import { SPIRAL_IMG, STAR_IMG } from '@/assets/images';

const HeaderSection = () => {
  return (
    <Fragment>
      <header className="header-section">
        <NavBar />

        <div className="header-section__body grid grid-col-12 pdx-20 pdx-lg-33">
          <div className="header-section__content col-span-12 col-span-lg-8">
            <div className="header-section__heading fw-bold">
              Discover amazing art around the{' '}
              <span className="text-accent">world</span>
            </div>

            <div className="header-section__copy mgt-45 fw-normal">
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and many more
            </div>

            <div className="header-section__actions mgt-68">
              <Button
                title="Explore arts"
                type="accent-inverse"
                classes={['header-section__btn']}
              />
            </div>

            <img
              src={STAR_IMG}
              draggable={false}
              alt="star"
              className="header-section__star"
            />
          </div>

          <div className="header-section__media hide visible-lg col-span-12 col-span-lg-4">
            <HeaderMedia />
          </div>
        </div>

        <img
          draggable={false}
          src={SPIRAL_IMG}
          alt="Spiral"
          className="header-section__spiral"
        />
      </header>
    </Fragment>
  );
};

export { HeaderSection as default };
