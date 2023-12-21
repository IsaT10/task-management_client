import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
