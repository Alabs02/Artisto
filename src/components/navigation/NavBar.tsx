import React, { Fragment } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import uuid from 'react-uuid';

// COMPONENTS
import { Button } from '@/components/core';

// STATIC IMAGES
import { BRAND_LOGO } from '@/assets/images';

// CONSTANTS
import { navbarItems } from '@/utilities/constants';

const NavBar = (): JSX.Element => {
  const navigate = useNavigate();
  const navbarAlt = 'Artisto Brand Logo';

  const goTOHomePage = () => navigate('/');

  const navBarClassNames = (isActive: boolean) => ({
    'btn-link--active': isActive,
    'btn-link--inactive': !isActive,
  });

  const renderNavbarItems = (): JSX.Element[] => {
    return navbarItems.map((item) => (
      <NavLink key={uuid()} to={item.to} className="btn-link navbar__link">
        {({ isActive }) => (
          <span className={classNames(navBarClassNames(isActive))}>
            {item.title}
          </span>
        )}
      </NavLink>
    ));
  };

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar__media" onClick={goTOHomePage}>
          <img src={BRAND_LOGO} alt={navbarAlt} className="navbar__logo" />
        </div>

        <div className="navbar__actions flex align-items-center hide visible-lg">
          {renderNavbarItems()}

          <Button title="Login" type="accent" classes={['mgx-30']} />

          <Button title="Explore arts" type="accent-inverse" />
        </div>
      </nav>
    </Fragment>
  );
};

export { NavBar as default };
