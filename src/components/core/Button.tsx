import React, { Fragment, FC } from 'react';
import classNames from 'classnames';

interface IProps {
  title: string;
  Icon?: JSX.Element;
  classes?: string[];
  type: 'accent' | 'accent-inverse';
  onClick?: VoidFunction;
}

const Button: FC<IProps> = ({ title, type, classes, Icon, onClick }) => {
  const buttonClassNames = {
    'btn--accent': type === 'accent',
    'btn--accent-inverse': type === 'accent-inverse',
  };

  const btnClasse = classes?.join(' ') || '';

  return (
    <Fragment>
      <button
        onClick={onClick}
        className={classNames(`btn ${btnClasse}`, buttonClassNames)}
      >
        <div className="btn__body d-flex align-item-center justify-content-center">
          <span className={Icon ? 'mgr-15' : ''}>{title}</span>

          {Icon && Icon}
        </div>
        <div className="btn--panel"></div>
      </button>
    </Fragment>
  );
};

export { Button as default };
