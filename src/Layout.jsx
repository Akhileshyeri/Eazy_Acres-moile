import React from 'react';

import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
     
      <Outlet /> {/* This renders the child page */}
      <Footer />
    </>
  );
};

export default Layout;
