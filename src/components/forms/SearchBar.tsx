import React, { Fragment, FC } from 'react';
import classNames from 'classnames';

// INTERFACES
import { IForm } from '@/interfaces';

interface IProps extends IForm.ISearchBarProps {}

const SearchBar: FC<IProps> = ({
  Icon,
  placeholder,
  iconPosition,
  setQuery,
}) => {
  const iconClassNames = {
    'search-bar__icon--prepend': iconPosition === 'prepend',
    'search-bar__icon--append': iconPosition === 'append',
  };

  const inputClassNames = {
    'search-bar__input--prepend': iconPosition === 'prepend',
    'search-bar__input--append': iconPosition === 'append',
  };

  return (
    <Fragment>
      <div className="search-bar">
        <Icon
          fontSize={25}
          className={classNames('search-bar__icon', iconClassNames)}
        />

        <input
          type={'text'}
          placeholder={placeholder || 'Search'}
          className={classNames('form-control', inputClassNames)}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </Fragment>
  );
};

export { SearchBar as default };
