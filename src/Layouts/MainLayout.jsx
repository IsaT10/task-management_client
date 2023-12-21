import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
