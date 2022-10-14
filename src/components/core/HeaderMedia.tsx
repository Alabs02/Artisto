import React, { Fragment } from 'react';

// STATIC IMAGES
import {
  LEVI_CLANCY_IMG,
  SHAPED_SPIRAL_IMG,
  ART_BACKGROUND_IMG,
} from '@/assets/images';

const HeaderMedia = () => {
  return (
    <Fragment>
      <div className="header-media">
        <img
          src={SHAPED_SPIRAL_IMG}
          draggable={false}
          alt="Shaped spiral"
          className="header-media__spiral"
        />

        <img
          src={LEVI_CLANCY_IMG}
          draggable={false}
          alt="Levi Clancy"
          className="header-media__art"
        />

        <img
          src={ART_BACKGROUND_IMG}
          draggable={false}
          alt="Header Media"
          className="header-media__bg"
        />
      </div>
    </Fragment>
  );
};

export { HeaderMedia as default };
