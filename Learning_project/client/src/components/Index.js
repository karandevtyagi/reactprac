import React from 'react';


// sections for this page
import Images from './Images';
import Panel from './Panel';
import Products from './Product/products';

function Index() {
  React.useEffect(() => {
    document.body.classList.add('index-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('index-page');
      document.body.classList.remove('sidebar-collapse');
    };
  });
  return (
    <>
      <Panel />
      <div className="wrapper">

        <div className="main">
          <Images />

        </div>
        <Products />

      </div>
    </>
  );
}

export default Index;
