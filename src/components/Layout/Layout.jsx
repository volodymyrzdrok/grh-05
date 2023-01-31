import React from 'react';
// import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = props => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
