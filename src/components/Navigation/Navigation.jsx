import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/learn">Learn</NavLink>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
