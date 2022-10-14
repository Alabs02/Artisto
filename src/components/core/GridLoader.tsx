import React, { Fragment } from 'react';
import uuid from 'react-uuid';

const GridLoader = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  const renderList = () => {
    return list.map((n) => (
      <div key={uuid()} className="col-span-12 col-span-lg-4 col-span-2xl-3">
        <div className="ssc ssc-square grid-loader__card"></div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="grid grid-col-12 gap-y-60 gap-x-md-33">
        {renderList()}
      </div>
    </Fragment>
  );
};

export { GridLoader as default };
