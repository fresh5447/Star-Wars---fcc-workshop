import React from 'react';

const Spinner = () => {
  return (
    <div className="spin-flex">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-spinner"></i>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner;
