import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import routePaths from '../constants/routePaths';

const AppLayout = () => {
  return (
    <div className='flex flex-col h-screen w-screen overflow-hidden'>
      <header className='flex justify-between px-5 w-full'>
        <div>Logo</div>
        <nav>
          <Link to={`${routePaths.project.root}/${routePaths.project.sub.list}`}>Projects</Link>
          <Link to={routePaths.about.root}>About</Link>
        </nav>
      </header>
      <main className='flex-grow-1'>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
