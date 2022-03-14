import React, { useState } from 'react';
import Link from 'next/link';
import { NavbarToggler } from '.';
import { Menu } from './Menu';

export const NavBar: React.FC = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <nav
      data-testid="nav-bar"
      className="flex flex-wrap items-center justify-between py-2.5 px-3 mb-3 bg-light-blue-500"
    >
      <div className="container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a data-testid="nav-bar-link">
              <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
                SeaWord
              </span>
            </a>
          </Link>
          <NavbarToggler
            data-testid="test-nav-toggler"
            onClick={() => setOpenNavbar(!openNavbar)}
          />
        </div>
        <Menu open={openNavbar} />
      </div>
    </nav>
  );
};
