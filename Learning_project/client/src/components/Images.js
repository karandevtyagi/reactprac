import React from 'react';


// core components

function Images() {
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${require('../assets/img/header.jpg')})`,
          }}
        />
      </div>
    </>
  );
}

export default Images;
