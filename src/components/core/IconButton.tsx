import React, { Fragment, FC, MouseEventHandler } from 'react';

interface IProps {
  Icon: JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const IconButton: FC<IProps> = ({ Icon, onClick }) => {
  return (
    <Fragment>
      <button className="btn-circle" onClick={onClick}>
        {Icon}
      </button>
    </Fragment>
  );
};

export { IconButton as default };
